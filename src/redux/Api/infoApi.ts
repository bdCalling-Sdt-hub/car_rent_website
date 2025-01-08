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
        })
    })
})
export const {useGetTermsAndConditionQuery , useGetPrivacyPolicyQuery , usePostFeedbackMutation , useGetContactUsQuery} =  infoApi; 