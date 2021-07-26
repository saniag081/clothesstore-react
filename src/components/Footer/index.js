import './Footer.scss'
import Wrapper from '../Wrapper';

function Footer() {
	return (
		<footer className="footer">
			<Wrapper>
				<div className="footer-content">
					<div className="footer-box">
						<h3>POLÍTICAS</h3>
						<ul className="footer-box-list">
							<li>Políticas de privacidad</li>
							<li>Políticas de cambio</li>
							<li>Políticas de envío</li>
							<li>Termino y condifiones</li>
							<li>Responsabilidad social</li>
						</ul>
					</div>
					<div className="footer-box">
						<h3>SOBRE NOSOTROS</h3>
						<ul className="footer-box-list">
							<li>Encuentra tu tienda</li>
							<li>contactanos</li>
							<li>Trabaja con nosotros</li>
						</ul>
					</div>
					<div className="footer-box">
						<h3>SÍGUENOS EN:</h3>
						<ul className="footer-box-list is-flex">
							<li><span className="material-icons">facebook</span></li>
							<li><span className="material-icons">facebook</span></li>
							<li><span className="material-icons">facebook</span></li>
							<li><span className="material-icons">facebook</span></li>
						</ul>
					</div>
					<div className="footer-copyright">
						<p>© Copyright Colombia. Todos los derechos reservados</p>
					</div>
				</div>
			</Wrapper>
		</footer>
	)
}

export default Footer;