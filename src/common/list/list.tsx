import {types} from '@babel/core';
import React, {ReactNode} from 'react';
import {
  PixelRatio,
  FlexStyle,
  FlatList,
  Platform,
  FlatListProps,
} from 'react-native';
import FastImage, {ResizeMode} from 'react-native-fast-image';
import {aspectRatio} from '../utils/responsiveDimmensions';

const {getPixelSizeForLayoutSize} = PixelRatio;

interface Props<T> extends FlatListProps<T> {}

export const AppList = function <T>(props: Props<T>) {
  const {...rest} = props;

  return <FlatList keyExtractor={(_, index) => `${index}`} {...rest} />;
};
