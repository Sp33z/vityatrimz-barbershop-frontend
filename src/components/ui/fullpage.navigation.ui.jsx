/* - Import React functions - */
import { useContext } from 'react';

/* - Importing the navigation points - */
import { pages } from '../../data/pages.data';

/* - Importing Swiper to be able to scroll the swiper element - */
import { MainSwiperContext } from '../../contexts/main.swiper.context';

const FullpageNavigation = () => {
	const { swiper, activeIndex, setActiveIndex } = useContext(MainSwiperContext); // Destructuring props to get swiper nd setActiveIndex

	return (
		<nav className="absolute w-fit h-fit top-1/2 right-2 -translate-y-1/2 flex flex-col items-end gap-y-7 z-10">
			{/* - Looping through on all the elements contained by the pages array  - */}
			{pages.map((page, index) => {
				return (
					/* - Returning the whole container with the button and name of the slide - */
					<div key={index} className="w-fit h-fit flex gap-x-2">
						<p
							className={`text-sm font-semibold my-auto !text-[var(--sidebar)] ${
								page.index == activeIndex
									? 'navigation-float-in'
									: ' opacity-0 translate-x-[300%]'
							}`}
						>
							{page.name}
						</p>
						<button
							className={`w-3 h-3 my-auto rounded-full duration-300 focus:scale-125 border-2 border-[var(--sidebar)] ${
								page.index == activeIndex ? 'bg-[var(--sidebar)] scale-125' : ''
							}`}
							onClick={() => {
								swiper.slideTo(page.index);
								setActiveIndex(page.index);
							}}
						></button>
					</div>
				);
			})}
		</nav>
	);
};

export { FullpageNavigation };
