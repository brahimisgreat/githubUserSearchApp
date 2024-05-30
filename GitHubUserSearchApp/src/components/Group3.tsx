import  './Group3.css'
import iconSearch from '../assets/icon-search.svg'   

export const Group3 = () => {
  return (
    <div className='group3'>
        <img  src={iconSearch}/>
        <input type='text' placeholder='Search for Github username' required />
        <button>Search</button>
    </div>
  )
}
