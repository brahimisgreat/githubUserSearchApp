import './Group1.css'
import  sunIcon from  '../assets/icon-sun.svg'

export const Group1 = ({theme,setThemeToggle}) => {

  function toggleTheme() {
      setThemeToggle((prev) => !prev)
      console.log(theme)
  }
  return (

    
    <div className='group1'>
        <h3>devfinder</h3>
        <div className='containn' onClick={toggleTheme}>
            <span >LIGHT</span>
            <img src={sunIcon}/>
        </div>
    </div>
  )
}
