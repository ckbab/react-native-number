import PropTypes from "prop-types";
import React from "react";

import MergedNumber from "./MergedNumber";
import SeparatedNumber from "./SeparatedNumber";

export default function Number({ color, size, style, type, value }) {
  if (value === undefined || value === null || isNaN(value)) {
    return null;
  }

  const items = value?.toString()?.replace(/\D+/g, "")?.split("");
  const props = { color, size, style, value };

  if (type === "merged") {
    return <MergedNumber items={items} {...props} />;
  }
  return <SeparatedNumber items={items} {...props} />;
}

Number.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.any,
  type: PropTypes.oneOf(["merged", "separated"]),
  value: PropTypes.number,
};

Number.defaultProps = {
  color: "#cc00ff",
  size: 32,
  style: {},
  type: "separated",
  value: null,
};
