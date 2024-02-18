// storing the image files in appwrite

import { ID } from "appwrite";
import { databases, storage } from "./config";

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

export async function createUserAccount(user) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        )

        const avatarsUrl = avatars.getInitials(user.name)
        const newUser = await saveuserToDb({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarsUrl,


        })

        return newUser;


    }
    catch (error) {
        console.log("some error occurred in api.ts file regarding creating a new user in appwrite")
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
        const newUser = await databases.createDocument(appwritedatabaseId,"658da7c34f70d1d51ef6", ID.unique(),user)
        return newUser
    }
    catch (error) {
        console.log("error in api.ts file in add user to db function")
    }

}