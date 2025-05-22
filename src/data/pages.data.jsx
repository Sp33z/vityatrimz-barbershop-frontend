import { HiHome } from 'react-icons/hi';
import { FaAddressCard } from 'react-icons/fa';

const pages = [
	{
		name: 'Home',
		index: 0,
		icon: <HiHome className="h-7 w-auto my-auto" />,
	},
	{
		name: 'About Us',
		index: 1,
		icon: <FaAddressCard className="h-7 w-auto my-auto" />,
	},
];

export { pages };
