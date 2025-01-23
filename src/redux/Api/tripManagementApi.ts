import baseApi from "../baseApi";

const tripManagementApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getMyTrips  : builder.query({
            query  :(trip)=>{
                // let url = `/trip/get-my-trip-order`
                
                // if(trip === 'canceled'){
                //     url += `?status=canceled`
                // }
                // if(trip === "completed"){
                //     url += `?status=completed`
                // }
                return {
                    url : `/trip/get-my-trip-order?status=${trip}`,
                    method  :'GET'
                }
            }
        }),
        addTrips : builder.mutation({
            query : (data)=>{
                return {
                    url : '/trip/add-trip',
                    method : 'POST',
                    body : data
                }
            }
        }),
        paymentTrip : builder.mutation({
            query : (data)=>{
                return {
                    url : '/payment/checkout',
                    method : 'POST',
                    body : data
                }
            }
        })
    })
})

export const { useGetMyTripsQuery , useAddTripsMutation , usePaymentTripMutation} = tripManagementApi;