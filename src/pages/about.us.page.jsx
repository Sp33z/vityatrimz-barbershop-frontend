const AboutUsPage = () => {
	return (
		<main className="relative w-full h-full px-8 pt-3 pb-2 flex flex-col lg:flex-row gap-y-2 gap-x-10">
			<section className="h-fit w-full flex flex-row gap-x-5 lg:my-auto">
				<div className="h-60 w-full lg:h-[70vh] rounded-t-[30px] rounded-bl-[30px] overflow-hidden">
					<img
						src="/src/assets/images/about_us_3.jpg"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="h-60 w-full lg:h-[70vh] flex flex-col gap-y-5">
					<p className="w-full h-fit p-1 text-center bg-gray-700 text-xs font-bold rounded-t-[30px] rounded-bl-[30px] !text-white">
						Since
						<br />
						<span className="text-2xl !text-white font-sinister tracking-widest">
							2021
						</span>
					</p>
					<div className="relative w-full h-full overflow-hidden rounded-t-[30px] rounded-br-[30px]">
						<img
							src="/src/assets/images/about_us_2.jpg"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>
			<section className="h-full w-full flex flex-col gap-y-5 lg:h-fit lg:gap-y-10 lg:my-auto">
				<p className="relative w-fit font-sinister tracking-widest font-semibold text-4xl lg:text-7xl">
					About us
				</p>
				<p className="text-sm font-semibold lg:text-lg opacity-70">
					Founded in 2021, our barbershop is all about quality cuts, fresh
					styles, and a welcoming atmosphere. We specialize in modern and
					classic haircuts, beard grooming, and detailed styling to help you
					look and feel your best. Whether you're coming in for a quick trim or
					a full transformation, we take the time to understand your style and
					deliver results you’ll love.
				</p>
				<p className="w-fit h-fit font-sinister fonst-semibold text-3xl lg:text-5xl">
					Why should you choose us?
				</p>
				<ul className="w-fit h-fit flex flex-col gap-y-5 opacity-70">
					<li className="text-sm font-semibold border-b-[1px] border-[#000000a0] pb-2 lg:text-base">
						<span className="text-base lg:text-lg">01. Focused on you</span> –
						No rush, no distractions. Just you and your style.
					</li>
					<li className="text-sm font-semibold border-b-[1px] border-[#000000a0] pb-2 lg:text-base">
						<span className="text-base lg:text-lg">
							02. Modern cuts, classic precision
						</span>{' '}
						– The best of today’s trends with old-school technique.
					</li>
					<li className="text-sm font-semibold border-b-[1px] border-[#000000a0] pb-2 lg:text-base">
						<span className="text-base lg:text-lg">
							03. Clean tools, clean lines
						</span>{' '}
						– Sterile equipment and sharp execution.
					</li>
					<li className="text-sm font-semibold border-b-[0px] border-[#000000a0] pb-2 lg:text-base">
						<span className="text-base lg:text-lg">04. Clients come back</span>{' '}
						– Once you try it, you’ll know why they return.
					</li>
				</ul>
			</section>
		</main>
	);
};

export { AboutUsPage };
