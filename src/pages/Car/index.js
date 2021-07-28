import { useContext } from 'react'
import ListProducts from "../../components/ListProducts";
import AppContext from "../../context/AppContext";
import './Car.scss'

function Cart() {
	const { state, removeToCar } = useContext(AppContext);

	const handleRemoveTocar = (product) => {
		const { id } = product;
		removeToCar(id)
	}

	return (
		<div className="cart">
			{state.car.length > 0
				? <ListProducts
					listCard={state.car}
					handleClickBotton={handleRemoveTocar}
					labelButton="Eliminar del carrito"
				/>
				: 'Carrito vacion, añade algo al carrito'
			}
		</div>
	)
}

export default Cart;