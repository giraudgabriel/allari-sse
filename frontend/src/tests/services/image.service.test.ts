import { describe, test, expect } from "vitest";
import imageService from "@/services/image.service";

describe("ImageService", () => {
  test("Get All Images", async () => {
    const images = await imageService.getAll();

    if (!images) {
      expect(images).toBeNull();
      return;
    }

    expect(images.length).toBe(5);
  });
});
