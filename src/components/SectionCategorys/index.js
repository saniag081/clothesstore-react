import Wrapper from '../Wrapper';
import Category from '../Category'
import './SectionCategorys.scss'

function SectionCategors() {
	return (
		<article className="categoryes">
			<Wrapper>
				<div className="categoryes-content">
					<Category label="MODA INFANTIL" pathImage="./categorias-destacadas-moda-infantil.png" />
					<Category label="PROTECCIÓN" pathImage="./categorias-destacadas-proteccion.png" />
				</div>
			</Wrapper>
		</article>
	)
}

export default SectionCategors;