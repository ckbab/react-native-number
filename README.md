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

<Number borderColor="#003300" color="#009900" size={48} type="separated" value={243} />
```

You can also define default icon props using the `NumberProvider`:

```js
import { NumberProvider } from "@ckbab/react-native-number";

<NumberProvider borderColor="#665100" color="#ffcc00" size={48} type="merged">
  /* Rest of your code */
</NumberProvider>;
```

As shown above you can pass `borderColor`, `color`, `size` and `type` as default props.

## Properties

| Name          | Type                  | Default value |
| ------------- | --------------------- | ------------- |
| `color`       | `string`              | `#cc00ff`     |
| `borderColor` | `string`              | `#000`        |
| `size`        | `number`              | `32`          |
| `style`       | `StyleSheet`          | `{}`          |
| `type`        | `merged`, `seperated` | `separated`   |
| `value`       | `number`              | `null`        |
