import './Group1.css'
import  sunIcon from  '../assets/icon-sun.svg'

export const Group1 = () => {
  return (
    <div className='group1'>
        <h3>devfinder</h3>
        <div className='containn'>
            <span>LIGHT</span>
            <img src={sunIcon}/>
        </div>
    </div>
  )
}
