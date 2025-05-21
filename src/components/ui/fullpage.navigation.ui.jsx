const FullpageNavigation = (props) => {
	const swiper = props.swiper || { activeIndex: 0 };
	const pages = props.sections || [];
	const activeIndex = props.activeIndex || 0;
	const setActiveIndex = props.setActiveIndex || (() => {});

	return (
		<nav className="absolute w-fit h-fit top-1/2 right-2 -translate-y-1/2 flex flex-col items-end gap-y-7 z-10">
			{pages.map((page, index) => {
				return (
					<div key={index} className="w-fit h-fit flex gap-x-2">
						<p
							className={`text-sm font-semibold my-auto ${
								page.index == activeIndex
									? 'navigation-float-in'
									: ' opacity-0 translate-x-[300%]'
							}`}
						>
							{page.name}
						</p>
						<button
							className={`w-3 h-3 my-auto rounded-full duration-300 focus:scale-125 border-2 border-black ${
								page.index == activeIndex ? 'bg-black' : ''
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
