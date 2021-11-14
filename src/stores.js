import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  projectId: 'sample-project-294713',
};

firebase.initializeApp(firebaseConfig);
const roomId = getSetupedRoomId();
const db = firebase.firestore();
const roomRef = db.collection('rooms').doc(roomId);

export const estimates = createEstimates();
export const tableState = createTableState();
export const setup = new Promise((resolve) => {
  roomRef.onSnapshot((documentSnapshot) => {
    if (documentSnapshot && documentSnapshot.exists) {
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
      roomRef.get().then((documentSnapshot) => {
        let _estimates = [];
        let _tableState = { closed: true };
        if (documentSnapshot && documentSnapshot.exists) {
          const room = documentSnapshot.data();
          _estimates = [...room.estimates.filter((e) => e.name !== name)];
          _tableState = room.tableState;
        }
        _estimates.push({
          name: name,
          point: point,
          appendedAt: firebase.firestore.Timestamp.now(),
        });
        roomRef.set({
          estimates: _estimates,
          tableState: _tableState,
        });
      });
    },
    remove: (name, callback = null) => {
      roomRef.get().then((documentSnapshot) => {
        if (documentSnapshot && documentSnapshot.exists) {
          const room = documentSnapshot.data();
          room.estimates = room.estimates.filter((e) => e.name !== name);
          roomRef.set(room).then(callback);
        } else {
          callback();
        }
      });
    },
    clear: () => {
      roomRef.delete();
    },
  };
}

function createTableState() {
  const { subscribe, set } = writable({ closed: true });

  return {
    subscribe,
    set,
    open: () => {
      roomRef.get().then((documentSnapshot) => {
        if (documentSnapshot && documentSnapshot.exists) {
          const room = documentSnapshot.data();
          room.tableState = {
            closed: false,
          };
          roomRef.set(room);
        }
      });
    },
    close: () => {
      roomRef.delete();
    },
  };
}
