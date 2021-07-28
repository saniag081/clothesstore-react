import { useRef, useEffect, useState } from 'react';
import Button from '../Button';
import './Card.scss';

function Card({
	product = {},
	handleClickBotton,
	labelButton = "Agregar al carrito",
	typeButton = "secundary"
}) {
	const [truncateTitle, setTruncateTitle] = useState('')
	const titleElement = useRef(null)

	useEffect(() => {
		let title = product.title;
		title = title.substring(0, 33) + '...';
		setTruncateTitle(title);
	},[setTruncateTitle, product.title])

	return (
		<div className="card">
			<figure className="card-img">
				<img src={ product.thumbnail} alt="imagen" />
			</figure>
			<div className="card-info">
				<p className="card-info-title" ref={titleElement} >{ truncateTitle }</p>
				<div className="card-info-price">
					<span >{ product.price }</span>
					<span>{ product.discountPrice }</span>
				</div>
				<Button
					label={labelButton}
					type={typeButton}
					onClick={() => handleClickBotton(product)}
				/>
			</div>
		</div>
	)
}

export default Card;