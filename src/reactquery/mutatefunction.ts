import { uploadImage } from '@/appwrite/api';
import { useMutation } from 'react-query';

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