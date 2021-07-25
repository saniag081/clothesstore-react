import './Button.scss'

function Button({ label, type = 'primary', ...all }) {
	return (
		<button
			className={`c-btn-${type}`}
			{...all}
		>
			{label}
		</button>
	)
}

export default Button;