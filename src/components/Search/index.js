import './Search.scss'

function Search({ placeholder = 'Write', ...all }) {
	return (
		<label className="c-search" {...all}>
			<input
				type="text"
				placeholder={placeholder}
				className="c-search-input"
			/>
			<div className="c-search-icon">
				<span className="material-icons">search</span>
			</div>
		</label>
	)
}

export default Search;