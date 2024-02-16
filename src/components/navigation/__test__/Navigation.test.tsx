//Navigation/__test__/Navigation.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";

describe("Navigation component", () => {
  it("Navigation should render correctly", () => {
    render(<Navigation />);
    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
  });
});
