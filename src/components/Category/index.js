import './Category.scss'

function Category({ label= 'category', size = {maxWidth: '100%', minHeight: 350}, pathImage}) {
	const styles = {
		...size,
		backgroundImage: `url(${pathImage})`
	}
	return (
		<div className="category-box" style={styles}>
			<h3 className="category-box-title">{ label }</h3>
		</div>
	)
}

export default Category;