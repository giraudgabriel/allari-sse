import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MainContent } from "@/components/common/main-content";
import { Developer } from "@/config/developer";

describe("<MainContent />", () => {
  test("MainContent mounts properly", () => {
    const wrapper = render(
      <MainContent
        title={Developer.name}
        description={Developer.project.description}
      >
        <p>Test</p>
      </MainContent>
    );
    expect(wrapper).toBeTruthy();
  });

  test("MainContent read more button works", () => {
    const wrapper = render(
      <MainContent
        title={Developer.name}
        description={Developer.project.description}
      >
        <p>Test</p>
      </MainContent>
    );
    expect(wrapper).toBeTruthy();

    // Get Read More button using the DOM API
    const readMore = wrapper.container.querySelector("button");
    expect(readMore).toBeTruthy();
    expect(readMore?.textContent?.trim()).toBe("Read More");

    // Click Read More button
    readMore?.click();

    // Get Read Less button using the DOM API
    const readLess = screen.findByText("Read Less");
    expect(readLess).toBeTruthy();
  });
  
});
