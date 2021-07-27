import {useState} from 'react'
import initialState from '../initialState';

function useInitialState() {
	const [state, setState] = useState(initialState);

	const addToCar = payload => {
		setState((beforeState) => ({
			...beforeState,
			cart: [beforeState.cart, payload]
		}))
	}

	const setIsShowNav = (payload) => {
		setState((beforeState) => ({
			...beforeState,
			isShowNav: payload
		}))
	}

	return {
		addToCar,
		setIsShowNav,
		state
	}
}

export default useInitialState;