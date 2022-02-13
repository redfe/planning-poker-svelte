import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  arrayRemove,
  arrayUnion,
  Timestamp,
} from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'sample-project-294713',
};
const firebaseApp = initializeApp(firebaseConfig);
const roomId = getSetupedRoomId();
const db = getFirestore(firebaseApp);
const roomCollection = collection(db, 'rooms');
const roomRef = doc(roomCollection, roomId);

export const estimates = createEstimates();
export const tableState = createTableState();
export const setup = new Promise((resolve) => {
  onSnapshot(roomRef, (documentSnapshot) => {
    if (documentSnapshot && documentSnapshot.exists()) {
      const room = documentSnapshot.data();
      const comparator = (a, b) => a.appendedAt.seconds - b.appendedAt.seconds;
      estimates.set(room.estimates.sort(comparator));
      tableState.set(room.tableState);
    } else {
      estimates.set([]);
      tableState.set({ closed: true });
    }
  });
  resolve();
});

function getSetupedRoomId() {
  const search = window.location.search;
  let roomId;
  if (!search) {
    const uuid = uuidv4();
    window.location.hash = uuid;
    window.history.replaceState('', '', '?' + uuid);
    roomId = uuid;
  } else {
    roomId = search.substring(1);
  }
  return roomId;
}

function createEstimates() {
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    set,
    append: (name, point) => {
      getDoc(roomRef).then((documentSnapshot) => {
        if (documentSnapshot && documentSnapshot.exists()) {
          updateDoc(roomRef, {
            estimates: arrayUnion({
              name: name,
              point: point,
              appendedAt: Timestamp.now(),
            }),
          });
        } else {
          let _estimates = [];
          let _tableState = { closed: true };
          _estimates.push({
            name: name,
            point: point,
            appendedAt: Timestamp.now(),
          });
          setDoc(roomRef, {
            estimates: _estimates,
            tableState: _tableState,
          });
        }
      });
    },
    remove: (name, callback = null) => {
      getDoc(roomRef).then((documentSnapshot) => {
        if (documentSnapshot && documentSnapshot.exists()) {
          const room = documentSnapshot.data();
          const estimate = room.estimates
            .filter((e) => e.name === name)
            .shift();
          if (estimate) {
            updateDoc(roomRef, {
              estimates: arrayRemove(estimate),
            }).then(callback);
            return;
          }
        }
        if (callback) {
          callback();
        }
      });
    },
    clear: () => {
      deleteDoc(roomRef);
    },
  };
}

function createTableState() {
  const { subscribe, set } = writable({ closed: true });

  return {
    subscribe,
    set,
    open: () => {
      updateDoc(roomRef, { 'tableState.closed': false });
    },
    close: () => {
      deleteDoc(roomRef);
    },
  };
}
