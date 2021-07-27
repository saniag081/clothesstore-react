import Wrapper from '../Wrapper/index';
import Card from '../Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './MostWantedProducts.scss';

function MostWantedProducts() {
	const optionsOfSplide = {
		perPage: 4,
		gap: '30px',
		perMove: 1,
		breakpoints: {
			640: {
				perPage: 1,
			},
			952: {
				perPage: 2
			}
		}
	}
	return (
		<article className="wanted-products">
			<Wrapper>
				<h2 className="wanted-products-title">PRODUCTOS MÁS BUSCADOS</h2>
				<Splide options={optionsOfSplide} >
					<SplideSlide>
						<Card
							pathImage="./card.png"
							text="Blusa Color sólido manga larga talla M 1"
							price="$200.000"
							discountPrice="$100.452"
						/>
					</SplideSlide>
					<SplideSlide>
						<Card
							pathImage="./card.png"
							text="Blusa Color sólido manga larga talla M 2"
							price="$200.000"
							discountPrice="$100.452"
						/>
					</SplideSlide>
					<SplideSlide>
						<Card
							pathImage="./card.png"
							text="Blusa Color sólido manga larga talla M 3"
							price="$200.000"
							discountPrice="$100.452"
						/>
					</SplideSlide>
					<SplideSlide>
						<Card
							pathImage="./card.png"
							text="Blusa Color sólido manga larga talla M 4"
							price="$200.000"
							discountPrice="$100.452"
						/>
					</SplideSlide>
					<SplideSlide>
						<Card
							pathImage="./card.png"
							text="Blusa Color sólido manga larga talla M 5"
							price="$200.000"
							discountPrice="$100.452"
						/>
					</SplideSlide>
					<SplideSlide>
						<Card
							pathImage="./card.png"
							text="Blusa Color sólido manga larga talla M 6"
							price="$200.000"
							discountPrice="$100.452"
						/>
					</SplideSlide>
				</Splide>
			</Wrapper>
		</article>
	)
}

export default MostWantedProducts;