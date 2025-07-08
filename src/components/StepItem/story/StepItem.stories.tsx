import type { Meta, StoryObj } from "@storybook/react";
import { FaReact } from "react-icons/fa";

import { StepItem } from "../";

type TMeta = Meta<typeof StepItem>;
type TStory = StoryObj<typeof StepItem>;

const meta: TMeta = {
	title: "Components/StepItem",
	component: StepItem,
	tags: ["autodocs"],
	parameters: {
		backgrounds: {
			default: "Purple",
		},
	},
};

export const Primary: TStory = {
	args: {
		stepKey: <span>1</span>,
		indicator: "STEP 1",
		label: "YOUR INFO",
		active: false,
	},
};

export const Active: TStory = {
	args: {
		stepKey: <span>1</span>,
		indicator: "STEP 1",
		label: "YOUR INFO",
		active: true,
	},
};

export const Short: TStory = {
	args: {
		stepKey: <span>1</span>,
		indicator: "STEP 1",
		label: "YOUR INFO",
		active: false,
		short: true,
	},
};

export const WithIcon: TStory = {
	args: {
		stepKey: <FaReact size={25} />,
		indicator: "STEP 1",
		label: "YOUR INFO",
		active: false,
	},
};

export default meta;
