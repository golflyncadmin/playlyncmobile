import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LoginManager} from 'react-native-fbsdk-next';
import CookieManager from '@react-native-cookies/cookies';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
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
import {useLogoutUserMutation} from '../../../../redux/auth/authApiSlice';
import {useDeleteAccountMutation} from '../../../../redux/app/appApiSlice';

interface ProfileProps {
  navigation: any;
}

const Profile = ({navigation}: ProfileProps) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const {loginUser, userFCMToken} = useSelector(
    (state: object | any) => state?.auth,
  );

  const [deleteAccount, {isLoading}] = useDeleteAccountMutation();
  const [logoutUser, {isLoading: logoutLoading}] = useLogoutUserMutation();

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
    try {
      const data = {
        email: loginUser?.email,
        fcm_token: userFCMToken,
      };
      const resp = await logoutUser(data);
      if (resp?.data) {
        LoginManager.logOut(); // FB logout
        await CookieManager.clearAll(true); // Ins logout
        await GoogleSignin.signOut(); // Google logout
        // Clear session
        dispatch(setLoginUser(null));
        dispatch(setAccessToken(null));
        dispatch(logOut());
        navigation.replace(Routes.AuthStack);
      } else {
        showAlert('Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  const DisplayOption = ({title, icon, screen, isParams = false}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.rowContainer}
      onPress={() => {
        if (isParams) {
          navigation.navigate(screen, {isProfile: true});
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
          screen={Routes.PrivacyPolicy}
        />
        <DisplayOption
          isParams={true}
          title="Terms of Services"
          icon={svgIcon.TermsIcon}
          screen={Routes.TermsAndConditions}
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
      {(isLoading || logoutLoading) && <AppLoader />}
    </MainWrapper>
  );
};

export default Profile;
