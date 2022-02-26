import type { Timestamp } from 'firebase/firestore';

export interface Estimate {
    name: string,
    point: string,
    appendedAt: Timestamp,
}
export interface TableState {
    closed: boolean,
}
export interface Room {
    estimates: Estimate[],
    tableState: TableState,
}