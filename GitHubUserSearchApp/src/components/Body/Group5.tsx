import favicon from '../../assets/favicon-32x32.png';
import './Group5.css';

export const Group5 = ({data}) => {
  
  return (
    <div className='group5'>
        <img src={data.avatar_url}/>
        <div className='userInfo'>
           <h3>{data.name}</h3>
              <span>{data.login}</span>
              <p>Joined {data.created_at}</p> 
        </div>
    </div>
  )
}
