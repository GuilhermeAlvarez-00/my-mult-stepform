import type { Meta, StoryObj } from "@storybook/react";

import { ToggleSwitch } from "../";

type TMeta = Meta<typeof ToggleSwitch>;
type TStory = StoryObj<typeof ToggleSwitch>;

const meta: TMeta = {
	title: "Components/ToggleSwitch",
	component: ToggleSwitch,
	tags: ["autodocs"],
};

export const Primary: TStory = {
	args: {
		onChange: () => {},
	},
};

export const PersistBg: TStory = {
	args: {
		persistBg: true,

		onChange: () => {},
	},
};

export const CustomBackgroundColor: TStory = {
	args: {
		onChange: () => {},
		className: "bg-red-500",
	},
};

export default meta;
