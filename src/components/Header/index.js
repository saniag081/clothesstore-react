import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import Wrapper from '../Wrapper'
import Button from '../Button'
import Search from '../Search'
import './Header.scss'

function Header() {
	const { state, setIsShowNav } = useContext(AppContext);
	const { isShowNav } = state

	const handleToggleNav = () => {
		setIsShowNav(!isShowNav)
	}

	return (
		<header className="header">
			<Wrapper>
				<div className="header-container">
					<div className="header-container-top">
						<span className="material-icons btn-menu" onClick={handleToggleNav} >menu</span>
						<Link to="/">
							<h3 className="header-container-title">CLOTHESSTORE</h3>
						</Link>
						<Link to="/cart">
							<span className="material-icons shopping">shopping_cart</span>
						</Link>
					</div>
					<div className="header-container-content">
						<Search
							className="c-search header-search"
							placeholder="Busca aquí tu producto"
						/>
						<Link to="/cart">
							<span className="material-icons is-none">shopping_cart</span>
						</Link>
						<span className="material-icons is-none">person</span>
						<Button className="is-none c-btn-primary" label="Iniciar sesión" type="primary" />
					</div>
				</div>
			</Wrapper>
		</header>
	)
}

export default Header;