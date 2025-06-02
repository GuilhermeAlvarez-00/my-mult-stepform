import { describe, expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "../";

describe("Input component", () => {
	test("Shoud render Input correctly", () => {
		const screen = render(<Input onChange={value => { }} />);
		expect(screen.getByLabelText("input")).toBeInTheDocument();
	});

	test("Should display default value correcty", () => {
		const screen = render(<Input value="test value" onChange={value => { }} />);

		expect(screen.getByLabelText("input")).toHaveValue("test value");
	});

	test("Should display placeholder correctly", () => {
		const screen = render(<Input onChange={value => { }} placeholder="Input placeholder" />);

		expect(screen.getByPlaceholderText("Input placeholder")).toBeInTheDocument();
	});

	test("Should call onChange when user types", async () => {
		const user = userEvent.setup();
		const handleChange = vi.fn();

		const screen = render(<Input onChange={handleChange} />);
		const input = screen.getByLabelText("input");

		await user.type(input, "Hello");

		expect(input).toHaveValue("Hello");
		expect(handleChange).toHaveBeenCalledTimes(5);
	});

	test("Should display error message when has error", () => {
		const screen = render(<Input error="Error message" onChange={value => { }} />);
		const errorMessage = screen.getByLabelText("error-message");

		expect(errorMessage).toBeInTheDocument();
	})
})
