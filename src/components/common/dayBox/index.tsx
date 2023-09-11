"use client"
import { getDateInMonth } from '@/utils/date/getDateInMonth'
import React from 'react'
import {
    Button,
    HoverBox,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components"
type Props = {}


const getBgColor = (value: number) => {
    if (value === 0) {
        return 'bg-gray-100'
    } else if (value < 5) {
        return 'bg-green-100'
    } else if (value < 10) {
        return 'bg-green-300'
    } else {
        return 'bg-green-500'
    }
}
export function DayBox({ }: Props) {

    let hour = 0;
    return (
        <div className='flex justify-center border border-dashed rounded-sm mt-5 flex-wrap p-2'>
            {getDateInMonth().map((day, index) => (
                <HoverBox key={index} content={day}>
                    <div className={`h-6 w-6 ${getBgColor(hour || 0)} rounded-md m-2 flex cursor-pointer`} >
                    </div>
                </HoverBox>
            ))
            }
        </div >
    )
}

export default DayBox
