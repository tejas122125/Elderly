import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ElderForm } from '@/lib/formvalidation';
import { z } from 'zod';
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FileUploader from './FileUploader';
// import PdfFileUploader from './PdfFileUploader';
import { useQuery } from 'react-query';
import { fetchCoordinates } from '@/api/locationApi';
import { placetype } from '@/type';
import { useFetchCoordinate } from '@/reactquery/mutatefunction';


const ElderRegisterForm = () => {

    const form = useForm<z.infer<typeof ElderForm>>({
        resolver: zodResolver(ElderForm),
        defaultValues: {
            firstname: "",
            lastname: "",
         city:"",
         state:"",
            place: ""
        },
    });

    const handlesubmit = async (value: z.infer<typeof ElderForm>) => {
        const addressParam:placetype  = {place:value.place,city:value.city,state:value.state}

        const { data, isLoading, isError } = useFetchCoordinate(addressParam)
        
        console.log("submitted")
    }


    return (
        <>
        {/* //</><div className='flex flex-col w-screen h-screen items-center justify-center'> */}
            {/* <div className='bg-blue-900 w-fit h-screen p-6 border-4 border-red-500 overflow-y-scroll mx-auto scroll-smooth '> */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handlesubmit)} className="bg-blue-900 w-1/2 h-screen p-6 border-4 border-red-500 overflow-y-scroll mx-auto scroll-smooth  flex flex-col gap-9   max-w-5xl">
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white' >Firstname</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter your first name" {...field} autoComplete='off' className='text-white' />
                                    </FormControl>
                                    <FormMessage className='text-red-500' />
                                </FormItem>
                            )}
                        />
                     
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white' >Lastname</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter your lastname" {...field} autoComplete='off' className='text-white' />
                                    </FormControl>
                                    <FormMessage className='text-red-500' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="place"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white' >Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Your Address" {...field} autoComplete='on' className='text-white' />
                                    </FormControl>
                                    <FormMessage className='text-red-500' />
                                </FormItem>
                            )}
                        />
                        <div className='flex flex-col md:flex-row md:gap-2 gap-4 md:justify-between items-center'>
                         <FormField
                        
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel className='text-white' >City</FormLabel>
                                    <FormControl>
                                        <Input placeholder="City Name" {...field} autoComplete='on' className='text-white flex-1' />
                                    </FormControl>
                                    <FormMessage className='text-red-500' />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel className='text-white w-1/2' >State</FormLabel>
                                    <FormControl>
                                        <Input placeholder="State Name" {...field} autoComplete='on' className='text-white' />
                                    </FormControl>
                                    <FormMessage className='text-red-500' />
                                </FormItem>
                            )}
                        />
                        </div>
                        {/* <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white' >Age</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter your age" {...field}   className='text-white' type='number'/>
                                    </FormControl>
                                    <FormMessage className='text-red-500' />
                                </FormItem>
                            )}
                        /> */}
                        <FormField
                            control={form.control}
                            name="imagefile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white' >Add Photos</FormLabel>
                                    <FormControl>
                                        <FileUploader
                                            fieldChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500' />
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                            control={form.control}
                            name="pdffile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white' >Add File</FormLabel>
                                    <FormControl>
                                        <PdfFileUploader
                                            fieldChange={field.onChange}

                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500' />
                                </FormItem>
                            )}
                        /> */}
                        <Button type="submit" >Submit</Button>
                    </form>
                </Form>
            {/* </div> */}
       
        </>
    )
}

export default ElderRegisterForm