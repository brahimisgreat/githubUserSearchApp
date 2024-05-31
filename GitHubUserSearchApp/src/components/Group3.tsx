import  './Group3.css'
import iconSearch from '../assets/icon-search.svg'
import { useState } from 'react'   


export const Group3 = ({data, setData}) => {

  const [search, setSearch] = useState('')

  async function handleClick() {
    const response = await fetch(`https://api.github.com/users/${search}`)
    const datas = await response.json()
    setData(datas)
    console.log(datas)
    console.log(data)
  }
  return (
    <div className='group3'>
        <img  src={iconSearch}/>
        <input type='text' placeholder='Search for Github username' required  value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        <button  onClick={handleClick}>Search</button>
    </div>
  )
}
