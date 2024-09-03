import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {
  Cursor,
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  useVerifyOTPMutation,
  useResendOTPMutation,
} from '../../../redux/auth/authApiSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppLoader, MainWrapper} from '../../../components';
import styles from './styles';
import {
  isIOS,
  Routes,
  appIcons,
  showAlert,
  GENERIC_ERROR_TEXT,
} from '../../../shared/exporter';

interface OTPVerificationProps {
  route: any;
  navigation: any;
}

const CELL_COUNT = 6;

const OTPVerification = ({navigation, route}: OTPVerificationProps) => {
  const {email, phone} = route?.params;
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(90);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [resendOTP, {isLoading}] = useResendOTPMutation();
  const [verifyOTP, {isLoading: loading}] = useVerifyOTPMutation();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerifyOTP = () => {
    if (!value) {
      return showAlert('Verify OTP', 'Please enter an OTP.');
    }
    if (value.length < 6) {
      return showAlert('Verify OTP', 'Please enter complete OTP.');
    }
    verifyTheOTP();
  };

  const verifyTheOTP = async () => {
    try {
      const data = email
        ? {
            email: email,
            email_otp: value,
          }
        : {
            phone_otp: value,
            phone_number: phone,
          };

      const resp = await verifyOTP(data);
      if (resp?.data) {
        navigation.navigate(Routes.ResetPassword, {email: email, phone: phone});
      } else {
        showAlert('Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', error?.message);
    }
  };

  const handleResendOTP = async () => {
    try {
      const data = email ? {email: email} : {phone_number: phone};

      const resp = await resendOTP(data);
      if (resp?.data) {
        setTimer(90);
        showAlert('Resent OTP', 'The OTP has been resent.');
      } else {
        showAlert('Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
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
              Please enter the 6-digit code sent to your{' '}
              {email ? 'email ' : 'phone number '}
              <Text style={styles.commonTextStyle}>
                {email ? email : phone}
              </Text>{' '}
              for verification.
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
              {timer === 0 && (
                <Text
                  suppressHighlighting
                  style={styles.commonTextStyle}
                  onPress={() => handleResendOTP()}>
                  Resend Again
                </Text>
              )}
            </Text>
            <Text style={styles.newCodeStyle}>
              Request new code {timer !== 0 ? `in 00:${timer}` : ''}
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {(loading || isLoading) && <AppLoader />}
    </MainWrapper>
  );
};

export default OTPVerification;
