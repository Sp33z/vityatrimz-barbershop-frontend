const WelcomePage = () => {
	return (
		<section className="relative w-full h-full flex flex-col overflow-hidden">
			<img
				src="/src/assets/images/background.avif"
				className="absolute top-0 left-0 w-full h-full object-bottom object-cover"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-[#00000090]"></div>
		</section>
	);
};

export { WelcomePage };
