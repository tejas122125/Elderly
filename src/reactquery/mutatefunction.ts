import { fetchCoordinates } from '@/api/locationApi';
import { uploadImage } from '@/appwrite/api';
import { placetype } from '@/type';
import { useMutation, useQuery } from 'react-query';

export const uploadImageMutation = () => {
    return useMutation({
        mutationFn: (file: File) => {
            return uploadImage(file)
        }
    }

    )
}


// uploading elders detatils

export const useCreateUserAccountMutation = () =>{
    return useMutation({
        mutationFn : (user) =>{
            return createUserAccount(user)
        }
    }
    )
}


export const useFetchCoordinate = ({place,state,city}:placetype)=>{
    // return useQuery({queryKey:'fetchcoordinates',queryfn:()=>{fetchCoordinates(place,state,city)} });
    return useQuery({
        queryKey:"fetchcoordinates" ,
        queryFn: ()=>{fetchCoordinates(place,state,city)} ,
      });
}