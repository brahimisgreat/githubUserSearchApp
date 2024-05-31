import './Group11.css'
import location from '../../assets/icon-location.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import website from '../../assets/icon-website.svg'
import company from '../../assets/icon-company.svg'

export const Group11 = ({data}) => {
  return (
    <div className='group11'>
        <div className='socials'>
            <img src={location}/>
            <span>{data.location ? data.location : "Not Available" }</span>
        </div>
        <div className='socials'>
            <img src={website}/>
            <span>{data.url}</span>
        </div>
        <div className='socials'>
            <img src={twitterIcon}/>
            <span>sanfrancisoc</span>
        </div>
        <div className='socials'>
            <img src={company}/>
            <span>sanfrancisoc</span>
        </div>

    </div>
  )
}
