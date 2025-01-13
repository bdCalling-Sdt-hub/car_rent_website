import baseApi from "../baseApi";

const registerCarApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getCity : builder.query({
            query : ()=>{
                return {
                    url : '/dashboard/get-all-destination',
                    method : 'GET'
                }
            }
        }),
        // getLocation : builder.query({
        //     query : (location)=>{
        //         return {
        //             url : `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=dhaka&key=AIzaSyCwUpKs-yq_9gvqjQEVYLXlBPV7qbw0xJQ`,
        //             method :'GET'
        //         }
        //     }
        // }),
        addLicensePlate : builder.mutation({
            query  : (data)=>{
                return {
                    url : '/car/update-car-license',
                    method : 'PATCH',
                    body : data
                }
            }
        })
    })
})
export const { useGetCityQuery , useAddLicensePlateMutation } = registerCarApi