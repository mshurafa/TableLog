/* eslint-disable react/no-unescaped-entities */
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Button, Input, Label, Calendar
} from "@/components"

import { HTMLAttributes, useState, ReactNode } from "react"
import { useLogStore } from '@/store'

import { DatePicker } from ".."
type Props = {
    title: string
    DTitle: string
    className?: string | undefined
    titleIcon?: ReactNode
}
export function Modal({ title, DTitle, className, titleIcon }: Props) {
    const [log] = useLogStore((state) => [state.log])
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={className} variant="outline">
                    {titleIcon}
                    {title}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{DTitle}</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                            Date
                        </Label>
                        <DatePicker />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="hour" className="text-right">
                            Hour
                        </Label>
                        <Input id="hour" className="col-span-3" type="number" value={log.hour} onChange={(e) => setLog({
                            ...log,
                            hour: parseInt(e.target.value)
                        })} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="note" className="text-right">
                            Note
                        </Label>
                        <Input id="note" className="col-span-3" placeholder="Note the log" value={log.note} onChange={(e) => setLog({
                            ...log,
                            note: e.target.value
                        })} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
