import {apiSlice} from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: 'session',
        method: 'POST',
        body: data,
      }),
    }),
    googleLogin: builder.mutation({
      query: data => ({
        url: 'social_logins/google_login',
        method: 'POST',
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: data => ({
        url: 'registrations/forgot_password',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: data => ({
        url: 'registrations/reset_password',
        method: 'POST',
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: data => ({
        url: 'registrations',
        method: 'POST',
        body: data,
      }),
    }),
    verifyOtpEmail: builder.mutation({
      query: data => ({
        url: 'registrations/otp_verification_email',
        method: 'POST',
        body: data,
      }),
    }),
    refreshToken: builder.mutation({
      query: data => ({
        url: '/auth/refresh-tokens',
        method: 'POST',
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: data => ({
        url: '/auth/logout',
        method: 'POST',
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useSignUpMutation,
  useRefreshTokenMutation,
  useLogoutUserMutation,
  useGoogleLoginMutation,
  useVerifyOtpEmailMutation,
  useResetPasswordMutation,
} = authApiSlice;
