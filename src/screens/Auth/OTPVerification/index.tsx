import React, {useState, useEffect} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import {
  Cursor,
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, MainWrapper} from '../../../components';
import styles from './styles';
import {Routes, appIcons, isIOS} from '../../../shared/exporter';

interface OTPVerificationProps {
  route: any;
  navigation: any;
}

const CELL_COUNT = 6;

const OTPVerification = ({navigation, route}: OTPVerificationProps) => {
  const {email} = route?.params;
  const [timer, setTimer] = useState(30);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerifyOTP = () => {
    if (value === '') {
      // Toast.show('Please enter an OTP.', Toast.SHORT, ['UIAlertController']);
      Alert.alert('Verify OTP', 'Please enter an OTP.');
    } else if (value.length < 6) {
      Alert.alert('Verify OTP', 'Please enter complete OTP.');
      // Toast.show('Please enter complete OTP.', Toast.SHORT, [
      //   'UIAlertController',
      // ]);
    } else {
      verifyTheOTP();
    }
  };

  const verifyTheOTP = () => {
    navigation.replace(Routes.Login);
  };

  const resendOTP = () => {
    Alert.alert('Resent OTP', 'The OTP has been resent.');
  };

  return (
    <MainWrapper style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.scrollViewStyle,
          !isIOS() && styles.heightStyle,
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContent}>
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={appIcons.appLogo}
              style={styles.logoStyle}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.headingStyle}>Almost There</Text>
            <Text style={styles.infoTextStyle}>
              Please enter the 6-digit code sent to your phone number{' '}
              <Text style={styles.commonTextStyle}>{email}</Text> for
              verification
            </Text>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              rootStyle={styles.codeFieldRoot}
              autoComplete={isIOS() ? 'one-time-code' : 'sms-otp'}
              renderCell={({index, symbol, isFocused}) => (
                <View style={styles.cellStyle}>
                  <Text
                    key={index}
                    style={styles.cellTextStyle}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
            <AppButton
              title={'Verify'}
              disabled={value?.length !== 6}
              handleClick={() => handleVerifyOTP()}
            />
            <Text style={styles.codeTextStyle}>
              Didn’t receive any code?{' '}
              <Text
                suppressHighlighting
                disabled={timer !== 0}
                style={styles.commonTextStyle}
                onPress={() => resendOTP()}>
                Resend Again
              </Text>
            </Text>
            <Text style={styles.newCodeStyle}>
              Request new code {timer !== 0 ? `in 00:${timer}` : ''}
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </MainWrapper>
  );
};

export default OTPVerification;
