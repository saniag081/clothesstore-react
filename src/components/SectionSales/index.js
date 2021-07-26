import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './SectionSales.scss'

function SectionSales() {
	return (
		<article className="section-sales">
				<Splide>
					<SplideSlide>
						<img className="section-sales-img" alt="imagen" src="./banner-principal-desktop.png" />
					</SplideSlide>
					<SplideSlide>
						<img className="section-sales-img" alt="imagen" src="./banner-principal-desktop.png" />
					</SplideSlide>
					<SplideSlide>
						<img className="section-sales-img" alt="imagen" src="./banner-principal-desktop.png" />
					</SplideSlide>
				</Splide>
		</article>
	)
}

export default SectionSales;