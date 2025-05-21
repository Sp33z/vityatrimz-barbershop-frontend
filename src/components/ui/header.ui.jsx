/**
 * Header component for the Vityatrimz application.
 * Displays the logo and navigation bar with section buttons.
 *
 * @param {Object} props - Component properties
 * @param {Object} props.swiper - Swiper instance to control slides
 * @param {Array} props.sections - Array of section objects containing name and index
 * @param {Function} props.setActiveIndex - Function to update the active section index
 * @returns {JSX.Element} Header component with navigation
 */

import { Link } from 'react-router-dom';

import { VityatrimzLogo } from '../../assets/images/vityatrimz.logo';

const Header = (props) => {
	const swiper = props.swiper; // The swiper instance to be able to control the slides
	const pages = props.sections || []; // Define all the buttons with indexes and names
	const setActiveIndex = props.setActiveIndex || (() => {}); // The function to set the active index

	const firstPart = pages.slice(0, pages.length / 2); // The first part of the pages (before the image)
	const lastPart = pages.slice(pages.length / 2, pages.length); // The last part of the pages (after the image)

	/* - The header of the application that contains the logo - */
	return (
		<header className="realtive w-full h-fit flex p-5 items-center">
			{/* - The logo on the top of the navigation bar - */}
			<Link className="relative w-fit h-fit">
				<VityatrimzLogo className="w-auto h-15 lg:h-18" fill="white" />
			</Link>
			{/* - The navigation bar that contains all the buttons - */}
			<nav className="relative w-fit h-fit lg:flex mx-auto hidden gap-x-8 items-center">
				{/* - The buttons that navigate to the different sections - */}
				{/* - The first part of the pages (before the image) - */}
				{firstPart.map((page, index) => {
					const name = page.name || 'Unknown'; // The name of the page
					const pageIndex = page.index || 0; // The index of the page

					return (
						<ul key={index}>
							<li>
								{/* - The button that navigates to the different sections - */}
								<button
									className="w-fit h-fit font-semibold text-xl !text-white"
									onClick={() => {
										setActiveIndex(pageIndex);
										swiper.slideTo(pageIndex);
									}}
								>
									{name}
								</button>
							</li>
						</ul>
					);
				})}
				<ul className="w-fit h-fit">
					<li>
						<img src="/src/assets/images/logo.svg" className="w-16" />
					</li>
				</ul>
				{/* - The last part of the pages (after the image) - */}
				{lastPart.map((page, index) => {
					const name = page.name || 'Unknown'; // The name of the page
					const pageIndex = page.index || 0; // The index of the page

					return (
						<ul key={index}>
							<li>
								{/* - The button that navigates to the different sections - */}
								<button
									className="w-fit h-fit font-semibold text-xl !text-white"
									onClick={() => {
										setActiveIndex(pageIndex);
										swiper.slideTo(pageIndex);
									}}
								>
									{name}
								</button>
							</li>
						</ul>
					);
				})}
			</nav>
			{/* - The navigation bar for the login and register section - */}
			<nav className="relative w-fit h-fit lg:flex hidden gap-x-8 items-center">
				{/* - The buttons that navigate to the different sections - */}
				<ul>
					<li>
						<Link className="w-fit h-fit font-semibold text-xl border-3 border-black py-3 px-5 rounded-full">
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
