import { SlMustache } from 'react-icons/sl';

const MustacheSeparator = (props) => {
	const className = props.className || ''; // Default className if not provided

	return (
		<div className={`${className} flex gap-x-3`}>
			<div className="w-30 h-[2px] bg-black my-auto rounded-full from-black"></div>
			<SlMustache className="w-auto h-10 fill-black" />
			<div className="w-30 h-[2px] bg-black my-auto rounded-full from-black"></div>
		</div>
	);
};

export { MustacheSeparator };
