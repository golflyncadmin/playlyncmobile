import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
  ListRenderItemInfo,
} from 'react-native';
import React, {useState} from 'react';
import {svgIcon} from '../../../assets/svg';
import {GLColors} from '../../../shared/exporter';
type BottomTabProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

type Route = {
  key: string;
  name: string;
};

export const BottomTab: React.FC<BottomTabProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        display: visible ? 'flex' : 'none',
      }}>
      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          numColumns={4}
          data={state?.routes}
          renderItem={({item, index}: ListRenderItemInfo<Route>) => {
            const {options} = descriptors[item.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : item.name;
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
              <View style={styles.tabContainer}>
                <TouchableOpacity
                  onPress={onPress}
                  style={[styles.tabContainer]}>
                  {index === 0
                    ? isFocused
                      ? svgIcon.ActiveHome
                      : svgIcon.HomeInactive
                    : index === 1
                    ? isFocused
                      ? item.name === 'WishlistScreen'
                        ? svgIcon.ActiveHeart
                        : svgIcon.ReviewActive
                      : item.name === 'WishlistScreen'
                      ? svgIcon.InactiveHeart
                      : svgIcon.ReviewInActive
                    : index === 2
                    ? isFocused
                      ? svgIcon.NotificationActive
                      : svgIcon.NotificationInActive
                    : isFocused
                    ? svgIcon.ProfileActive
                    : svgIcon.Profile}
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: GLColors.Foundation.SnowWhite,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: GLColors.Standard.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  firstImageStyle: (isFocused: boolean) => ({
    height: 20,
    width: 23,
    resizeMode: 'contain',
    tintColor: isFocused ? 'red' : 'pink',
  }),
  profileImageStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  tabImageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  tabContainer: {
    paddingBottom: Platform.OS === 'android' ? 0 : 5,
    width: '25%',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'center',
  },
  tabName: (isFocused: boolean) => ({
    fontSize: 11,
    color: isFocused ? 'red' : 'pink',
    width: '400%',
    textAlign: 'center',
  }),
});
