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
    })
})
export const {useGetTermsAndConditionQuery , useGetPrivacyPolicyQuery , usePostFeedbackMutation , useGetContactUsQuery , useGetTipsAndTricksQuery ,useGetTrustAndSafetyQuery , useGetHostingGuideQuery} =  infoApi; 