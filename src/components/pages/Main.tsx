import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imgUrls } from '../../constants';
import '../../styles/pages/main.scss';
import CustomButton from '../CustomButton';
import Layout from '../Layout';
import { Loading } from '../Loading';

const Main = () => {
	const { isLoading, loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		<Layout>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				navigation
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				loop
				pagination={{ clickable: false }}>
				{imgUrls.map((img) => (
					<SwiperSlide
						key={img}
						style={{
							background: `url(${img})`,
						}}
					/>
				))}
			</Swiper>
			<div className='actions'>
				<Link to='/products'>Go to products</Link>
				{isLoading ? (
					<Loading spinnerColor='black'/>
				) : isAuthenticated ? (
					<Link to='/profile'>Go To Profile</Link>
				) : (
					<div>
						<p>Not authorized yet?</p>
						<CustomButton onClick={() => loginWithRedirect()}>
							Login / Register
						</CustomButton>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default Main;
