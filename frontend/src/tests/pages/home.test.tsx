import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Developer } from "@/config/developer";
import { App } from "@/app";

describe("<Home />", () => {
  test("Home mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Get Header element using the DOM API
    const header = wrapper.container.querySelector("header");
    expect(header).toBeTruthy();

    // Get Name element using the DOM API
    const text = screen.getByText(Developer.name);
    expect(text.textContent).toBeTruthy();

    // Get Main element using the DOM API
    const main = wrapper.container.querySelector("main");
    expect(main).toBeTruthy();

    // Get Footer element using the DOM API
    const footer = wrapper.container.querySelector("footer");
    expect(footer).toBeTruthy();
  });
});
