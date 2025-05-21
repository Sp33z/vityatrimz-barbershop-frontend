import { SlMustache } from 'react-icons/sl';

const MustacheSeparator = () => {
	return (
		<div className="w-fit h-fit flex gap-x-5 mx-auto">
			<div className="w-30 h-[2px] bg-black my-auto rounded-full from-black"></div>
			<SlMustache className="w-auto h-10 fill-black" />
			<div className="w-30 h-[2px] bg-black my-auto rounded-full from-black"></div>
		</div>
	);
};

export { MustacheSeparator };
