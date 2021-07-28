import Card from '../Card';
import Wrapper from '../Wrapper';
import './ListProducts.scss';

function ListProducts({ listCard = [], handleClickBotton = null, labelButton }) {

	return (
		<div className="list-products">
			<Wrapper>
				<div className="list-products-content">
					{listCard.map((item) => (
						<Card
							key={item.id}
							product={item}
							handleClickBotton={handleClickBotton}
							labelButton={labelButton}
						/>
					))}
				</div>
			</Wrapper>
		</div>
	)
}

export default ListProducts;