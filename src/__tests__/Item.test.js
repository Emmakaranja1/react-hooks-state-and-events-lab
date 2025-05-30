import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  fireEvent.click(screen.getByText("Add to Cart"));
  expect(container.querySelector(".in-cart")).toBeInTheDocument();
});
