import React from 'react';
import {
  TextInputProps,
  PixelRatio,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import {AppText} from '../text/Text';
import {getFontFamily} from '../utils/text';
const {getFontScale} = PixelRatio;

interface Props extends TextInputProps {
  size?: number;
  error?: string;
  noValidation?: boolean;
  errorStyle?: TextStyle;
}

export const AppInput: React.FC<Props> = (props) => {
  const {size, style, error, noValidation, errorStyle, ...rest} = props;
  const fontFamily = style ? getFontFamily(style as TextStyle) : undefined;
  const fontSize = size ? getFontScale() * size : undefined;

  return (
    <>
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
      {!noValidation && (
        <AppText size={10} style={{...errorStyle, color: 'red'}}>
          {error}{' '}
        </AppText>
      )}
    </>
  );
};
