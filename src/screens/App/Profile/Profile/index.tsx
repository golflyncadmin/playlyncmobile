import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LoginManager} from 'react-native-fbsdk-next';
import CookieManager from '@react-native-cookies/cookies';
import {
  AppButton,
  AppHeader,
  AppLoader,
  DeleteModal,
  MainWrapper,
} from '../../../../components';
import styles from './styles';
import {svgIcon} from '../../../../assets/svg';
import {
  Routes,
  showAlert,
  GENERIC_ERROR_TEXT,
} from '../../../../shared/exporter';
import {
  logOut,
  setLoginUser,
  setAccessToken,
} from '../../../../redux/auth/authSlice';
import {useDeleteAccountMutation} from '../../../../redux/app/appApiSlice';

interface ProfileProps {
  navigation: any;
}

const Profile = ({navigation}: ProfileProps) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const {loginUser} = useSelector((state: object | any) => state?.auth);

  const [deleteAccount, {isLoading}] = useDeleteAccountMutation();

  const handleDeleteAccount = async () => {
    setModalVisible(false);
    try {
      const resp = await deleteAccount(loginUser?.id);
      if (resp?.data) {
        showAlert('Delete Account', resp?.data?.message, () => {
          setTimeout(() => {
            handleLogout();
          }, 500);
        });
      } else {
        showAlert('Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  const handleLogout = async () => {
    LoginManager.logOut(); // FB logout
    await CookieManager.clearAll(true); // Ins logout
    dispatch(setLoginUser(null)); // Clear session
    dispatch(setAccessToken(null)); // Clear session
    dispatch(logOut());
    navigation.replace(Routes.AuthStack);
  };

  const DisplayOption = ({title, icon, screen, isParams = false}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.rowContainer}
      onPress={() => {
        if (isParams) {
          navigation.navigate(screen, {privacy: title === 'Privacy Policy'});
        } else {
          navigation.navigate(screen);
        }
      }}>
      <View style={styles.innerRow}>
        {icon}
        <Text style={styles.titleTextStyle}>{title}</Text>
      </View>
      {svgIcon.RightIcon}
    </TouchableOpacity>
  );

  return (
    <MainWrapper style={styles.container}>
      <AppHeader title="Profile" leftIcon={false} />
      <View style={styles.innerContainer}>
        <View style={styles.spacerView} />
        <Text style={styles.headingTextStyle}>Profile</Text>
        <DisplayOption
          title="Personal Data"
          icon={svgIcon.PersonIcon}
          screen={Routes.PersonalInfo}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.headingTextStyle}>Legal</Text>
        <DisplayOption
          isParams={true}
          title="Privacy Policy"
          icon={svgIcon.LockIcon}
          screen={Routes.PolicyAndTerms}
        />
        <DisplayOption
          isParams={true}
          title="Terms of Services"
          icon={svgIcon.TermsIcon}
          screen={Routes.PolicyAndTerms}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.headingTextStyle}>Support</Text>
        <DisplayOption
          title="Suggest a Course"
          icon={svgIcon.CourseIcon}
          screen={Routes.SuggestCourse}
        />
        <DisplayOption
          title="Report an issue"
          icon={svgIcon.HelpIcon}
          screen={Routes.ReportIssue}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={'Log out'} handleClick={() => handleLogout()} />
        <AppButton
          title={'Delete profile'}
          textStyle={styles.textStyle}
          buttonStyle={styles.buttonStyle}
          handleClick={() => setModalVisible(true)}
        />
      </View>
      <DeleteModal
        modalVisible={modalVisible}
        handleClick={() => handleDeleteAccount()}
        setModalVisible={() => setModalVisible(false)}
        heading="Are you sure you want to delete your profile?"
      />
      {isLoading && <AppLoader />}
    </MainWrapper>
  );
};

export default Profile;
