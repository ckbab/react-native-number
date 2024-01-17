import { changeColor } from "@ckbab/js-utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Path, Svg } from "react-native-svg";

import Digit from "./Digit";

export default function MergedNumber({
  borderColor,
  color,
  items,
  size,
  style,
  value,
}) {
  const renderItem = (item, index) => {
    const number = parseInt(item);
    const marginLeft = index > 0 ? -size / 2 : 0;
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
        {showMinus && (
          <Path
            d="M70 210h90v60H70z"
            fill="#fff"
            stroke="#000"
            strokeWidth={20}
          />
        )}
        <Digit number={number} x={value < 0 ? 50 : 0} />
      </Svg>
    );
  };

  const borderBottomColor = changeColor(color, "#000", 0.9);
  const borderWidth = Math.max(1, size / 24);
  const borderRadius = Math.max(4, size / 4);

  return (
    <View
      style={[
        styles.container,
        { borderColor, borderRadius, borderWidth },
        style,
      ]}
    >
      <View style={styles.bg}>
        <View style={[styles.side, { backgroundColor: color }]} />
        <View
          style={[
            styles.triangle,
            {
              backgroundColor: color,
              borderBottomColor,
              borderBottomWidth: size,
              borderLeftWidth: size / 2,
            },
          ]}
        />
        <View style={[styles.side, { backgroundColor: borderBottomColor }]} />
      </View>
      {items?.map(renderItem)}
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    bottom: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  container: {
    alignItems: "center",
    alignSelf: "flex-start",
    flexDirection: "row",
    overflow: "hidden",
  },
  side: {
    flex: 1,
  },
  triangle: {
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderRightWidth: 0,
    borderStyle: "solid",
    height: 0,
    width: 0,
  },
});
