import PropTypes from "prop-types";
import React from "react";

import MergedNumber from "./MergedNumber";
import { useNumberContext } from "./NumberContext";
import SeparatedNumber from "./SeparatedNumber";

export default function Number({
  color: c,
  size,
  style,
  type = "separated",
  value,
}) {
  const context = useNumberContext();

  if (value === undefined || value === null || isNaN(value)) {
    return null;
  }

  const items = value?.toString()?.replace(/\D+/g, "")?.split("");
  const props = {
    color: c || context?.color || "#cc00ff",
    size: size || context?.size || 32,
    style,
    value,
  };

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
