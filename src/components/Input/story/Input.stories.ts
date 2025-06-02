import type { Meta, StoryObj } from '@storybook/react';

import { Input } from "../";

type TMeta = Meta<typeof Input>;
type TStory = StoryObj<typeof Input>;

const meta: TMeta = {
	title: "Components/Input",
	component: Input,
	tags: ["autodocs"]
}

export const Primary: TStory = {
  args: {
    placeholder: 'Input placedholder',
  },
};

export const Error: TStory = {
  args: {
		className: {
			root: "mt-5",
		},
    placeholder: 'Input placedholder',
		error: "This field is required"
  },
};

export default meta;
