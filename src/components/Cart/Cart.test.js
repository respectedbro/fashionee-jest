import { Cart } from "./index";
import { fireEvent, render, screen } from "@testing-library/react";

describe("render Cart", () => {
  test("Рендер текста в промокоде", () => {
    render(<Cart />);

    expect(screen.getByText("You have a promo code?")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter promo code")).toBeInTheDocument();
    expect(screen.getByText("Применить")).toBeInTheDocument();
  });

  test("применяет скидку при введении правильного промо-кода", () => {
    render(<Cart />);

    const promoInput = screen.getByTestId("promo-input");
    const applyButton = screen.getByTestId("apply-button");

    fireEvent.change(promoInput, { target: { value: "ilovereact" } });
    fireEvent.click(applyButton);

    expect(screen.getByText("10%")).toBeInTheDocument();
  });

  test("Промо-код не верный", () => {
    render(<Cart />);

    const promoInput = screen.getByTestId("promo-input");
    const applyButton = screen.getByTestId("apply-button");

    fireEvent.change(promoInput, { target: { value: "nocode" } });
    fireEvent.click(applyButton);

    expect(screen.getByText("No")).toBeInTheDocument();
  });

  test("поле промо-кода пустое", () => {
    render(<Cart />);

    const applyButton = screen.getByTestId("apply-button");

    fireEvent.click(applyButton);

    expect(screen.getByText("No")).toBeInTheDocument();
  });
});
