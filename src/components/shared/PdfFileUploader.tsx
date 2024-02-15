import React, { useCallback, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { FileWithPath, useDropzone } from 'react-dropzone';
import { convertFileToUrl } from '@/lib/utils';
type FileUploaderProps = {
    fieldChange: (files: File[]) => void;

};

const PdfFileUploader = ({ fieldChange }: FileUploaderProps) => {
    const [file, setfile] = useState<File[]>([])

    const [fileUrl, setFileUrl] = useState<string>()


    const onDrop = useCallback(
        (acceptedFiles: FileWithPath[]) => {
            setfile(acceptedFiles);
            fieldChange(acceptedFiles)
            setFileUrl(convertFileToUrl(acceptedFiles[0]))

        }, [file]
    )


    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { "pdf/*": [".pdf"] },
        multiple:false
    });


    return (
        <div {...getRootProps} className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"> <Label htmlFor="PDF" className='text-white'>Upload Your PDF File</Label>
            <Input {...getInputProps} id="PDF" type="file"  className='text-white mt-3'/></div>
    )
}

export default PdfFileUploader