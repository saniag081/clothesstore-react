import {useState} from 'react'
import initialState from '../initialState';

function useInitialState() {
	const [state, setState] = useState(initialState);

	const setSearchResults = (payload) => {
		setState((state) => ({
			...state,
			searchResults: payload
		}))
	}

	const addToCar = payload => {
		setState((beforeState) => ({
			...beforeState,
			car: [...beforeState.car, payload]
		}))
	}

	const removeToCar = payload => {
		const removeElement = state.car.filter((item)=> item.id !== payload)
		setState((beforeState) => ({
			...beforeState,
			car: removeElement
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
		setSearchResults,
		removeToCar,
		state
	}
}

export default useInitialState;