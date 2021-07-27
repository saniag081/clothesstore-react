import SeectionCategorys from '../../components/SectionCategorys';
import SectionSales from '../../components/SectionSales';
import MostWantedProducts from '../../components/MostWantedProducts';
// import { useHistory } from 'react-router-dom'

function Home() {
	// const history = useHistory();
	return (
		<>
			<SectionSales />
			<SeectionCategorys />
			<MostWantedProducts />
		</>
	)
}

export default Home;