import React, {useRef, useImperativeHandle, forwardRef} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  WP,
  isIOS,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';

interface PreviousReqSheetProps {
  data: any;
}

const PreviousReqSheet: React.FC<PreviousReqSheetProps> = forwardRef(
  ({data}, ref) => {
    const refScrollable = useRef(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        refScrollable.current.open();
      },
      close: () => {
        refScrollable.current.close();
      },
    }));

    const renderItem = ({item, index}: object | any) => (
      <View style={styles.itemContainer}>
        <View style={styles.rowContainer}>
          {svgIcon.MemberBlueIcon}
          <Text style={styles.memberCountStyle}>3</Text>
          {svgIcon.LocationIcon}
          <Text style={styles.infoTextStyle}>Riverside Golf Course</Text>
        </View>
        <View style={styles.dateTimeContainer}>
          <View style={styles.innerRow}>
            {svgIcon.CalendarWhiteIcon}
            <Text style={styles.smallInfoTextStyle}>Monday, Saturday</Text>
            {svgIcon.DateWhiteIcon}
            <Text style={styles.smallInfoTextStyle}>5/24/2024</Text>
          </View>
          <View style={styles.eveningRow}>
            {svgIcon.TimeWhiteIcon}
            <Text style={styles.smallInfoTextStyle}>Evening</Text>
          </View>
        </View>
      </View>
    );

    return (
      <RBSheet
        ref={refScrollable}
        draggable
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customStyles={{
          container: {
            height: WP('150'),
            borderTopLeftRadius: WP('3'),
            borderTopRightRadius: WP('3'),
          },
          draggableIcon: {
            width: 50,
            backgroundColor: GLColors.Natural.N4,
          },
        }}>
        <View style={styles.container}>
          <Text style={styles.previousTextStyle}>Previous requests</Text>
          <FlatList
            data={data}
            extraData={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item?.toString()}
          />
        </View>
      </RBSheet>
    );
  },
);

export {PreviousReqSheet};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: WP('4'),
  },
  previousTextStyle: {
    alignSelf: 'center',
    marginBottom: WP('5'),
    color: GLColors.Natural.N18,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: WP('2'),
    marginBottom: WP('2'),
    paddingVertical: WP('4'),
    paddingHorizontal: WP('3'),
    borderColor: GLColors.Blue.B2,
    backgroundColor: GLColors.Blue.B3,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberCountStyle: {
    marginLeft: 2,
    marginRight: WP('2'),
    top: isIOS() ? 0 : 2,
    color: GLColors.Blue.B2,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  infoTextStyle: {
    width: '82%',
    marginLeft: WP('1'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  smallInfoTextStyle: {
    maxWidth: WP('27'),
    marginLeft: WP('1'),
    color: GLColors.Natural.White,
    fontSize: GLFontSize.FONT_SIZE_11,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  dateTimeContainer: {
    width: '82%',
    marginTop: WP('2'),
    borderRadius: WP('1'),
    alignSelf: 'flex-start',
    paddingVertical: WP('1'),
    paddingHorizontal: WP('3'),
    backgroundColor: GLColors.Natural.N19,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eveningRow: {
    marginTop: WP('1'),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
