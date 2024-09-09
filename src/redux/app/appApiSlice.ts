import {apiSlice} from '../api/apiSlice';

export const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createRequest: builder.mutation({
      query: data => ({
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
      query: reqId => ({
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
  }),
  overrideExisting: true,
});

export const {
  useCreateRequestMutation,
  useLazyGetRequestsQuery,
  useDeleteRequestMutation,
  useLazyGetRequestAlertsQuery,
} = appApiSlice;
