import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./Button.stories";
import { fireEvent, userEvent } from "@storybook/testing-library";

const { Primary, ClickButtonStory } = composeStories(stories);

const handleClick = jest.fn();
test("renders primary button with overriden props", () => {
  render(<Primary>Hello world</Primary>);
  const buttonElement = screen.getByText(/Hello world/i);
  expect(buttonElement).not.toBeNull();
});
test("calls onClick when button is clicked", () => {
  render(<Primary onClick={handleClick} />);

  const buttonElement = screen.getByText(/Submit/i);
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
test("renders with play function", async () => {
  const { container } = render(<ClickButtonStory />);
  await ClickButtonStory.play({
    args: { onClick: handleClick },
    canvasElement: container,
  });
  const button = screen.getByRole("button");
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
