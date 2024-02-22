// storing the image files in appwrite
// import 'dotenv/config'
import { ID } from "appwrite";
import { account, avatars, databases, storage } from "./config";
import { elderUser } from '@/type';

export async function  uploadImage(file: File) {
    try {
      const uploadedFile = await storage.createFile(
        import.meta.env.VITE_APPWRITE_STORAGEID!,
        ID.unique(),
        file
      );
  
      return uploadedFile;
    } catch (error) {
      console.log(error);
    }
  }
export const  getFilePreview = (fileId: string)=> {
    try {
      const fileUrl = storage.getFilePreview(
        import.meta.env.VITE_APPWRITE_STORAGEID!,
        fileId,
        2000,
        2000,
        "top",
        100
      );
  
      if (!fileUrl) throw Error;
  
      return fileUrl;
    } catch (error) {
      console.log(error);
    }
  }
  



export const createElderUser = async (user:elderUser)=> {
    try {
      
        const newUser = await saveelderToDb({
            firstname:user.firstname,
            lastname:user.lastname,
            address : user.address,
            city:user.city,
            state:user.state,
            imageurl:user.imageurl
        })

        return newUser;


    }
    catch (error) {
        console.log("some error occurred in api.ts file regarding creating a new user in appwrite")
    }

}

export const saveelderToDb = async (
    user: {
        firstname: string,
        lastname: string,
        address: string,
        city: string,
        state: string,
        imageurl: URL
    }
) => {

    try {
        const newuser = await databases.createDocument(process.env.REACT_APP_APPWRITE_ELDERDATABASEID!,process.env.REACT_APP_APPWRITE_ELDERUSERCOLLECTIONID!, ID.unique(),user)
        return newuser
    }
    catch (error) {
        console.log("error in api.ts file in add elder  user to db function")
    }

}
