import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../";

describe("Button component", () => {
  test("Should render button correctly", () => {
    const screen = render(<Button>Click</Button>);

    expect(screen.getByLabelText("button")).toBeInTheDocument();
  });

  test("Should receive a children and render", () => {
    const screen = render(<Button>Click</Button>);
    const button = screen.getByLabelText("button");

    expect(button).not.toBeEmptyDOMElement();
  });

  test("Should call onClick function if exists", async () => {
    const user = userEvent.setup();

    const onClickFn = vi.fn();
    const screen = render(<Button onClick={onClickFn}>Click</Button>);
    const button = screen.getByLabelText("button");

    await user.click(button);

    expect(onClickFn).toHaveBeenCalled();
  });
});
