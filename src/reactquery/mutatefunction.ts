import { fetchCoordinates } from '@/api/locationApi';
import { createElderUser, uploadImage } from '@/appwrite/api';
import { elderUser, placetype } from '@/type';
import { useMutation, useQuery } from 'react-query';

export const useUploadImage = () => {
    return useMutation({
        mutationFn: (file: File) => {
            return uploadImage(file)
        }
    }

    )
}


// uploading elders detatils

export const useCreateElder = () =>{
    return useMutation({
        mutationFn : (user:elderUser) =>{
            return createElderUser(user)
        }
    }
    )
}



// export const useCreateUserAccountMutation = () =>{
//     return useMutation({
//         mutationFn : (user) =>{
//             return createUserAccount(user)
//         }
//     }
//     )
// }


// export const useFetchCoordinate = ({place,state,city}:placetype)=>{
//     // return useQuery({queryKey:'fetchcoordinates',queryfn:()=>{fetchCoordinates(place,state,city)} });
//     return useQuery({
//         queryKey:"fetchcoordinates" ,
//         queryFn: ()=>{fetchCoordinates(place,state,city)} ,
//       });
// }