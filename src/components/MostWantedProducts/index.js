import Wrapper from '../Wrapper/index';
import Card from '../Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './MostWantedProducts.scss';

function MostWantedProducts() {
	return (
		<article className="wanted-products">
			<Wrapper>
				<h2 className="wanted-products-title">PRODUCTOS MÁS BUSCADOS</h2>
				<Splide>
					<SplideSlide>
						<div  className="wanted-products-content">
							<Card
								pathImage="./card.png"
								text="Blusa Color sólido manga larga talla M"
								price="$200.000"
								discountPrice="$100.452"
							/>
							<Card
								pathImage="./card.png"
								text="Blusa Color sólido manga larga talla M"
								price="$200.000"
								discountPrice="$100.452"
							/>
							<Card
								pathImage="./card.png"
								text="Blusa Color sólido manga larga talla M"
								price="$200.000"
								discountPrice="$100.452"
							/>
							<Card
								pathImage="./card.png"
								text="Blusa Color sólido manga larga talla M"
								price="$200.000"
								discountPrice="$100.452"
							/>
						</div>
					</SplideSlide>
				</Splide>
			</Wrapper>
		</article>
	)
}

export default MostWantedProducts;