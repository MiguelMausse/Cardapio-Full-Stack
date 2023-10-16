import axios, {AxiosPromise} from "axios";
import {useQuery} from "@tanstack/react-query";
import { API_ENDPOINT } from "../Data/Cliente/endpoints"
import { FoodData } from "../interface/FoodDate"

const fetchData = async (): AxiosPromise<FoodData[]> => {

    const response = await axios.get(API_ENDPOINT.GET_FOOD)
    return response;
}
export function useFoodData(){

    const query = useQuery(
        {
            queryFn: fetchData,
            queryKey: ['food-data'],
            retry: 2
            
        })

        return {
            ...query,
            data: query.data?.data
        }

        
      
    }