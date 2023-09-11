import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components'
import React, { Children, ReactNode } from 'react'

type Props = {
    children?: ReactNode
    content?: string
}

export const HoverBox = ({ children, content }: Props) => {
    return (
        <div>
            <HoverCard>
                <HoverCardTrigger>{children}</HoverCardTrigger>
                <HoverCardContent className='flex justify-center'>
                    {content}
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}

export default HoverCard
