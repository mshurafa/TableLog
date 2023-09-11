"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "@/lib"

import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    Button,
    Calendar
} from "@/components"
import { useLogStore } from "@/store"
import { SelectSingleEventHandler } from "react-day-picker"

export function DatePicker() {
    const [log, setDate] = useLogStore((state) => [state.log, state.setDate])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !log.date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {log.date ? format(log.date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={log.date}
                    onSelect={setDate as SelectSingleEventHandler}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
