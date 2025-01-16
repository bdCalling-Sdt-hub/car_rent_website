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
            },
            providesTags : ['carDetails']
        }),
        updateCarDetails :  builder.mutation({
            query : (data)=>{
                return {
                    url : "/car/update-all-car-data",
                    method : 'PATCH',
                    body : data
                }
            },
            invalidatesTags : ["carDetails"]
        }),
        getHostIncome :  builder.query({
            query : ()=>{
                return {
                    url : '/payment/host-income-details',
                    method : 'GET'
                }
            }
        }),
        getHostRevenueChart : builder.query({
            query : (year)=>{
                return {
                    url : `/payment/host-revenue-chart?year=${year}`,
                    method : 'GET'
                }
            }
        })
    })
})

export const { useGetMyCarsQuery , useGetCarDetailsQuery , useUpdateCarDetailsMutation , useGetHostIncomeQuery , useGetHostRevenueChartQuery} =  hostHistoryApi;