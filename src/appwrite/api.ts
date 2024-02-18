// storing the image files in appwrite

import { ID } from "appwrite";
import { storage } from "./config";

export const uploadImage = async (file:File)=>{
try {
    const response = await storage.createFile(
        '65ce07915bbda0153d57',
        ID.unique(),
        file
    );
    return response
} catch (error) {
    console.log("error while uploading images to appwrite")
}


}



export const saveuserToDb = async (
    user: {
        accountId: string,
        name: string,
        email: string,
        username: string,
        imageUrl: URL
    }
) => {

    try {
        const newUser = await databases.createDocument(appwriteConfig.databaseId,"658da7c34f70d1d51ef6", ID.unique(),user)
        return newUser
    }
    catch (error) {
        console.log("error in api.ts file in add user to db function")
    }

}