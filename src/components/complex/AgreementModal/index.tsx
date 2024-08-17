import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import CheckBox from '@react-native-community/checkbox';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';
import {AppButton} from '../AppButton';

interface AgreementModalProps {
  isSelected: boolean;
  modalVisible: boolean;
  handleClick: () => void;
  setSelection: () => void;
  setModalVisible: () => void;
}

const AgreementModal: React.FC<AgreementModalProps> = ({
  isSelected,
  modalVisible,
  handleClick,
  setSelection,
  setModalVisible,
}) => (
  <Modal
    useNativeDriver
    isVisible={modalVisible}
    onBackdropPress={setModalVisible}
    style={styles.modalContainer}>
    <Text style={styles.headingStyle}>Terms and Conditions</Text>
    <View style={styles.agreementContainer}>
      <CheckBox
        boxType="square"
        value={isSelected}
        style={styles.checkboxStyle}
        onValueChange={setSelection}
        tintColor={isSelected ? GLColors.Blue.B2 : GLColors.Natural.N4}
        tintColors={{true: GLColors.Blue.B2, false: GLColors.Natural.N4}}
      />
      <Text style={styles.agreementTextStyle}>
        I agree to the{' '}
        <Text
          suppressHighlighting
          onPress={() => {}}
          style={styles.termsConditionStyle}>
          Terms
        </Text>{' '}
        and{' '}
        <Text
          suppressHighlighting
          onPress={() => {}}
          style={styles.termsConditionStyle}>
          Conditions
        </Text>
        .
      </Text>
    </View>
    <AppButton
      title={'I accept'}
      handleClick={handleClick}
      buttonStyle={styles.buttonStyle}
    />
  </Modal>
);

export {AgreementModal};

const styles = StyleSheet.create({
  modalContainer: {
    width: '90%',
    padding: WP('4'),
    bottom: WP('20'),
    position: 'absolute',
    borderRadius: WP('5'),
    backgroundColor: GLColors.Natural.White,
  },
  headingStyle: {
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  agreementContainer: {
    flexDirection: 'row',
    marginTop: WP('5'),
    alignItems: 'center',
    marginBottom: WP('4'),
  },
  checkboxStyle: {
    width: WP('6'),
    height: WP('6'),
    marginRight: WP('3'),
  },
  agreementTextStyle: {
    color: GLColors.Natural.N16,
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  termsConditionStyle: {
    color: GLColors.Primary.P6,
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  buttonStyle: {
    marginBottom: WP('1'),
  },
});
