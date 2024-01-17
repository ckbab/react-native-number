import PropTypes from "prop-types";
import React from "react";

import MergedNumber from "./MergedNumber";
import { useNumberContext } from "./NumberContext";
import SeparatedNumber from "./SeparatedNumber";

export default function Number({
  borderColor: bColor,
  color: iconColor,
  size,
  style,
  type,
  value,
}) {
  const context = useNumberContext();

  if (value === undefined || value === null || isNaN(value)) {
    return null;
  }

  const items = value?.toString()?.replace(/\D+/g, "")?.split("");
  const props = {
    borderColor: bColor || context?.borderColor || "#000",
    color: iconColor || context?.color || "#cc00ff",
    size: size || context?.size || 32,
    style,
    value,
  };

  const selectedType = type || context?.type || "separated";

  if (selectedType === "merged") {
    return <MergedNumber items={items} {...props} />;
  }
  return <SeparatedNumber items={items} {...props} />;
}

Number.propTypes = {
  borderColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.any,
  type: PropTypes.oneOf(["merged", "separated"]),
  value: PropTypes.number,
};
