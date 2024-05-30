// import curve from "../../assets/curve.svg";

import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

import "./InfiniteScroll.css";

const InfiniteScroll = () => {
	// const text = "THE VENUE";

	const screenSize = useScreenSize();

	const [offset, setOffset] = useState(0);

	const [limit, setLimit] = useState();

	useEffect(() => {
		if (screenSize === "md" || screenSize === "lg") {
			setLimit(-340);
		} else {
			setLimit(-237.364);
		}
	}, [screenSize]);

	useEffect(() => {
		const s = setInterval(() => {
			setOffset((prev) => (prev < limit ? 0 : (prev - 0.2).toFixed(1)));
		}, 0.75);

		return () => clearInterval(s);
	}, [limit]);

	return (
		<h1>
			<svg
				// viewBox="0 0 250 90"
				className="the-curve"
				// viewBox="50 0 1200 300"
				// stroke="black"
			>
				<path
					id="curve"
					fill="none"
					// d="m 0,88.5 c 61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
					// d="M-550,65.538 L-550,65.538 S-183.15,215.538 0,215.538 S366.85,65.538 550,65.538 S916.85,215.538 1100,215.538 S1466.85,65.538 1650,65.538 S2016.85,215.538 2200,215.538"
					// d="M-550,66.86 L-550,66.86 S-183.15,216.86 0,216.86 S366.85,66.86 550,66.86 S916.85,216.86 1100,216.86 S1466.85,66.86 1650,66.86 S2016.85,216.86 2200,216.86"
					d="M-550,51.636 L-550,51.636 S-183.15,201.636 0,201.636 S366.85,51.636 550,51.636 S916.85,201.636 1100,201.636 S1466.85,51.636 1650,51.636"
				/>
				<text>
					{/* <textPath className="ven-text" href="#curve">
						THE VENUE &nbsp;&nbsp;THE VENUE &nbsp;&nbsp;THE VENUE
						&nbsp;&nbsp;THE VENUE &nbsp;&nbsp;THE VENUE &nbsp;&nbsp;THE VENUE
						&nbsp;&nbsp;
						<animate
							attributeName="startOffset"
							from="0%"
							to="-55.6%"
							dur="7s"
							repeatCount="indefinite"
						/>
					</textPath> */}
					<textPath className="ven-text" href="#curve" startOffset={offset}>
						{screenSize === "md" || screenSize === "lg" ? (
							<>
								<tspan x="500">THE VENUE</tspan>
								<tspan x="840">THE VENUE</tspan>
								<tspan x="1180">THE VENUE</tspan>
								<tspan x="1520">THE VENUE</tspan>
								<tspan x="1860">THE VENUE</tspan>
								<tspan x="2200">THE VENUE</tspan>
							</>
						) : (
							<>
								<tspan x="500">THE VENUE</tspan>
								<tspan x="737.364">THE VENUE</tspan>
								<tspan x="974.728">THE VENUE</tspan>
								<tspan x="1212.092">THE VENUE</tspan>
								<tspan x="1449.456">THE VENUE</tspan>
								<tspan x="1686.82">THE VENUE</tspan>
							</>
						)}
					</textPath>
				</text>
			</svg>
		</h1>
	);
};

export default InfiniteScroll;
