import React from 'react';
import {FlexStyle, StyleSheet, TextStyle} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {AppText} from '../text/Text';
import {appColors} from '../Theme/colors';

interface Props {
  title: string;
  style?: FlexStyle;
  textStyle?: TextStyle;
  onPress?: () => {};
}

export const AppButton = (props: Props) => {
  const {style, textStyle, title, onPress} = props;

  return (
    <RectButton onPress={onPress} style={[styles.container, style]}>
      <AppText style={{...styles.text, ...textStyle}}>{title}</AppText>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: appColors.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
