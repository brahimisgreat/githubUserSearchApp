import './Group1.css'
import  sunIcon from  '../assets/icon-sun.svg'
import  moonIcon from  '../assets/icon-moon.svg'

type Group1Props = {
  theme: boolean,
  setThemeToggle: (prev: boolean) => void
}

export const Group1 = ({theme,setThemeToggle}:Group1Props) => {


  function toggleTheme() {
      setThemeToggle(theme ? false : true);
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
