import React from 'react';
import {View, StyleSheet, Platform, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {WP, HP, GLColors} from '../../../shared/exporter';
import LoaderKit from 'react-native-loader-kit';
interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({loading}) => {
  return (
    <Modal
      avoidKeyboard={true}
      isVisible={loading}
      hasBackdrop={false}
      style={styles.container}>
      <View style={styles.alert}>
        {/* commented for m1 release, will fix later */}
        {/* <LoaderKit
          style={styles.loaderStyle}
          name={'BallClipRotateMultiple'}
          color={GLColors.Green.Dark}
        /> */}
        <ActivityIndicator size={'large'} color={GLColors.Green.Dark} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 0,
    backgroundColor: GLColors.Standard.ModalBackdropcolor,
  },
  alert: {
    backgroundColor: GLColors.Standard.White,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WP('1'),
    height: WP('20'),
    width: WP('20'),
    ...Platform.select({
      ios: {
        shadowColor: 'red',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  loaderStyle: {
    width: 50,
    height: 50,
  },
});

export {Loader};
