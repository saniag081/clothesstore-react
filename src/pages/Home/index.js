import Header from '../../components/Header'
import Nav from '../../components/Nav'
import SeectionCategorys from '../../components/SectionCategorys'
import SectionSales from '../../components/SectionSales'
import MostWantedProducts from '../../components/MostWantedProducts'
import Footer from '../../components/Footer'

function Home() {
	return (
		<>
			<Header />
			<Nav />
			<SectionSales />
			<SeectionCategorys />
			<MostWantedProducts />
			<Footer />
		</>
	)
}

export default Home;