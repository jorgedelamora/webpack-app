import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi, describe, test, expect } from "vitest";
import App from "./App";
import Button from "./components/Button";

test("renders Welcome message", () => {
	render(<App />);
	const linkElement = screen.getByText(/Welcome to your webpack app!/i);
	expect(linkElement).toBeInTheDocument();
});
test("renders hello button", () => {
	render(<App />);
	const button = screen.getByTestId("hello-button");
	expect(button).toBeInTheDocument();
});
describe("when the button is clicked", () => {
	test("the handle click function is called", () => {
		const mockOnclick = vi.fn();
		render(<Button onClick={mockOnclick} />);
		const button = screen.getByTestId("hello-button");
		fireEvent.click(button);
		expect(mockOnclick).toHaveBeenCalled();
	});
	test("the welcome message should appear", () => {
		render(<App />);
		const button = screen.getByTestId("hello-button");
		fireEvent.click(button);
		const helloMessage = screen.getByTestId("hello-message");
		expect(helloMessage).toBeInTheDocument();
	});
});
describe("if the button is not clicked", () => {
	test("the handle click function should not be called", () => {
		const mockOnclick = vi.fn();
		render(<Button onClick={mockOnclick} />);
		expect(mockOnclick).not.toHaveBeenCalled();
	});
	test("the welcome message should not appear", () => {
		render(<App />);
		const helloMessage = screen.queryByTestId("hello-message");
		expect(helloMessage).not.toBeInTheDocument();
	});
});
