import React from "react";
import { render, screen } from "@testing-library/react";

import AboutUs from "../components/Aboutus"; // ✅ corrected path & casing
import "@testing-library/jest-dom";
jest.mock("../components/ContactUs", () => () => <div>Mocked ContactUs</div>);

jest.mock("../components/Footer", () => () => <footer>Mocked Footer</footer>);

// Mock AOS for testing (since it uses window internals)
jest.mock("aos", () => ({
  init: jest.fn(),
}));

describe("AboutUs Component", () => {
  test("renders mission, vision, and story section titles", () => {
    render(<AboutUs />);

    expect(
      screen.getByText(/our mission, vision & story/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/vision 🌍/i)).toBeInTheDocument();
    expect(screen.getByText(/mission 🚀/i)).toBeInTheDocument();
    expect(screen.getByText(/our story 📖/i)).toBeInTheDocument();
  });

  test("renders the 'Why Choose Us' section", () => {
    render(<AboutUs />);

    expect(screen.getByText(/why choose us/i)).toBeInTheDocument();
    expect(
      screen.getByText(/your perfect stay, our expertise/i)
    ).toBeInTheDocument();

    // Check one feature is present
    expect(screen.getByText(/Verified Resorts & Villas/i)).toBeInTheDocument();
  });

  test("renders mocked ContactUs and Footer", () => {
    render(<AboutUs />);

    expect(screen.getByText(/mocked contactus/i)).toBeInTheDocument();
    expect(screen.getByText(/mocked footer/i)).toBeInTheDocument();
  });
});
