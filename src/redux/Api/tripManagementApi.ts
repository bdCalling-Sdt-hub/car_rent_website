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
        })
    })
})

export const { useGetMyTripsQuery } = tripManagementApi;