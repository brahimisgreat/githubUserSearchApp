import favicon from '../../assets/favicon-32x32.png';
import './Group5.css';

export const Group5 = () => {
  return (
    <div className='group5'>
        <img src={favicon}/>
        <div className='userInfo'>
           <h3>name</h3>
              <span>username</span>
              <p>joiner 25 jan 2011</p> 
        </div>
    </div>
  )
}
