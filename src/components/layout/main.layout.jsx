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

const pages = [
	{
		name: 'Welcome',
		index: 0,
		icon: <IoIosMenu className="h-7 w-auto my-auto" />,
	},
	{
		name: 'About Us',
		index: 1,
		icon: <IoIosMenu className="h-7 w-auto my-auto" />,
	},
];

const MainLayout = () => {
	const [swiper, setSwiper] = useState();
	const [activeIndex, setActiveIndex] = useState(0);
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	return (
		<main className="relative w-full h-full">
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
			<button
				className="absolute top-7 right-4 z-10"
				onClick={() => setIsNavbarOpen(true)}
			>
				<IoIosMenu className="w-9 h-9 fill-[var(--text)]" />
			</button>
			<FullpageNavigation
				swiper={swiper}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				sections={pages}
			/>
			<NavigationBar
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				sections={pages}
				isNavbarOpen={isNavbarOpen}
				setIsNavbarOpen={setIsNavbarOpen}
			/>
		</main>
	);
};

/*
<main className="relative flex w-full h-screen landscape:">
			<FullpageContainer
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				transitionDuration={550}
			>
				<FullpageSection>
					<div className="content w-full h-full flex flex-col items-center justify-center">
						<Header />
						<WelcomePage setIsNavbarOpen={setIsNavbarOpen} />
					</div>
				</FullpageSection>
				<FullpageSection>
					<div className="content w-full h-full flex items-center justify-center">
						<AboutUsPage />
					</div>
				</FullpageSection>
				<FullpageSection>
					<ServicesPage />
				</FullpageSection>
				<FullpageSection>
					<div className="content flex items-center justify-center">
						<p className="welcome-text">Welcome to Section 4</p>
					</div>
				</FullpageSection>
			</FullpageContainer>
			<button
				className="absolute top-8 right-4 w-8 h-8 my-auto ml-auto flex lg:hidden"
				onClick={() => setIsNavbarOpen(true)}
			>
				<FiMenu className="w-full h-full fill-[var(--text)]" />
			</button>
			<FullpageNavigation
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				sections={pages}
				isNavbarOpen={isNavbarOpen}
				setIsNavbarOpen={setIsNavbarOpen}
			/>
			<NavigationBar
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				sections={pages}
				isNavbarOpen={isNavbarOpen}
				setIsNavbarOpen={setIsNavbarOpen}
			/>
		</main>
*/

export { MainLayout };
