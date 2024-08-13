import React from 'react';
import {View, StyleSheet, Platform, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {WP, HP, GLColors} from '../../../shared/exporter';
interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({loading}) => {
  return (
    <View>
      <ActivityIndicator size={'large'} color={'red'} />
    </View>
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
  },
  alert: {
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
