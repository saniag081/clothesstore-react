import { useContext } from 'react'
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
						<h3 className="header-container-title">CLOTHESSTORE</h3>
						<span className="material-icons shopping">shopping_cart</span>
					</div>
					<div className="header-container-content">
						<Search
							className="c-search header-search"
							placeholder="Busca aquí tu producto"
						/>
						<span className="material-icons is-none">shopping_cart</span>
						<span className="material-icons is-none">person</span>
						<Button className="is-none c-btn-primary" label="Iniciar sesión" type="primary" />
					</div>
				</div>
			</Wrapper>
		</header>
	)
}

export default Header;