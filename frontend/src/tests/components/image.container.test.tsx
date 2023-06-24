import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { ImageContainer } from "@/components/common/main-content/image.container";

const IMAGE = {
  Hash: "123",
  Name: "Test",
  Url: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  ThumbnailUrl:
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
};

describe("<ImageContainer />", () => {
  test("Image Container mounts properly", () => {
    const wrapper = render(<ImageContainer images={[]} loading={false} />);
    expect(wrapper).toBeTruthy();
  });

  test("Image Container mounts properly with images", () => {
    const wrapper = render(<ImageContainer images={[IMAGE]} loading={false} />);
    expect(wrapper).toBeTruthy();

    // Get Image element using the DOM API
    const image = wrapper.container.querySelector("img");
    expect(image).toBeTruthy();
    expect(image?.getAttribute("src")).toBe(IMAGE.Url);
  });

  test("Image Container mounts properly with loading", () => {
    const wrapper = render(<ImageContainer images={[]} loading={true} />);
    expect(wrapper).toBeTruthy();

    // Get Loading element using the DOM API
    const loading = wrapper.container.querySelector("p");
    expect(loading).toBeTruthy();
    expect(loading?.textContent).toBe("Loading...");
  });
});
