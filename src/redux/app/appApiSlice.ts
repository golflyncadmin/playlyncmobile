import {apiSlice} from '../api/apiSlice';

export const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createRequest: builder.mutation({
      query: (data: any) => ({
        url: 'requests',
        method: 'post',
        body: data,
      }),
    }),
    getRequests: builder.query({
      query: () => ({
        url: 'requests',
        method: 'get',
      }),
    }),
    deleteRequest: builder.mutation({
      query: (reqId: string | number) => ({
        url: `requests/${reqId}`,
        method: 'delete',
      }),
    }),
    getRequestAlerts: builder.query({
      query: () => ({
        url: 'alerts',
        method: 'get',
      }),
    }),
    getProfile: builder.query({
      query: (id: string | number) => ({
        url: `profiles/${id}`,
        method: 'get',
      }),
    }),
    updateProfile: builder.mutation({
      query: ({id, data}: any) => ({
        url: `profiles/${id}`,
        method: 'patch',
        body: data,
      }),
    }),
    deleteAccount: builder.mutation({
      query: (id: string | number) => ({
        url: `profiles/${id}`,
        method: 'delete',
      }),
    }),
    submitCourseReq: builder.mutation({
      query: (data: any) => ({
        url: 'courses',
        method: 'post',
        body: data,
      }),
    }),
    reportIssue: builder.mutation({
      query: (data: any) => ({
        url: 'issues',
        method: 'post',
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateRequestMutation,
  useLazyGetRequestsQuery,
  useDeleteRequestMutation,
  useLazyGetRequestAlertsQuery,
  useLazyGetProfileQuery,
  useUpdateProfileMutation,
  useDeleteAccountMutation,
  useSubmitCourseReqMutation,
  useReportIssueMutation,
} = appApiSlice;
