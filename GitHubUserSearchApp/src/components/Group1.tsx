import './Group1.css'
import  sunIcon from  '../assets/icon-sun.svg'
import  moonIcon from  '../assets/icon-moon.svg'

export const Group1 = ({theme,setThemeToggle}) => {

  function toggleTheme() {
      setThemeToggle((prev) => !prev)
      console.log(theme)
  }
  return (

    
    <div className={theme ? "group1Light": "group1"}>
        <h3>devfinder</h3>
        <div className='containn' onClick={toggleTheme}>
            <span >{theme ? "DARK": "LIGHT" }</span>
            <img src={theme ? moonIcon : sunIcon}/>
        </div>
    </div>
  )
}
