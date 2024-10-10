import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';

interface AdminResponseModalProps {
  message: string;
  modalVisible: boolean;
  setModalVisible: () => void;
}

const AdminResponseModal: React.FC<AdminResponseModalProps> = ({
  message,
  modalVisible,
  setModalVisible,
}) => (
  <Modal
    useNativeDriver
    isVisible={modalVisible}
    onBackdropPress={setModalVisible}
    style={styles.modalStyle}>
    <View style={styles.contentContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={setModalVisible}
        style={styles.iconContainer}>
        {svgIcon.CrossIcon}
      </TouchableOpacity>
      <Text style={styles.headingStyle}>Admin Response</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.messageTextStyle}>{message || 'N/A'}</Text>
      </ScrollView>
    </View>
  </Modal>
);

export {AdminResponseModal};

const styles = StyleSheet.create({
  modalStyle: {
    width: '100%',
    borderRadius: WP('5'),
    justifyContent: 'center',
  },
  contentContainer: {
    width: '90%',
    maxHeight: '85%',
    paddingTop: WP('5'),
    borderRadius: WP('5'),
    justifyContent: 'center',
    paddingHorizontal: WP('6'),
    backgroundColor: GLColors.Natural.White,
  },
  iconContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  headingStyle: {
    textAlign: 'center',
    marginBottom: WP('1'),
    marginHorizontal: WP('6'),
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_20,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  messageTextStyle: {
    lineHeight: 22,
    marginTop: WP('2'),
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
});
