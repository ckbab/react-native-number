# react-native-number

React Native component for render beautiful numbers.

## Installation

```
yarn add @ckbab/react-native-number
```

This package depends on `react-native-svg` so you need to install it as well.

## Usage

```js
import Number from "@ckbab/react-native-number";

<Number value={243} />

<Number color="#009900" size={48} type="separated" value={243} />
```

## Properties

| Name    | Type                  | Default value |
| ------- | --------------------- | ------------- |
| `color` | `string`              | `#cc00ff`     |
| `size`  | `number`              | 32            |
| `style` | `StyleSheet`          | -             |
| `type`  | `merged`, `seperated` | `separated`   |
| `value` | `number`              | -             |
