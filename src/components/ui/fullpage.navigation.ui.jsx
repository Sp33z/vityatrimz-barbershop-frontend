/**
 * @component FullpageNavigation
 *
 * @description
 * A navigation component designed for fullpage slide layouts. It displays a vertical navigation bar
 * positioned on the right side of the screen, showing dots for each page/section. The current active page
 * is highlighted with a filled dot and shows the page name. Clicking on a dot navigates to the corresponding page.
 *
 * @param {Object} props - Component props
 * @param {Object} [props.swiper] - Swiper instance for controlling slide navigation. Defaults to an object with activeIndex: 0
 * @param {Array<{index: number, name: string}>} [props.sections] - Array of page/section objects containing index and name. Defaults to empty array
 * @param {number} [props.activeIndex] - Current active page index. Defaults to 0
 * @param {Function} [props.setActiveIndex] - Function to update the active index. Defaults to a no-op function
 *
 * @returns {JSX.Element} A navigation component with dots representing pages and the current page name visible
 *
 * @example
 * <FullpageNavigation
 *   swiper={swiperInstance}
 *   sections={[{index: 0, name: "Home"}, {index: 1, name: "About"}]}
 *   activeIndex={currentIndex}
 *   setActiveIndex={setCurrentIndex}
 * />
 */

import { useContext } from 'react';

import { pages } from '../../data/pages.data';

import { MainSwiperContext } from '../../contexts/main.swiper.context';

const FullpageNavigation = () => {
	const { swiper, activeIndex, setActiveIndex } = useContext(MainSwiperContext);

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
