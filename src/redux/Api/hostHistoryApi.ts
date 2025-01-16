import baseApi from "../baseApi";

const hostHistoryApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getMyCars   : builder.query({
            query : ()=>{
                return {
                    url : '/car/get-my-car',
                    method : 'GET'
                }
            }
        }),
        getCarDetails : builder.query({
            query : (id)=>{
                return { 
                    url : `/car/get-single-car-details?carId=${id}`,
                    method : 'GET'
                }
            }
        }),
        updateCarDetails :  builder.mutation({
            query : (data)=>{
                return {
                    url : "/car/update-all-car-data",
                    method : 'PATCH',
                    body : data
                }
            }
        })
    })
})

export const { useGetMyCarsQuery , useGetCarDetailsQuery , useUpdateCarDetailsMutation} =  hostHistoryApi;