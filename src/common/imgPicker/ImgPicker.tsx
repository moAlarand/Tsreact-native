import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {AppImage, Props as ImgProps} from '../image/Image';
import ImagePicker, {ImagePickerOptions} from 'react-native-image-picker';
import {Source} from 'react-native-fast-image';
import useEffect from 'react';

interface Props extends ImgProps {
  title: string;
  onPick?: (uri: string) => void;
}

export const AppImgPicker: React.FC<Props> = (props) => {
  const {title, source, onPick, ...rest} = props;
  const [img, setImg] = useState<Source | number>(source);
  const options: ImagePickerOptions = {
    title,
  };

  const _showPicker = useCallback(() => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setImg(source);
        if (onPick) onPick(response.uri);
      }
    });
  }, [setImg, onPick]);

  return (
    <RectButton onPress={_showPicker}>
      <AppImage {...rest} source={img} />
    </RectButton>
  );
};
