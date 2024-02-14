import React, { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from "react-dropzone";


type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
    mediaUrl: string;
};


const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {

    const [file, setFile] = useState<File[]>([]);
    const [fileurl, setFileUrl] = useState<string>(mediaUrl)

    const onDrop = useCallback(
        (acceptedFiles: FileWithPath[]) => {
            setFile(acceptedFiles);
            fieldChange(acceptedFiles);
            setFileUrl(mediaUrl);
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
                fileurl?(
                    <>
                    <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
                        <img src="fileurl" alt="imagefile" className='h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-top' />
                        <p className='text-light-4 text-center small-regular w-full p-4 border-t border-t-dark-4'> Click Or Drag Photo to Upload</p>

                    </div>
                    </>
                ):(
                    <div className='flex-center flex-col p-7 h-80 lg:h-[612px]'>
                        <img src="../../public/file-upload.svg" alt="" />
                    </div>
                )
            }


        </div>
    )
}

export default FileUploader