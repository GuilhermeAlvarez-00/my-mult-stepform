import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ToggleSwitch, type IToggleSwitch } from "../";

const setup = (props?: Partial<IToggleSwitch>) => {
	const onChangeFn = vi.fn();
	render(<ToggleSwitch value="test-value" onChange={onChangeFn} {...props} />);
	return {
		onChangeFn,
		switchInput: screen.getByLabelText("switch-input"),
		switchLabel: screen.getByLabelText("switch-label"),
	};
};

describe("ToggleSwitch component", () => {
	test("Should render with correct initial state", () => {
		const { switchInput, switchLabel } = setup();

		expect(switchInput).toBeInTheDocument();
		expect(switchInput).not.toBeChecked();
		expect(switchLabel).toHaveClass("bg-neutral-300");
	});

	test("Should have persistent background color when persistBg is true", async () => {
		const { switchLabel } = setup({ persistBg: true });
		expect(switchLabel).toHaveClass("bg-blue-950");

		await userEvent?.click(switchLabel);

		expect(switchLabel).toHaveClass("bg-blue-950");
	});

	test("Should use className for background when persistBg is true", () => {
		const { switchLabel } = setup({
			persistBg: true,
			className: "custom-bg-class",
		});
		expect(switchLabel).toHaveClass("custom-bg-class");
	});

	test("Should toggle state and call onChange when clicked", async () => {
		const { onChangeFn, switchInput, switchLabel } = setup();

		// switch on
		await userEvent.click(switchLabel);

		expect(switchInput).toBeChecked();
		expect(switchLabel).toHaveClass("bg-blue-950");
		expect(onChangeFn).toHaveBeenCalledWith({
			value: "test-value",
			isChecked: true,
		});
		expect(onChangeFn).toHaveBeenCalledTimes(1);

		// switch off
		await userEvent.click(switchLabel);

		expect(switchInput).not.toBeChecked();
		expect(switchLabel).not.toHaveClass("bg-blue-950");
		expect(switchLabel).toHaveClass("bg-neutral-300");
		expect(onChangeFn).toHaveBeenCalledWith({
			value: "test-value",
			isChecked: false,
		});
		expect(onChangeFn).toHaveBeenCalledTimes(2);
	});
});
