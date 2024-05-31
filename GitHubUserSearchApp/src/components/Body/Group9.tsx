import React from 'react'
import './Group9.css'

export const Group9 = ({data}) => {
  return (
    <div className='group9'>
        <div className='babys'>
            <h5>Repos</h5>
            <span>{data.public_repos}</span>
        </div>
        <div className='babys'>
            <h5>Followers</h5>
            <span>{data.followers}</span>
        </div>
        <div className='babys'>
            <h5>Following</h5>
            <span>{data.following}</span>
        </div>
    </div>
  )
}
