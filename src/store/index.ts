import { create } from 'zustand'
import type { Ilog, LogStore } from '@/types'

export const useLogStore = create<LogStore>((set) => ({
    log: {
        note: "",
        hour: 0,
        date: new Date,
    },
    setLog: (log: Ilog) => set((state) => ({
        log: {
            ...state.log, ...log
        }
    })),
    setDate: (date: Date) => set((state) => ({
        log: {
            ...state.log,
            date
        }
    }))

}))
