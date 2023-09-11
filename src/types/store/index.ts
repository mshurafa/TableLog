export interface LogStore {
    log: Ilog,
    setLog: (log: Ilog) => void;
    // getLog: () => Ilog;
    setDate: (date: Date) => void,
}
export interface Ilog {
    note: string;
    hour: number,
    date: Date
}
