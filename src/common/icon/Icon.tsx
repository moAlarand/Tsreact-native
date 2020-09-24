import React from 'react';
import {PixelRatio, TextStyle} from 'react-native';
import {getIconType, getIconSizeScaleFix, IconType} from '../utils/icon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconProps} from 'react-native-vector-icons/Icon';

interface Props extends IconProps {
  type: IconType;
  color: string;
}

export const AppIcon: React.FC<Props> = (props) => {
  const {type, size, style, ...rest} = props;
  const VectorIcon = getIconType(type) as typeof AntDesign;
  const sizeScale = size
    ? size * getIconSizeScaleFix(type) * PixelRatio.getFontScale()
    : undefined;

  return <VectorIcon style={[{fontSize: sizeScale}, style]} {...rest} />;
};
