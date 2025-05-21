import { Link } from 'react-router-dom';
import { VityatrimzLogo } from '../../assets/images/vityatrimz.logo';

const Header = () => {
	return (
		<header className="realtive w-full h-fit p-5">
			<Link className="relative w-fit h-fit">
				<VityatrimzLogo className="w-auto h-15" />
			</Link>
		</header>
	);
};

export { Header };
