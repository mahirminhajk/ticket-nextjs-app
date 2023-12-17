import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplat from './ProgressDisplat'
import StatusDisplay from './StatusDisplay'

function TicketCard() {
    return (
        <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
            <div className='flex mb-3'>
                <PriorityDisplay />
                <div className='ml-auto'>
                    <DeleteBlock />
                </div>
            </div>
            <h4>Ticket Title</h4>
            <hr className='h-px border-0 bg-page mb-2' />
            <p className='whitespace-pre-wrap'>
                this is the ticket description!. Please do this ticket as soon as possible. Thank you!
            </p>
            <div className='flex-grow'></div>
            <div className='flex mt-2'>
                <div className='flex flex-col'>
                    <p className='text-xs my-1'>03/23/23 10:23PM</p>
                    <ProgressDisplat />
                </div>
                <div className='ml-auto flex items-end'>
                    <StatusDisplay />
                </div>
            </div>
        </div>
    )
}

export default TicketCard