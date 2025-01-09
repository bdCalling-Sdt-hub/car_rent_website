import baseApi from "../baseApi";

const infoApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getTermsAndCondition :  builder.query({
            query : ()=>{
                return {
                    url : '/manage/get-terms-conditions',
                    method : 'GET'
                }
            }
        }),
        getPrivacyPolicy :  builder.query({
            query : ()=>{
                return {
                    url : '/manage/get-privacy-policy',
                    method : 'GET'
                }
            }
        }),
        postFeedback : builder.mutation({
            query : (data)=>{
                return {
                    url : '/feedback/post-feedback',
                    method : 'POST',
                    body : data
                }
            }
        }),
        getContactUs :  builder.query({
            query : ()=>{
                return {
                    url : '/manage/get-contact-us',
                    method : 'GET'
                }
            }
        }),
        getTipsAndTricks : builder.query({
            query : ()=>{
                return {
                    url : '/manage/get-tips-tricks',
                    method : 'GET'
                }
            }
        }),
        getTrustAndSafety : builder.query({
            query : ()=>{
                return {
                    url : '/manage/get-trust-safety',
                    method : 'GET'
                }
            }
        }),
        getHostingGuide : builder.query({
            query : ()=>{
                return {
                    url : '/manage/get-host-guidelines',
                    method : 'GET'
                }
            }
        }),
        getAllNotification : builder.query({
            query : ()=>{
                return {
                    url : '/notification/get-all-notification',
                    method : 'GET'
                }
            },
            providesTags : ['notification']
        }),
        updateNotification : builder.mutation({
            query : (id)=>{
                return {
                    url : '/notification/mark-as-read',
                    method :'PATCH',
                    body : id
                }
            },
            invalidatesTags :['notification']
        })
    })
})
export const {useGetTermsAndConditionQuery , useGetPrivacyPolicyQuery , usePostFeedbackMutation , useGetContactUsQuery , useGetTipsAndTricksQuery ,useGetTrustAndSafetyQuery , useGetHostingGuideQuery , useGetAllNotificationQuery , useUpdateNotificationMutation} =  infoApi; 