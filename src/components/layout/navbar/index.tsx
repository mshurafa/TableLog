import { Button } from '@/components'
import { TimerIcon } from '@/lib'

import React from 'react'

type Props = {}

export const Navbar = (props: Props) => {
    return (
        <div className='flex justify-between items-center py-5'>

            <div className="flex items-center ">
                <TimerIcon className='text-xl' />
                <h1> Time </h1>
            </div>
            <Button>Logout</Button>
        </div>
    )
}

export default Navbar
