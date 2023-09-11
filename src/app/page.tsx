import { DayBox, Modal, TableLog } from '@/components'
import { Plus } from '@/lib'


export default function Home() {
    return (
        <div className="">
            <div className={``}>
                <Modal
                    title='Add new event'
                    DTitle="Create Log"
                    className='w-72'
                    titleIcon={<Plus className='mr-3' />}
                />
                <DayBox />
                <TableLog />

            </div>
        </div>
    )
}
