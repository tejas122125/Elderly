import { z } from "zod";

export const ElderForm = z.object({
    firstname:z.string().min(1,{message:"Too Short Name"}).max(200,{message:"Maximum 200 Characters Allowed"}),
    lastname:z.string().min(1,{message:"Too Short Name"}).max(200,{message:"Maximum 200 Characters Allowed"}),
    age:z.number().min(30,{message:"Too Young Manage On your own"})   .max(200,{message:"Guiness Book Of World Record"}),
    address:z.string().min(1,{message:"Too Short Address "}).max(2200,{message:"enter a valid Address"}),
    imagefile:z.custom<File[]>(),
    pdffile:z.custom<File[]>(),

  });