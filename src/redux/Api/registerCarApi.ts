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
        }),
        getCarYear : builder.query({
            query : (year)=>{
                return {
                    url : `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=${year}`,
                    method : 'GET'
                }
            }
        }),
        addMakeModelYear : builder.mutation({
            query : (data)=>{
                return {
                    url : '/car/update-make-model-year',
                    method : 'PATCH',
                    body : data 
                }
            }
        }),
        addCarTransmission : builder.mutation({
            query : (data)=>{
                return {
                    url : '/car/update-transmission',
                    method : 'PATCH',
                    body : data
                }
            }
        }),
        addHostLicense : builder.mutation({
            query : (data)=>{
                return {
                    url : '/car/update-host-license',
                    method : 'PATCH',
                    body : data
                }
            }
        }),
        addCarDetails : builder.mutation({
            query : (data)=>{
                return {
                    url : '/car/update-details',
                    method :"PATCH",
                    body : data,
                }
            }
        }),
        addCarPhotos : builder.mutation({
            query : (formData)=>{
                return{
                    url : '/car/update-photos',
                    method : 'PATCH',
                    body : formData
                }
            }
        }),
        sendCarRequest :  builder.mutation({
            query : (id)=>{
                return {
                    url : `/car/send-add-car-req?carId=${id}`,
                    method : 'PATCH'
                }
            }
        })
    })
})
export const { useGetCityQuery , useAddLicensePlateMutation , useGetCarYearQuery , useAddMakeModelYearMutation , useAddCarTransmissionMutation , useAddHostLicenseMutation , useAddCarDetailsMutation , useAddCarPhotosMutation , useSendCarRequestMutation} = registerCarApi