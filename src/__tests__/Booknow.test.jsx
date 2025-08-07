import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Booknow from "../components/Booknow"; // ✅ Import the correct component
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// ✅ Mock Footer to avoid dependency issues
jest.mock("../components/Footer", () => () => <div>Mocked Footer</div>);

// ✅ Mock window.open for WhatsApp redirection
global.open = jest.fn();

describe("Booknow Component", () => {
  test("fills and submits the form correctly", () => {
    render(
      <MemoryRouter>
        <Booknow />
      </MemoryRouter>
    );

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText("Your Name"), {
      target: { value: "Arjun" },
    });
    fireEvent.change(screen.getByPlaceholderText("Phone Number"), {
      target: { value: "9876543210" },
    });
    fireEvent.change(screen.getByPlaceholderText("No. of Adults"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByPlaceholderText("No. of Kids"), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByLabelText("Check-in Date"), {
      target: { value: "2025-08-10" },
    });
    fireEvent.change(screen.getByLabelText("Check-out Date"), {
      target: { value: "2025-08-15" },
    });
    fireEvent.change(screen.getByPlaceholderText("No. of Rooms"), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Budget (₹)"), {
      target: { value: "5000" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Message"), {
      target: { value: "Looking forward!" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Proceed"));

    // Check if WhatsApp was triggered
    expect(global.open).toHaveBeenCalled();
    const calledUrl = global.open.mock.calls[0][0];
    expect(calledUrl).toContain("https://wa.me/919633763916");
    expect(calledUrl).toContain("Arjun");
    expect(calledUrl).toContain("Looking%20forward!");

    // Verify thank you message is shown
    expect(screen.getByText(/Thank You! 🙌/i)).toBeInTheDocument();
  });
});
