import Button from '../Button';
import './Card.scss';

function Card({
	pathImage,
	text,
	price,
	discountPrice,
	labelButton = "Agregar al carrito",
	typeButton = "secundary"
}) {
	return (
		<div className="card">
			<figure className="card-img">
				<img src={ pathImage} alt="imagen" />
			</figure>
			<div className="card-info">
				<p className="card-info-title">{ text }</p>
				<div className="card-info-price">
					<span>{ price }</span>
					<span>{ discountPrice }</span>
				</div>
				<Button label={labelButton} type={typeButton} />
			</div>
		</div>
	)
}

export default Card;