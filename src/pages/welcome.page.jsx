import { Header } from '../components/ui/header.ui';

const WelcomePage = () => {
	return (
		/* - The welcome page that contains the header and the welcome message - */
		<section className="relative w-full h-full flex flex-col overflow-hidden">
			{/* - The background image that covers the whole page - */}
			<img
				src="/src/assets/images/background.avif"
				className="absolute top-0 left-0 w-full h-full object-bottom object-cover"
			/>
			{/* - The overlay that covers the whole page - */}
			<div className="absolute top-0 left-0 w-full h-full bg-[#000000AA] flex flex-col justify-center pb-5">
				{/* - The header that contains the logo and the navigation bar - */}
				<Header />
				{/* - The welcome message that contains the welcome text - */}
				<div className="relative h-fit w-fit flex flex-col m-auto p-10 items-center gap-y-7 animation-fade-in-up lg:gap-y-10">
					<h5 className="w-fit h-fit flex !text-[var(--welcome-faded)] font-semibold lg:text-3xl">
						Welcome to{' '}
						<span className="ml-1.5 !text-white flex flex-col text-2xl font-sinister tracking-wider -translate-y-1 lg:-translate-y-1.5 lg:text-5xl lg:ml-3">
							Vityatrimz
							<br />
							<p className="text-xs mx-auto font-semibold !text-[var(--welcome-faded)]">
								Barbershop
							</p>
						</span>
						!
					</h5>
					<h3 className="!text-white text-3xl font-bold text-center lg:text-5xl">
						Come take a seat and relax.
						<br /> You’re in good hands.
					</h3>
				</div>
				{/* - The button that navigates to the booking page - */}
				<button className="border-3 border-white h-fit w-fit mx-auto !text-white px-5 py-2 rounded-full mt-auto mb-5 font-semibold lg:text-xl">
					Let's book now
				</button>
			</div>
		</section>
	);
};

export { WelcomePage };
