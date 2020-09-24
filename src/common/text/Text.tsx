import React, {ReactChildren, ReactElement, ReactNode} from 'react';
import {PixelRatio, FlexStyle, Text, TextStyle, TextProps} from 'react-native';
import {getFontFamily} from '../utils/text';

const {getFontScale} = PixelRatio;

interface Props extends TextProps {
  size?: number;
  style?: TextStyle;
  children: ReactNode;
}

export const AppText: React.FC<Props> = (props) => {
  const {children, size, style, ...rest} = props;
  const fontFamily = style ? getFontFamily(style as TextStyle) : undefined;
  const fontSize = size ? getFontScale() * size : undefined;

  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize,
        },
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};
