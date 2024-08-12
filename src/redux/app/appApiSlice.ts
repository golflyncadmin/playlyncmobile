import {apiSlice} from '../api/apiSlice';

export const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createRequest: builder.mutation({
      query: data => ({
        url: 'creators/tours',
        method: 'post',
        body: data,
      }),
    }),
    getMyRequests: builder.query({
      query: data => ({
        url: 'creators/tours/my_tours',
        method: 'post',
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useCreateRequestMutation, useGetMyRequestsQuery} = appApiSlice;
