import React from 'react';
import {FlexStyle, PixelRatio, StyleSheet, TextStyle} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {AppIcon} from '../icon/Icon';
import {IconType} from '../utils/icon';

interface Props {
  type: IconType;
  name: string;
  size: number;
  iconStyle?: FlexStyle;
  style?: FlexStyle;
  color: string;
  onPress?: () => void;
}

export const AppIconButton: React.FC<Props> = (props) => {
  const {style, onPress, iconStyle, ...rest} = props;

  return (
    <BorderlessButton onPress={onPress} style={[styles.container, style]}>
      <AppIcon {...rest} style={iconStyle} />
    </BorderlessButton>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
