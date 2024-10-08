import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {
  WP,
  isIOS,
  GLColors,
  scrHeight,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';

interface CoursesModalProps {
  data: any[];
  modalVisible: boolean;
  handleClick: (course: string) => void;
  setModalVisible: () => void;
}

const CoursesModal: React.FC<CoursesModalProps> = ({
  data,
  modalVisible,
  handleClick,
  setModalVisible,
}) => {
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.itemContainer}
        onPress={() => handleClick(item)}>
        {svgIcon.LocationIcon}
        <Text style={styles.itemTextStyle}>{item?.course_name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      useNativeDriver
      isVisible={modalVisible}
      onBackdropPress={setModalVisible}
      style={styles.modalContainer}>
      <Text style={styles.headingStyle}>Pick Course</Text>
      {data?.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item?.toString()}
        />
      ) : (
        <View style={styles.emptyView}>
          <Text style={styles.emptyTextStyle}>
            {'No results found. Please try another search'}
          </Text>
        </View>
      )}
    </Modal>
  );
};

export {CoursesModal};

const styles = StyleSheet.create({
  modalContainer: {
    bottom: 0,
    margin: 0,
    padding: 0,
    width: '100%',
    maxHeight: '72%',
    position: 'absolute',
    paddingTop: WP('4'),
    paddingHorizontal: WP('6'),
    borderTopEndRadius: WP('5'),
    borderTopStartRadius: WP('5'),
    backgroundColor: GLColors.Natural.White,
    paddingBottom: isIOS() ? WP('8') : WP('5'),
  },
  headingStyle: {
    marginTop: WP('2'),
    textAlign: 'center',
    marginBottom: WP('4'),
    marginHorizontal: WP('6'),
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_20,
    fontFamily: GLFontsFamily.Poppins_SemiBold,
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: WP('1'),
    marginVertical: WP('1'),
    paddingVertical: WP('1'),
    paddingHorizontal: WP('1.5'),
    backgroundColor: GLColors.Natural.N3,
  },
  itemTextStyle: {
    width: '93%',
    marginLeft: WP('1.5'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  emptyView: {
    alignItems: 'center',
    height: scrHeight / 4,
    justifyContent: 'center',
  },
  emptyTextStyle: {
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
});
