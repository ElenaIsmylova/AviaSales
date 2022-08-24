import './header.css'
import logo from './logo.svg'

function Header() {
	return (
		<header className="header">
			<img className="logo" src={logo} alt="logo" />
		</header>
	)
}
  
export default Header