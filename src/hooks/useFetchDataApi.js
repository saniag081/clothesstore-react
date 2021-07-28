import { useEffect, useState } from 'react'

function useFetchDataApi(sectionApi, product) {
	const [response, setResponse] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const API = `https://api.mercadolibre.com/${sectionApi}`;
	const validateProduct = product ? product : ''

	useEffect(() => {
		setIsLoading(true)
		fetch(`${API}${validateProduct}`)
		.then(response => response.json())
		.then(data => {
			setResponse(data.results || data);
				setIsLoading(false)
			})
			.catch(err => console.error(err))
		}, [API, setResponse, setIsLoading, validateProduct])

	return {
		isLoading,
		response
	}
}

export default useFetchDataApi;