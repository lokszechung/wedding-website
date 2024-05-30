import { useState, useEffect } from "react";

function useScreenSize() {
	const [screenSize, setScreenSize] = useState(
		getScreenSize(window.innerWidth)
	);

	useEffect(() => {
		const handleWindowResize = () => {
			const width = window.innerWidth;
			const newSize = getScreenSize(width);
			if (newSize !== screenSize) {
				setScreenSize(newSize);
			}
		};
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, [screenSize]);

	function getScreenSize(width) {
		if (width < 576) {
			return "xsm";
		}
		if (width >= 576 && width <= 768) {
			return "sm";
		}
		if (width > 768 && width < 992) {
			return "md";
		}
		if (width >= 992) {
			return "lg";
		}
	}

	return screenSize;
}

export default useScreenSize;
