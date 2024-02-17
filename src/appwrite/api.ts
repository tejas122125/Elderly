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