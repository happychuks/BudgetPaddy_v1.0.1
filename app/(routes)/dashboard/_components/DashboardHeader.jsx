import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='border-b flex justify-between p-5 shadow-sm'>
        <div>

        </div>
        <div>
            <UserButton/>
        </div>
    </div>
  )
}

export default DashboardHeader