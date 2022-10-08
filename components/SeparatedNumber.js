import { changeColor } from "@ckbab/js-utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Path, Svg } from "react-native-svg";

import Digit from "./Digit";

export default function SeparatedNumber({ color, items, size, style, value }) {
  const renderItem = (item, index) => {
    const number = parseInt(item);
    const marginLeft = index > 0 ? parseInt(size / 16) : 0;
    const showMinus = index === 0 && value < 0;
    return (
      <Svg
        fillRule="evenodd"
        height={size}
        key={index}
        style={{ marginLeft }}
        viewBox="-40 -40 515 515"
        width={size}
      >
        <Path
          d="M229.138,313.209c-62.578,49.778-132.267,75.378-197.689,76.8
c-48.356-82.489-38.4-283.022,18.489-341.333c51.2-52.622,211.911-62.578,304.356-29.867
C377.049,112.676,330.116,232.142,229.138,313.209z M405.493,412.764c-69.689,56.889-287.289,56.889-355.556,0c-69.689-56.889-62.578-300.089,0-364.089
s292.978-64,355.556,0S475.182,355.876,405.493,412.764z"
          stroke="#000"
          strokeWidth={40}
        />
        <Path
          d="M405.493,412.764c-69.689,56.889-287.289,56.889-355.556,0c-69.689-56.889-62.578-300.089,0-364.089
s292.978-64,355.556,0S475.182,355.876,405.493,412.764z"
          fill={changeColor(color, "#000", 0.9)}
        />
        <Path
          d="M229.138,313.209c-62.578,49.778-132.267,75.378-197.689,76.8c-48.356-82.489-38.4-283.022,18.489-341.333c51.2-52.622,211.911-62.578,304.356-29.867 C377.049,112.676,330.116,232.142,229.138,313.209z"
          fill={color}
        />
        {showMinus && (
          <Path
            d="M70 210h90v60H70z"
            fill="#fff"
            stroke="#000"
            strokeWidth={20}
          />
        )}
        <Digit number={number} x={showMinus ? 50 : 0} />
      </Svg>
    );
  };

  return (
    <View style={[styles.container, style]}>{items?.map(renderItem)}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
});
