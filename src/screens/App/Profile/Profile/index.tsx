import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  AppButton,
  AppHeader,
  DeleteModal,
  MainWrapper,
} from '../../../../components';
import styles from './styles';
import {svgIcon} from '../../../../assets/svg';
import {Routes} from '../../../../shared/exporter';
import {logOut} from '../../../../redux/auth/authSlice';

interface ProfileProps {
  navigation: any;
}

const Profile = ({navigation}: ProfileProps) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const deleteAccount = () => {
    setModalVisible(false);
    setTimeout(() => {
      handleNavigation();
    }, 500);
  };

  const handleLogout = () => {
    handleNavigation();
  };

  const handleNavigation = () => {
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
        handleClick={() => deleteAccount()}
        setModalVisible={() => setModalVisible(false)}
      />
    </MainWrapper>
  );
};

export default Profile;
