import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../";

type TMeta = Meta<typeof Button>;
type TStory = StoryObj<typeof Button>;

const meta: TMeta = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
};

export const Primary: TStory = {
	args: {
		children: "Next Step",
	},
};

export const Secondary: TStory = {
	args: {
		children: "Next Step",
		className: "bg-purple-600",
	},
};

export const WithOnClick: TStory = {
	args: {
		children: "Next Step",
		className: "bg-purple-600",
		onClick: () => alert("Hello world!"),
	},
};

export default meta;
