import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';
import {AppButton} from '../AppButton';

interface DeleteModalProps {
  heading: string;
  modalVisible: boolean;
  handleClick: () => void;
  setModalVisible: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  heading,
  modalVisible,
  handleClick,
  setModalVisible,
}) => (
  <Modal
    useNativeDriver
    isVisible={modalVisible}
    onBackdropPress={setModalVisible}
    style={styles.modalContainer}>
    <Text style={styles.headingStyle}>{heading}</Text>
    <View style={styles.buttonsRow}>
      <AppButton
        title={'No'}
        isEmpty={false}
        textStyle={styles.noTextStyle}
        handleClick={setModalVisible}
        buttonStyle={styles.noButtonStyle}
      />
      <AppButton
        title={'Yes'}
        isEmpty={false}
        handleClick={handleClick}
        textStyle={styles.yesTextStyle}
        buttonStyle={styles.yesButtonStyle}
      />
    </View>
  </Modal>
);

export {DeleteModal};

const styles = StyleSheet.create({
  modalContainer: {
    width: '90%',
    top: WP('40'),
    position: 'absolute',
    borderRadius: WP('5'),
    paddingVertical: WP('8'),
    paddingHorizontal: WP('6'),
    backgroundColor: GLColors.Natural.White,
  },
  headingStyle: {
    marginTop: WP('2'),
    textAlign: 'center',
    marginBottom: WP('10'),
    marginHorizontal: WP('6'),
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_20,
    fontFamily: GLFontsFamily.Poppins_SemiBold,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noButtonStyle: {
    width: '48%',
    borderWidth: 1,
    paddingHorizontal: 0,
    marginBottom: WP('2'),
    borderColor: GLColors.Natural.N3,
    backgroundColor: GLColors.Natural.White,
  },
  yesButtonStyle: {
    width: '48%',
    borderWidth: 1,
    paddingHorizontal: 0,
    marginBottom: WP('2'),
  },
  noTextStyle: {
    width: WP('37'),
    textAlign: 'center',
    color: GLColors.Natural.Black,
  },
  yesTextStyle: {
    width: WP('37'),
    textAlign: 'center',
  },
});
