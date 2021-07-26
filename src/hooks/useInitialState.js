import {useState} from 'react'
import initialState from '../initialState';

function useInitialState() {
	const [getState, setState] = useState(initialState);

	const addToCar = payload => {
		setState((state) => ({
			...state,
			cart: [state.cart, payload]
		}))
	}

	return {
		getState,
		addToCar
	}
}

export default useInitialState;