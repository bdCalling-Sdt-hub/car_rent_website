import baseApi from "../baseApi";

const allCars = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getBrowseByDestination : builder.query({
            query : ({fromDate , fromTime , toDate , toTime , destination})=>{
                return {
                    url : `/car/get-all-car?fromDate=${fromDate}&fromTime=${fromTime}&toDate=${toDate}&toTime=${toTime}&destination=${destination}` ,
                    method : 'GET'
                }
            }
        }),
        getTopHostedCar : builder.query({
            query : (destination)=>{
                return {
                    url : `/car/top-hosts-in-destination?destination=${destination}`,
                    method : 'GET'
                }
            }
        }),
        getFilteredCar :  builder.query({
            query : ({ location, pickupDate, returnDate, pickupTime, returnTime })=>{
                return {
                    url : `/car/get-all-car?fromDate=${pickupDate}&fromTime=${pickupTime}&toDate=${returnDate}&toTime=${returnTime}&destination=${location}`,
                    method :  "GET"
                }
            }
        })
    })
})

export const { useGetBrowseByDestinationQuery , useGetTopHostedCarQuery , useGetFilteredCarQuery } = allCars;