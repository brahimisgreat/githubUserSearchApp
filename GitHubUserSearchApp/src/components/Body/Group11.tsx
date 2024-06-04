import './Group11.css'
import location from '../../assets/icon-location.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import website from '../../assets/icon-website.svg'
import company from '../../assets/icon-company.svg'

export const Group11 = ({theme,data}) => {
  return (
    <div className={theme ? "group11Light" : "group11"}>
        <div className='socials'>
            <img src={location} style={data.location ? undefined : {opacity:'50%'}  } />
            <span style={data.location ? undefined : {opacity:'50%'}  } >{data.location ? data.location : "Not Available" }</span>
        </div>
        <div className='socialsWeb'>
            <img src={website} style={data.url ? undefined : {opacity:'50%'}  } />
            <span style={data.url ? undefined : {opacity:'50%'}  } >{data.url}</span>
        </div>
        <div className='socials'>
            <img src={twitterIcon} style={data.twitter_username ? undefined : {opacity:'50%'}  }/>
            <span style={data.twitter_username ? undefined : {opacity: '50%'}}>{data.twitter_username ? data.twitter_username : "Not Avialable"}</span>
        </div>
        <div className='socials'>
            <img style={data.company ? undefined : {opacity:"50%"}} src={company}/>
            <span style={data.company ? undefined : {opacity:"50%"}}>{data.company ? data.company : "Not Available"}</span>
        </div>

    </div>
  )
}
