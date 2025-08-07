// src/__tests__/Footer.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";
import "@testing-library/jest-dom";

// ✅ Mock AOS if you're using it in your actual Footer (optional)
jest.mock("aos", () => ({ init: jest.fn() }));

describe("Footer Component", () => {
  test("renders all sections correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Description
    expect(
      screen.getByText(/From private pool villas to cozy cottages/i)
    ).toBeInTheDocument();

    // Section headers
    expect(screen.getByText("Resorts")).toBeInTheDocument();
    expect(screen.getByText("Links")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();

    // Resort links
    expect(screen.getByText("Budget-Friendly Resorts")).toBeInTheDocument();
    expect(screen.getByText("Luxury Resorts")).toBeInTheDocument();

    // Quick Links
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Blog Section")).toBeInTheDocument();

    // Contact Info
    expect(screen.getByText("+91 96337 63916")).toBeInTheDocument();
    expect(
      screen.getByText("journeyjunctionwyn@gmail.com")
    ).toBeInTheDocument();
  });

  test("renders social icons", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("WhatsApp")).toBeInTheDocument();
  });
});
