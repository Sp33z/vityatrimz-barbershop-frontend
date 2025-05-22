/* - Import React functions - */
import { useContext } from 'react';

/* - React router import - */
import { Link } from 'react-router-dom';

/* - Importing the swiper context - */
import { MainSwiperContext } from '../../contexts/main.swiper.context';

/* - Importing the logo - */
import { VityatrimzLogo } from '../../assets/images/vityatrimz.logo';

/* - Importing the navigation points - */
import { pages } from '../../data/pages.data';

const Header = () => {
	const { swiper, setActiveIndex } = useContext(MainSwiperContext); // Destructuring props to get swiper, sections, and setActiveIndex

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
						<Link className="w-fit h-fit font-semibold text-xl !text-white rounded-full">
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
