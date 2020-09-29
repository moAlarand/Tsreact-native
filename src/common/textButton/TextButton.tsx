import React from 'react';
import {StyleSheet, TextStyle, FlexStyle} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {AppText} from '../text/Text';
import {appColors} from '../Theme/colors';
import {AppIndicator} from '../indicator/Indeicator';

interface Props {
  title: string;
  processing?: boolean;
  style?: FlexStyle;
  color?: string;
  textStyle?: TextStyle;
  onPress?: () => void;
}

export const AppTextButton = (props: Props) => {
  const {style, color, textStyle, title, onPress, processing} = props;

  return (
    <RectButton
      onPress={processing ? () => {} : onPress}
      style={[styles.container, style]}>
      {processing ? (
        <AppIndicator color="white" />
      ) : (
        <AppText
          style={{
            ...styles.text,
            ...textStyle,
            color: color || appColors.primary,
          }}>
          {title}
        </AppText>
      )}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});
