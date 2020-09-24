import React from 'react';
import {TextInputProps, PixelRatio, TextInput, TextStyle} from 'react-native';
import {getFontFamily} from '../utils/text';
const {getFontScale} = PixelRatio;

interface Props extends TextInputProps {
  size?: number;
}

export const AppInput: React.FC<Props> = (props) => {
  const {size, style, ...rest} = props;
  const fontFamily = style ? getFontFamily(style as TextStyle) : undefined;
  const fontSize = size ? getFontScale() * size : undefined;

  return (
    <TextInput
      style={[
        {
          fontFamily,
          fontSize,
        },
        style,
      ]}
      {...rest}
    />
  );
};
