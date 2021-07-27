import { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Search.scss';

function Search({ placeholder = 'Write', ...all }) {
	const [dataSearch, setDataSearch] = useState('');
	let history = useHistory();

	const handleChange = (e) => {
		setDataSearch(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(history)
		debugger
		history.push(`/search/${dataSearch}`)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label className="c-search" {...all}>
				<input
					type="text"
					placeholder={placeholder}
					className="c-search-input"
					onChange={handleChange}
					value={dataSearch}
				/>
				<button className="c-search-icon">
					<span className="material-icons">search</span>
				</button>
			</label>
		</form>
	)
}

export default Search;