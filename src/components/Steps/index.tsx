import type { FC } from "react";
import { useScreen } from "../../hooks/useScreen";
import { StepItem, type IStepItem } from "../StepItem";

interface ISteps {
	steps: IStepItem[];
}

const bgMobile = "/src/assets/images/bg-sidebar-mobile.svg";
const bgDesktop = "/src/assets/images/bg-sidebar-desktop.svg";

export const Steps: FC<ISteps> = ({ steps }) => {
	const { width, breakpoints } = useScreen();

	return (
		<aside
			style={{
				backgroundImage: `url(${width >= breakpoints.md ? bgDesktop : bgMobile})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className={`md:px-2 lg:px-8 relative w-full h-full md:rounded-lg`}
		>
			<div>
				<ol className="flex gap-4 justify-center mt-8 md:flex-col md:gap-6">
					{steps?.map((item) => (
						<li key={item?.indicator}>
							<StepItem
								label={item?.label}
								active={item?.active}
								stepKey={item?.stepKey}
								indicator={item?.indicator}
								short={width <= breakpoints.md}
							/>
						</li>
					))}
				</ol>
			</div>
		</aside>
	);
};
