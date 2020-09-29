import React from 'react';
import {StyleSheet, TextStyle, FlexStyle} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {AppText} from '../text/Text';
import {appColors} from '../Theme/colors';
import {AppIndicator} from '../indicator/Indeicator';
import {styles as cStyles} from '../styles/styles';

interface Props {
  title: string;
  processing?: boolean;
  style?: FlexStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

export const AppOutlinedButton = (props: Props) => {
  const {style, textStyle, title, onPress, processing} = props;

  return (
    <RectButton
      onPress={processing ? () => {} : onPress}
      style={[styles.container, style]}>
      {processing ? (
        <AppIndicator color="white" />
      ) : (
        <AppText style={{...styles.text, ...textStyle}}>{title}</AppText>
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
    ...cStyles.shadow,
  },
  text: {
    fontWeight: 'bold',
    color: appColors.primary,
  },
});
