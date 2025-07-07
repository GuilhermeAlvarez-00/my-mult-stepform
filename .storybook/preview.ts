import type { Preview } from '@storybook/react'
import "../src/styles.css"

const preview: Preview = {
	parameters: {
		backgrounds: {
			values: [
				{ name: 'Dark', value: '#333' },
				{ name: 'White', value: '#fff' },
				{ name: "Purple", value: "#493eff" },
			],
			default: "White"
		},
	},
};

export default preview;
