import { useState } from 'react';
import './Search.scss'

function Search({ placeholder = 'Write', ...all }) {
	const [dataSearch, setDataSearch] = useState('')

	const handleChange = (e) => {
		setDataSearch(e.target.value)
	}

	return (
		<label className="c-search" {...all}>
			<input
				type="text"
				placeholder={placeholder}
				className="c-search-input"
				onChange={handleChange}
				value={dataSearch}
			/>
			<div className="c-search-icon">
				<span className="material-icons">search</span>
			</div>
		</label>
	)
}

export default Search;