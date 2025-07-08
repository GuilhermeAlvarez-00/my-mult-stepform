import type { FC, ReactNode } from "react";

export interface IStepItem {
	stepKey: ReactNode;
	indicator: string;
	label: string;
	active: boolean;
	short?: boolean;
}

export const StepItem: FC<IStepItem> = ({
	stepKey,
	indicator,
	label,
	active,
	short,
}) => {
	return (
		<button aria-label="step-item" className="flex gap-4 items-center">
			<div
				aria-label="step-circle"
				className={` border border-white w-9 h-9 sm:w-10 sm:h-10 overflow-hidden rounded-full flex items-center justify-center 
						${active ? "bg-blue-200 text-black" : "text-white"}`}
			>
				{stepKey}
			</div>

			{!short && (
				<div
					aria-label="step-indicator"
					className="flex flex-col text-left text-white"
				>
					<span className="text-xs text-blue-300">{indicator}</span>
					<strong>{label}</strong>
				</div>
			)}
		</button>
	);
};
