import './Group7.css'

export const Group7 = ({theme,data}) => {
  return (
    <div className={theme ? 'group7Light' : 'group7'}>
        <p>
        {data.bio ? data.bio : 'No bio available'}
        </p>
    </div>
  )
}
