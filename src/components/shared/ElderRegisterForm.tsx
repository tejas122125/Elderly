import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ElderForm } from '@/lib/formvalidation';
import { z } from 'zod';
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FileUploader from './FileUploader';


const ElderRegisterForm = () => {

    const form = useForm<z.infer<typeof ElderForm>>({
        resolver: zodResolver(ElderForm),
        defaultValues: {
            firstname: "",
            lastname: "",
            age: 1,
            address: ""
        },
    });

    const onSubmit = () => {
        console.log("submitted")
    }


    return (
        <>
            <div>monu jindabad</div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel  className='text-white' >Firstname</FormLabel>
                                <FormControl>
                                    <Input placeholder="enter your first name" {...field}autoComplete='off' />
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
                                <FormLabel  className='text-white' >Lastname</FormLabel>
                                <FormControl>
                                    <Input placeholder="enter your lastname" {...field} autoComplete='off'/>
                                </FormControl>
                                <FormMessage className='text-red-500' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel  className='text-white' >Age</FormLabel>
                                <FormControl>
                                    <Input placeholder="enter your age" {...field} autoComplete='off' type='number' />
                                </FormControl>
                                <FormMessage className='text-red-500'/>
                            </FormItem>
                        )}
                    />
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
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}

export default ElderRegisterForm