import { useRef, useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'
import Wrapper from '../Wrapper'
import './Nav.scss'

function Nav() {
	const navElement = useRef(null)
	const { state, setIsShowNav } = useContext(AppContext);
	const { isShowNav } = state

	useEffect(() => {
		isShowNav
			&& navElement.current.classList.add('is-active')
	},[isShowNav])

	const handleToggleNav = (e) => {
		navElement.current.classList.remove('is-active')
		setIsShowNav(!isShowNav)
	}

	return (
		<nav className="nav" ref={ navElement }>
			<Wrapper>
				<div className="nav-close">
					<span
						className="material-icons nav-close-icon"
						onClick={handleToggleNav}
					>
						close
				</span>
				</div>
				<ul className="nav-list">
					<li className="nav-list-item">Hombre</li>
					<li className="nav-list-item">Mujer</li>
					<li className="nav-list-item">Junior</li>
					<li className="nav-list-item">Niños</li>
					<li className="nav-list-item">Accesorios</li>
					<li className="nav-list-item">Ofertas</li>
				</ul>
			</Wrapper>
		</nav>
	)
}

export default Nav;