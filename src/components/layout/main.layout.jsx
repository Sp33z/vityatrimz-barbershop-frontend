/* - Import React functions - */
import { useContext, useState } from 'react';

/* - Import Swiper dependencies - */
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';
import { MainSwiperContext } from '../../contexts/main.swiper.context';

/* - Import icons - */
import { IoIosMenu } from 'react-icons/io';

/* - Import pages/slides - */
import { WelcomePage } from '../../pages/welcome.page';
import { AboutUsPage } from '../../pages/about.us.page';

/* - Import UI elements for navigation -  */
import { FullpageNavigation } from '../ui/fullpage.navigation.ui';
import { NavigationBar } from '../ui/navigation.bar.ui';

const MainLayout = () => {
	/* - The main layout of the application that contains all the slides and the navigation bar - */
	const { setSwiper, setActiveIndex } = useContext(MainSwiperContext);
	const [isNavbarOpen, setIsNavbarOpen] = useState(false); // A boolean to control the visibility of the navigation bar

	return (
		<main className="relative w-full h-full">
			{/* - The main swiper component that contains all the slides - */}
			<Swiper
				direction="vertical" // The direction of the swiper
				slidesPerView={'auto'} // The number of slides to show at once, auto to fit the footer
				mousewheel={{ enabled: true, sensitivity: 0.5 }} // Enable mouse wheel control
				modules={[Scrollbar, Mousewheel]} // The modules to be used in the swiper
				className="relative !w-full !h-full z-1" // The class name to be used in the swiper
				speed={500} // The speed of the swiper
				rewind={true} // Rewind the swiper to the first slide when reaching the last slide
				onSlideChange={(swiper) => {
					setActiveIndex(swiper.activeIndex);
				}} // The function to be called when the slide changes
				onSwiper={(swiper) => {
					setSwiper(swiper);
				}} // The function to be called when the swiper is initialized
			>
				{/* - The first slide that contains the header and the welcome page - */}
				<SwiperSlide className="relative w-full !h-full flex flex-col">
					<div className="relative w-full h-full flex flex-col">
						<WelcomePage />
					</div>
				</SwiperSlide>
				{/* - The second slide that contains the about us page - */}
				<SwiperSlide className="w-full !h-full flex flex-col">
					<div className="relative w-full h-full flex flex-col">
						<AboutUsPage />
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-full !h-full flex flex-col">
					<div className="relative w-full h-full flex flex-col">
						<AboutUsPage />
					</div>
				</SwiperSlide>
				{/* - The third slide that contains the footer - */}
				<SwiperSlide className="w-full !h-fit">Footer</SwiperSlide>
			</Swiper>
			{/* - The button to open the navigation bar for smaller resolution devices - */}
			<button
				className="absolute top-7 right-4 z-10 lg:hidden"
				onClick={() => setIsNavbarOpen(true)}
			>
				<IoIosMenu className="w-9 h-9 fill-[var(--sidebar)]" />
			</button>
			{/* - The swiper navigation dots on the right of the screen - */}
			<FullpageNavigation />
			{/* - The navigation bar for the smaller resolution devices only - */}
			<NavigationBar
				isNavbarOpen={isNavbarOpen} // A boolean to control the visibility of the navigation bar
				setIsNavbarOpen={setIsNavbarOpen} // A function to set the visibility of the navigation bar
			/>
		</main>
	);
};

export { MainLayout };
