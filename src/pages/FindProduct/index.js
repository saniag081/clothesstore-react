import { useContext } from 'react';
import useFetchDataApi from '../../hooks/useFetchDataApi';
import AppContext from '../../context/AppContext';
import ListProducts from '../../components/ListProducts';
import './FindProduct.scss'

function FindProduct({match}) {
	const API = `sites/MCO/search?q=`;
	const product = match.params.id;
	const { addToCar } = useContext(AppContext);

	const {isLoading, response } = useFetchDataApi(API, product)

	const handleAddToCar = (product) => {
		addToCar(product)
	}

	return (
		<div className="find-produc">
			{isLoading
				? 'Cargando ..'
				: <ListProducts listCard={response} handleClickBotton={handleAddToCar}/>
			}
		</div>
	)
}

export default FindProduct;