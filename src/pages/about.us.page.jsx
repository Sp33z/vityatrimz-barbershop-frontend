const AboutUsPage = () => {
	return (
		/* - The about us page that contains the information about the barbershop - */
		<main className="relative w-full h-full flex flex-col lg:flex-row py-3 px-3 gap-3 overflow-hidden">
			{/* - The first section that contains the images and the year since opening - */}
			<div className="relative w-full h-full flex gap-x-3 p-1 overflow-hidden pr-2 lg:py-10">
				<div className="relative w-full h-full overflow-hidden">
					<img
						className="relative w-full h-full object-cover object-center rounded-t-[30px] rounded-bl-[30px]"
						src="/src/assets/images/about_us.jpg"
					/>
				</div>
				<div className="relative w-full h-full flex flex-col gap-y-3 items-end overflow-hidden">
					<p className="relative w-4/5 bg-gray-700 mr-auto flex flex-col text-center text-sm rounded-t-[30px] rounded-bl-[30px] !text-white py-1">
						Since
						<br />
						<span className="text-lg font-bold !text-white">2021</span>
					</p>
					<div className="relative w-full h-full overflow-hidden rounded-t-[30px] rounded-br-[30px]">
						<img
							className="w-full h-full object-cover object-center"
							src="/src/assets/images/about_us_2.jpg"
						/>
					</div>
				</div>
			</div>
			{/* - The second section that contains the information about the barbershop - */}
			<div className="relative w-full h-fit flex flex-col gap-y-1 lg:p-10 lg:h-full">
				<h3 className="font-sinister font-bold text-2xl tracking-wider lg:text-6xl">
					About us
				</h3>
				<p className="font-semibold !text-[var(--text)] opacity-60 text-sm lg:text-xl my-auto">
					Welcome to Kolárovo’s go-to barbershop.
				</p>
				<p className="font-semibold !text-[var(--text)] opacity-60 text-sm lg:text-xl my-auto">
					Since opening our doors in 2021, we've been serving fresh fades, clean
					beard work, and next-level style — all delivered by one passionate
					barber dedicated to his craft.
				</p>
				<h3 className="font-sinister font-bold text-2xl tracking-wider lg:text-6xl my-auto">
					What Makes Us Stand Out
				</h3>
				<ul className="relative w-full h-fit flex flex-col opacity-60 px-5 text-xs lg:text-lg my-auto">
					<li className="font-semibold border-b-2 py-2 border-b-[var(--text-faded)]  ">
						01. Full focus, no distractions
					</li>
					<li className="font-semibold border-b-2 py-2 border-b-[var(--text-faded)] ">
						02. Consistent results
					</li>
					<li className="font-semibold border-b-2 py-2 border-b-[var(--text-faded)] ">
						03. Built on trust
					</li>
					<li className="font-semibold border-b-2 py-2 border-b-[var(--text-faded)] ">
						04. Modern styles with classic precision
					</li>
					<li className="font-semibold border-b-2 py-2 border-b-[var(--text-faded)] ">
						05. Clean, professional, private
					</li>
					<li className="font-semibold py-2">06. Flexible appointments</li>
				</ul>
				<p className="font-semibold !text-[var(--text)] text-center font-sinister text-2xl lg:text-4xl mt-auto">
					Book your cut. Feel the difference.
				</p>
			</div>
		</main>
	);
};

export { AboutUsPage };
