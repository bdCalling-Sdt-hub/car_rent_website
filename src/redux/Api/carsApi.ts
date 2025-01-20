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
            query : ({ location, pickupDate, returnDate, pickupTime, returnTime , maxPrice , minPrice , selectedVehicle , selectedMake})=>{
                let url = `/car/get-all-car?fromDate=${pickupDate}&fromTime=${pickupTime}&toDate=${returnDate}&toTime=${returnTime}&minPrice=${minPrice}&maxPrice=${maxPrice}&destination=${location}`
                if(selectedVehicle){
                    url += `&vehicleType=${selectedVehicle}`
                }
                if(selectedMake){
                    url += `&make=${selectedMake}`
                }
                return {
                    url ,
                    method :  "GET"
                }
            }
        }),
        getMakeModelYear : builder.query({
            query : ()=>{
                return {
                    url : '/car/get-make-model-year',
                    method :'GET'
                }
            }
        })
    })
})

export const { useGetBrowseByDestinationQuery , useGetTopHostedCarQuery , useGetFilteredCarQuery , useGetMakeModelYearQuery } = allCars;