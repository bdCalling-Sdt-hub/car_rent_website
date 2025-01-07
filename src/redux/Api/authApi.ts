import baseApi from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (value) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: value,
        };
      },
    }),
    activeAccountOtp : builder.mutation({
      query : (data)=>{
        return {
          url :'/auth/activate-account',
          method : 'POST',
          body : data
        }
      }
    }),
    getProfile : builder.query({
      query : ()=>{
        return {
          url : '/user/profile',
          method : 'GET'
        }
      }
    }),
    changePassword :  builder.mutation({
      query : (data)=>{
        return {
          url : '/auth/change-password',
          method : 'PATCH',
          body : data
        }
      }
    })

  }),
});
export const { useRegisterUserMutation  , useActiveAccountOtpMutation , useGetProfileQuery , useChangePasswordMutation} = authApi
