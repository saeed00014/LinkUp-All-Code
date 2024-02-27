import { render } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import LoginForm from "../src/app/login/loginForm";
import React, { useRef } from "react";

describe("test loginForm inputs", () => {
  const onSubmit = jest.fn();
  onSubmit.mockClear();
  render(<LoginForm onSubmit={onSubmit} /> )

  test("check input works", async () => {
    const user = userEvent.setup();
    const usernameInput = screen.getByRole("textbox");
    await user.type(usernameInput, "ali85dd");
    expect(usernameInput.value).toBe("ali85dd");
    const passwordInput = screen.getByPlaceholderText(/رمز عبور/i);
    await user.type(passwordInput, "aaaa1111");
    expect(passwordInput.value).toBe("aaaa1111");
    await user.click(screen.getByRole("button", { name: /ورود/i }));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    });
  });
});
