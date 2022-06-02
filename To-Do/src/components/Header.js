import PropsTypes from 'prop-types' 
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title , onAdd , showAdd}) => {
  const location = useLocation()

  return (
  <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} 
      text={showAdd ? 'close' : 'Add'} onClick = {onAdd}
      />}
  </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.PropsTypes ={
    title: PropsTypes.string.isRequired,
}

export default Header
