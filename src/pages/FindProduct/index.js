import { useEffect } from 'react'

function FindProduct({match}) {
	const API = `https://api.mercadolibre.com/sites/MCO/search?q=`
	const product = match.params

	useEffect(() => {
		fetch(`${API}${product}`)
			.then(response => response.json())
			.then(data => console.log(data))
	}, [API, product])

	return (
		<div>
			find
		</div>
	)
}

export default FindProduct;