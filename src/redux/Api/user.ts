import { baseApi } from "../baseApi";

const useApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),

    otp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/activate-account",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useRegisterMutation, useOtpMutation } = useApi;
