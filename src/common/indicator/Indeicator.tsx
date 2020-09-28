import React from 'react';
import {FlexStyle, ActivityIndicator, View} from 'react-native';
import {appColors} from '../Theme/colors';

interface Props {
  size?: number | 'small' | 'large';
  style?: FlexStyle;
  color?: string;
}

export const AppIndicator = (props: Props) => {
  const {size, color, ...rest} = props;

  return (
    <ActivityIndicator
      {...rest}
      size={size || 'small'}
      color={color || appColors.primary}
    />
  );
};
