import { writable } from 'svelte/store';
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
	DocumentReference,
	type DocumentData
} from 'firebase/firestore';
import type { Estimate, TableState, Room } from './types';

const firebaseConfig = {
	projectId: 'sample-project-294713'
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
let roomRef: DocumentReference<DocumentData>;

export const estimates = createEstimates();
export const tableState = createTableState();
export const setup = (roomId: string) =>
	new Promise<void>(async (resolve) => {
		const roomCollection = collection(db, 'rooms');
		roomRef = doc(roomCollection, roomId);
		onSnapshot(roomRef, (documentSnapshot) => {
			if (documentSnapshot && documentSnapshot.exists()) {
				const room: Room = documentSnapshot.data() as Room;
				const comparator = (a: Estimate, b: Estimate) =>
					a.appendedAt.seconds - b.appendedAt.seconds;
				estimates.set(room.estimates.sort(comparator));
				tableState.set(room.tableState);
			} else {
				estimates.set([]);
				tableState.set({ closed: true });
			}
		});
		resolve();
	});

function createEstimates() {
	const { subscribe, set } = writable<Estimate[]>([]);

	return {
		subscribe,
		set,
		append: (name: string, point: string) => {
			getDoc(roomRef).then((documentSnapshot) => {
				if (documentSnapshot && documentSnapshot.exists()) {
					updateDoc(roomRef, {
						estimates: arrayUnion({
							name: name,
							point: point,
							appendedAt: Timestamp.now()
						})
					});
				} else {
					const _estimates: Estimate[] = [];
					const _tableState: TableState = { closed: true };
					_estimates.push({
						name: name,
						point: point,
						appendedAt: Timestamp.now()
					});
					setDoc(roomRef, {
						estimates: _estimates,
						tableState: _tableState
					});
				}
			});
		},
		remove: (name: string, callback: () => any) => {
			getDoc(roomRef).then((documentSnapshot) => {
				if (documentSnapshot && documentSnapshot.exists()) {
					const room = documentSnapshot.data() as Room;
					const estimate = room.estimates.filter((e) => e.name === name).shift();
					if (estimate) {
						updateDoc(roomRef, {
							estimates: arrayRemove(estimate)
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
		}
	};
}

function createTableState() {
	const { subscribe, set } = writable<TableState>({ closed: true });

	return {
		subscribe,
		set,
		open: () => {
			updateDoc(roomRef, { 'tableState.closed': false });
		},
		close: () => {
			deleteDoc(roomRef);
		}
	};
}
