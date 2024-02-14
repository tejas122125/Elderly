import React, { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from '../ui/button';
import { convertFileToUrl } from '@/lib/utils';


type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
  
};


const FileUploader = ({ fieldChange }: FileUploaderProps) => {

    const [file, setFile] = useState<File[]>([]);
    const [fileurl, setFileUrl] = useState<string>()

    const onDrop = useCallback(
        (acceptedFiles: FileWithPath[]) => {
            setFile(acceptedFiles);
            fieldChange(acceptedFiles);
            setFileUrl(convertFileToUrl(acceptedFiles[0]));
        }, [file]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".png", ".jpeg", ".jpg"],
        },
    });


    return (
        <div {...getRootProps()} className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
            <input {...getInputProps} className='cursor-pointer' />
            {
                fileurl ? (
                    <>
                        <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
                            <img src="fileurl" alt="imagefile" className='h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-top' />
                            <p className='text-light-4 text-center small-regular w-full p-4 border-t border-t-dark-4'> Click Or Drag Photo to Upload</p>

                        </div>
                    </>
                ) : (
                    <div className='flex-center flex-col p-7 h-80 lg:h-[612px]'>
                        <img src="../../public/file-upload.svg" alt="uploaded file svg"
                            width={96}
                            height={77} />
                        <h3 className="base-medium text-light-2 mb-2 mt-6">
                            Drag photo here
                        </h3>
                        <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>
                        <Button type="button" className="ghost">
                            Select from computer
                        </Button>
                    </div>
                )
            }


        </div>
    )
}

export default FileUploader