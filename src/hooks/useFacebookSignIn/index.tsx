import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {showAlert} from '../../shared/exporter';

export const useFacebookSignIn = (
  setFacebookToken: (token: string | null) => void,
) => {
  const signInWithFacebook = async () => {
    try {
      // Attempt login with Facebook
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        // showAlert('Login cancelled', '');
      } else {
        // Get the access token
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          const accessToken = data.accessToken.toString();
          setFacebookToken(accessToken); // Store the token using the setter passed
        }
      }
    } catch (error) {
      console.error('Facebook login error:', error);
      showAlert('Login failed', 'An error occurred during login.');
    }
  };

  return {signInWithFacebook};
};
