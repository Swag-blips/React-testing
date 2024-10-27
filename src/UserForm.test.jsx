import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import "@testing-library/jest-dom";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);
  // manipulate the component or find an element in it

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  // Assertion - make sure the component is doing what we expect it to do

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", () => {
  //render the component

  render(<UserForm />);
  // find the two inputs

  const [nameInput, emaiInput] = screen.getAllByRole("textbox");
  // simulate typing in a name and email
  user.click(nameInput);
  user.keyboard("jane");

  user.click(emaiInput);
  user.keyboard("jane@test.com");

  // find the button
  //simulate clicking the button
  // assertion to make sure 'onUserAdd' gets called with email/name
});
