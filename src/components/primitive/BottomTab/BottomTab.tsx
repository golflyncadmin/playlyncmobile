import React from 'react';
import {
  View,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {svgIcon} from '../../../assets/svg';
import {GLColors, WP, isIOS} from '../../../shared/exporter';

type BottomTabProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

type Route = {
  key: string;
  name: string;
};

const TabIcon = ({index, isFocused}: {index: number; isFocused: boolean}) => {
  switch (index) {
    case 0:
      return isFocused ? svgIcon.RequestsIcon : svgIcon.RequestsIcon1;
    case 1:
      return isFocused ? svgIcon.AddRequestIcon : svgIcon.AddRequestIcon1;
    case 2:
      return isFocused ? svgIcon.AlertsIcon : svgIcon.AlertsIcon1;
    case 3:
      return isFocused ? svgIcon.ProfileIcon : svgIcon.ProfileIcon1;
    default:
      return null;
  }
};

const renderItem = (
  {item, index}: ListRenderItemInfo<Route>,
  state: any,
  navigation: any,
) => {
  const isFocused = state.index === index;
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: item.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({name: item.name, merge: true});
    }
  };

  return (
    <View style={styles.tabContainer} key={item.key}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.tabContainer}>
        <TabIcon index={index} isFocused={isFocused} />
      </TouchableOpacity>
    </View>
  );
};

export const BottomTab: React.FC<BottomTabProps> = ({state, navigation}) => {
  return (
    <View style={styles.tabsContainer}>
      <FlatList
        numColumns={4}
        data={state?.routes}
        scrollEnabled={false}
        keyExtractor={item => item.key}
        renderItem={props => renderItem(props, state, navigation)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    height: isIOS() ? WP('20') : WP('17'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: GLColors.Natural.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: GLColors.Natural.White,
  },
  tabContainer: {
    width: '25%',
    height: WP('20'),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: isIOS() ? WP('1') : WP('1.6'),
    paddingBottom: Platform.OS === 'android' ? 0 : 5,
  },
});
