import { createContext, useState } from 'react';

const MainSwiperContext = createContext();

const MainSwiperProvider = (props) => {
	const children = props.children;

	const [swiper, setSwiper] = useState();
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<MainSwiperContext.Provider
			value={{ swiper, setSwiper, activeIndex, setActiveIndex }}
		>
			{children}
		</MainSwiperContext.Provider>
	);
};

export { MainSwiperContext, MainSwiperProvider };
