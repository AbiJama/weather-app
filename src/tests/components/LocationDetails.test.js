import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />,
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
