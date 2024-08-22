import {apiSlice} from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    socialLogin: builder.mutation({
      query: data => ({
        url: '',
        method: 'POST',
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: data => ({
        url: 'auth/signup',
        method: 'POST',
        body: data,
      }),
    }),
    verifyOTP: builder.mutation({
      query: data => ({
        url: 'registrations/otp_verification',
        method: 'POST',
        body: data,
      }),
    }),
    resendOTP: builder.mutation({
      query: data => ({
        url: 'registrations/resend_otp',
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
    logoutUser: builder.mutation({
      query: data => ({
        url: '',
        method: 'POST',
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useLogoutUserMutation,
  useSocialLoginMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
} = authApiSlice;
