import {apiSlice} from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (data: any) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    socialLogin: builder.mutation({
      query: (data: any) => ({
        url: 'auth/social_login',
        method: 'POST',
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: (data: any) => ({
        url: 'auth/signup',
        method: 'POST',
        body: data,
      }),
    }),
    verifyOTP: builder.mutation({
      query: (data: any) => ({
        url: 'registrations/otp_verification',
        method: 'POST',
        body: data,
      }),
    }),
    resendOTP: builder.mutation({
      query: (data: any) => ({
        url: 'registrations/resend_otp',
        method: 'POST',
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data: any) => ({
        url: 'registrations/forgot_password',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data: any) => ({
        url: 'registrations/reset_password',
        method: 'POST',
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: (data: any) => ({
        url: 'auth/logout',
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
  useVerifyOTPMutation,
  useResendOTPMutation,
  useLogoutUserMutation,
  useSocialLoginMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
} = authApiSlice;
