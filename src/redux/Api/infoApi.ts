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
        })
    })
})
export const {useGetTermsAndConditionQuery} =  infoApi; 