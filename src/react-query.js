import {useQuery} from '@tanstack/react-query'
import useFetch from './axios';
import { useGlobalContext } from './globalContext';



export const getPhoto = ()=>{
    const {query} = useGlobalContext()
    return useQuery({
        queryKey:[query],
        queryFn: async ()=>{
            const {data} = await useFetch(`/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${query}`)
            return data;
        }
    })
}