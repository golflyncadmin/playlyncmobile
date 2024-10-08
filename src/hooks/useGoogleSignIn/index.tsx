import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {showAlert} from '../../shared/exporter';

export const useGoogleSignIn = (
  setGoogleToken: (token: string | null) => void,
) => {
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: any = await GoogleSignin.signIn();

      const idToken = userInfo?.data?.idToken;

      setGoogleToken(idToken);
    } catch (err: any) {
      if (err.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(
          'Google Sign-In Cancelled',
          'User cancelled the login flow',
        );
      } else if (err.code === statusCodes.IN_PROGRESS) {
        console.log('Google Sign-In in Progress', 'Login already in progress');
      } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Sign-In Failed', 'Play services not available');
      } else {
        console.log('Google Sign-In Error =>', err?.message);
        showAlert('Google Sign-In Failed', 'An error occurred during sign-in');
      }
    }
  };

  return {signInWithGoogle};
};
