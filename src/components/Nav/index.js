import Wrapper from '../Wrapper'
import './Nav.scss'

function Nav() {
	return (
		<nav className="nav">
			<Wrapper>
				<div className="nav-close">
					<span className="material-icons nav-close-icon">close</span>
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