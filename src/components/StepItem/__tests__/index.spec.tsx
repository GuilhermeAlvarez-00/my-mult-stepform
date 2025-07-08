import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { StepItem } from "../";

describe("StepItem component", () => {
	test("Should display correctly", () => {
		const screen = render(
			<StepItem active={false} stepKey="1" label="YOUR INFO" indicator="1" />,
		);

		expect(screen.getByLabelText("step-item")).toBeInTheDocument();
	});

	test("Should change background when is active", () => {
		const screen = render(
			<StepItem active={true} stepKey="1" label="YOUR INFO" indicator="1" />,
		);

		expect(screen.getByLabelText("step-circle")).toHaveClass(
			"bg-blue-200 text-black",
		);
	});

	test("Should render step indicator when short prop is false", () => {
		const screen = render(
			<StepItem active={true} stepKey="1" label="YOUR INFO" indicator="1" />,
		);

		expect(screen.queryByLabelText("step-indicator")).toBeInTheDocument();
	});

	test("Should render only step indicator when short prop is true", () => {
		const screen = render(
			<StepItem
				active={true}
				stepKey="1"
				label="YOUR INFO"
				indicator="1"
				short={true}
			/>,
		);

		expect(screen.queryByLabelText("step-indicator")).toBeNull();
	});
});
