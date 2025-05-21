import { IoMdSearch } from 'react-icons/io';
import { IoLogIn } from 'react-icons/io5';

import { VityatrimzLogo } from '../../assets/images/vityatrimz.logo';

const NavigationBar = (props) => {
	const activeIndex = props.activeIndex || 0;
	const setActiveIndex = props.setActiveIndex || (() => {});
	const sections = props.sections || [];
	const isNavbarOpen = props.isNavbarOpen || false;
	const setIsNavbarOpen = props.setIsNavbarOpen || (() => {});

	return (
		<main
			className={`absolute top-0 left-0 w-full h-full flex flex-col duration-700 z-20 ${
				isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<div
				className={`absolute top-0 left-0 h-full w-full duration-500 bg-[#00000090] ${
					isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
				onClick={() => {
					setIsNavbarOpen(false);
				}}
			></div>
			<div
				className={`absolute flex flex-col top-0 left-0 h-full w-9/12 bg-white shadow-lg duration-300 shadow-white p-3 ${
					isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<VityatrimzLogo className="w-auto h-14" />
				<nav className="relative w-full h-full mt-10 flex flex-col">
					<ul className="w-full h-full flex flex-col gap-y-3">
						{sections.map((page, index) => {
							const icon = page.icon || (
								<IoMdSearch className="h-7 w-auto my-auto" />
							);
							return (
								<button
									key={index}
									onClick={() => {
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
