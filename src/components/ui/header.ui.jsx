import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import { VityatrimzLogo } from '../../assets/images/vityatrimz.logo';

const Header = () => {
	return (
		<header className="w-full h-fit p-5">
			<VityatrimzLogo className="w-auto h-12" />
		</header>
	);
};

export { Header };
