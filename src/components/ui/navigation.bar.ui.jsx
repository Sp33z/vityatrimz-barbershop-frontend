/**
 * @component NavigationBar
 * @description A sliding navigation bar component that displays a list of sections and provides navigation functionality.
 *
 * @param {Object} props - The component props
 * @param {boolean} [props.isNavbarOpen=false] - Whether the navigation bar is currently open
 * @param {Function} [props.setIsNavbarOpen=() => {}] - Function to toggle the navigation bar visibility
 *
 * @returns {JSX.Element} A sliding navigation bar with sections and a login button
 *
 * <NavigationBar
 *   isNavbarOpen={menuOpen}
 *   setIsNavbarOpen={setMenuOpen}
 * />
 */

import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { MainSwiperContext } from '../../contexts/main.swiper.context';

import { pages } from '../../data/pages.data';

import { IoMdSearch } from 'react-icons/io';
import { IoLogIn } from 'react-icons/io5';
import { VityatrimzLogo } from '../../assets/images/vityatrimz.logo';

const NavigationBar = (props) => {
	const { swiper, activeIndex, setActiveIndex } = useContext(MainSwiperContext); // Destructuring props to get swiper, activeIndex, setActiveIndex, and sections
	const isNavbarOpen = props.isNavbarOpen || false; // Boolean to control the visibility of the navigation bar
	const setIsNavbarOpen = props.setIsNavbarOpen || (() => {}); // Function to set the visibility of the navigation bar

	return (
		/* - The outer absolute container - */
		<main
			className={`absolute top-0 left-0 w-full h-full flex flex-col duration-700 z-20 ${
				isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			{/* - The button to close the navigation bar (the darker background on the right of the menu) - */}
			<button
				className={`absolute top-0 left-0 h-full w-full duration-500 bg-[#00000090] ${
					isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
				onClick={() => {
					setIsNavbarOpen(false);
				}}
			></button>
			{/* - The navigation bar itself what contains all of the slide navigation buttons - */}
			<div
				className={`absolute flex flex-col top-0 left-0 h-full w-9/12 bg-white shadow-lg duration-300 shadow-white p-3 ${
					isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				{/* - The logo on the top of the navigation bar - */}
				<Link className="mx-auto w-fit h-fit" to={'/'}>
					<VityatrimzLogo className="w-auto h-14" />
				</Link>
				{/* - The elements of the navigation bar - */}
				<nav className="relative w-full h-full mt-10 flex flex-col">
					<ul className="w-full h-full flex flex-col gap-y-3">
						{/* - Looping through on all the elements contained by the sections array - */}
						{pages.map((page, index) => {
							const icon = page.icon || (
								<IoMdSearch className="h-7 w-auto my-auto" />
							); // Default icon if not provided

							return (
								<button
									key={index}
									onClick={() => {
										swiper.slideTo(page.index);
										setActiveIndex(page.index);
										setIsNavbarOpen(false);
									}}
									className={`w-full flex flex-row py-3 px-4 opacity-60 duration-500 ${
										activeIndex === index
											? 'opacity-100 bg-[#00000030] rounded-t-[30px] rounded-bl-[30px]'
											: ''
									}`}
								>
									{icon}
									<p className="ml-3 my-auto font-bold pt-1 text-base">
										{page.name}
									</p>
								</button>
							);
						})}
						{/* - The static buttons of the navigation bar - */}
						<button className="w-full p-3 flex flex-row mt-auto opacity-60 duration-300">
							{<IoLogIn className="h-7 w-auto my-auto" />}
							<p className="ml-3 my-auto font-bold pt-1 text-base">Log in</p>
						</button>
					</ul>
				</nav>
			</div>
		</main>
	);
};

export { NavigationBar };
