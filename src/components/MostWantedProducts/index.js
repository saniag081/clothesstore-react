import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Wrapper from '../Wrapper/index';
import useFetchDataApi from '../../hooks/useFetchDataApi';
import Card from '../Card';
import './MostWantedProducts.scss';

function MostWantedProducts() {
	const API = 'sites/MCO/search?q=jeans'
	const {isLoading, response} = useFetchDataApi(API)
	const { addToCar } = useContext(AppContext);

	const handleAddtoCar = (product) => {
		addToCar(product)
	}

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
				{isLoading && 'Cargando...'}
				<Splide options={optionsOfSplide} >
					{response.map((product) => (
						<SplideSlide key={product.id}>
							<Card
								product={product}
								handleClickBotton={handleAddtoCar}
							/>
						</SplideSlide>
					))}
				</Splide>
			</Wrapper>
		</article>
	)
}

export default MostWantedProducts;