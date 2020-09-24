import React from 'react';
import {PixelRatio} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {aspectRatio} from '../utils/responsiveDimmensions';

const {getPixelSizeForLayoutSize} = PixelRatio;

export interface Props extends FastImageProps {
  height: number;
  width?: number;
}

export const AppImage: React.FC<Props> = (props) => {
  const {height, style, ...rest} = props;
  const width = props.width || height * aspectRatio;

  return (
    <FastImage
      style={[
        {
          width: getPixelSizeForLayoutSize(width),
          height: getPixelSizeForLayoutSize(height),
        },
        style,
      ]}
      {...rest}
    />
  );
};
