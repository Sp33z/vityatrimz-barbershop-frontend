import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';

import { IoIosMenu } from 'react-icons/io';

// Import Swiper styles
import 'swiper/css';
import { Header } from '../ui/header.ui';
import { WelcomePage } from '../../pages/welcome.page';
import { AboutUsPage } from '../../pages/about.us.page';
import { FullpageNavigation } from '../ui/fullpage.navigation.ui';
import { NavigationBar } from '../ui/navigation.bar.ui';

import { HiHome } from 'react-icons/hi';
import { FaAddressCard } from 'react-icons/fa';

const pages = [
	{
		name: 'Welcome',
		index: 0,
		icon: <HiHome className="h-7 w-auto my-auto" />,
	},
	{
		name: 'About Us',
		index: 1,
		icon: <FaAddressCard className="h-7 w-auto my-auto" />,
	},
];

const MainLayout = () => {
	/* - The main layout of the application that contains all the slides and the navigation bar - */
	const [swiper, setSwiper] = useState(); // The swiper instance to be able to control the slides
	const [activeIndex, setActiveIndex] = useState(0); // The active index to be able to track the current showing slide
	const [isNavbarOpen, setIsNavbarOpen] = useState(false); // A boolean to control the visibility of the navigation bar

	return (
		<main className="relative w-full h-full">
			{/* - The main swiper component that contains all the slides - */}
			<Swiper
				direction="vertical"
				slidesPerView={'auto'}
				mousewheel={{ enabled: true, sensitivity: 0.5 }}
				modules={[Scrollbar, Mousewheel]}
				className="relative !w-full !h-full z-1"
				rewind={true}
				onSlideChange={(swiper) => {
					setActiveIndex(swiper.activeIndex);
				}}
				onSwiper={(swiper) => {
					setSwiper(swiper);
				}}
			>
				<SwiperSlide className="relative w-full !h-full flex flex-col">
					<div className="relative w-full h-full flex flex-col">
						<Header />
						<WelcomePage />
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-full !h-full flex flex-col">
					<div className="relative w-full h-full flex flex-col">
						<AboutUsPage />
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-full !h-full flex flex-col">
					Slide 3
				</SwiperSlide>
				<SwiperSlide className="w-full !h-full flex flex-col">
					Slide 4
				</SwiperSlide>
				<SwiperSlide className="w-full !h-full flex flex-col">
					Slide 5
				</SwiperSlide>
				<SwiperSlide className="w-full !h-full flex flex-col">
					Slide 6
				</SwiperSlide>
				<SwiperSlide className="w-full !h-full flex flex-col">
					Slide 7
				</SwiperSlide>
				<SwiperSlide className="w-full !h-fit">Footer</SwiperSlide>
			</Swiper>
			{/* - The button to open the navigation bar for smaller resolution devices - */}
			<button
				className="absolute top-8 right-4 z-10"
				onClick={() => setIsNavbarOpen(true)}
			>
				<IoIosMenu className="w-9 h-9 fill-[var(--text)]" />
			</button>
			{/* - The swiper navigation dots on the right of the screen - */}
			<FullpageNavigation
				swiper={swiper} // The swiper instance to be able to control the slides
				sections={pages} // The sections to be displayed in the navigation bar
				activeIndex={activeIndex} // The active index to be able to track the current showing slide
				setActiveIndex={setActiveIndex} // A inherited function to set the active index
			/>
			{/* - The navigation bar for the smaller resolution devices only - */}
			<NavigationBar
				swiper={swiper} // The swiper instance to be able to control the slides
				sections={pages} // The sections to be displayed in the navigation bar
				activeIndex={activeIndex} // The active index to be able to track the current showing slide
				setActiveIndex={setActiveIndex} // A inherited function to set the active index
				isNavbarOpen={isNavbarOpen} // A boolean to control the visibility of the navigation bar
				setIsNavbarOpen={setIsNavbarOpen} // A function to set the visibility of the navigation bar
			/>
		</main>
	);
};

export { MainLayout };
