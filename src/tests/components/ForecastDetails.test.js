// ForecastDetails.test.js

import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe('ForecastDetails component', () => {
    const validProps = {
      date: 1111111,
      temperature: {
        max: 50,
        min: 3,
      },
      humidity: 12,
      wind: {
        speed: 99,
        direction: 'n',
      },
    };
  
    it('renders correctly', () => {
      const { asFragment } = render(<ForecastDetails forecast={validProps} />);
  
      expect(asFragment()).toMatchSnapshot();
    });
  });