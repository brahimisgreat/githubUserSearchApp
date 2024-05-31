import React from 'react'
import './Group7.css'

export const Group7 = ({data}) => {
  return (
    <div className='group7'>
        <p>
        {data.bio ? data.bio : 'No bio available'}
        </p>
    </div>
  )
}
