import { uploadImage } from '@/appwrite/api';
import { useMutation } from 'react-query';

const [mutate, { isLoading, isError, isSuccess }] = useMutation(uploadimage);

export const uploadImageMutation = () => {
    return useMutation({
        mutationFn: (file: File) => {
            return uploadImage(file)
        }
    }

    )
}