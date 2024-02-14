import React, { useCallback, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { FileWithPath, useDropzone } from 'react-dropzone';
import { convertFileToUrl } from '@/lib/utils';
type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
  
};

const PdfFileUploader = ({fieldChange}:FileUploaderProps) => {
const [file,setfile] = useState<File[]>([])
const [fileUrl,setFileUrl] =useState<string>()


const onDrop =useCallback(
    (acceptedFiles:FileWithPath[])=>{
        setfile(acceptedFiles);
        setFileUrl(convertFileToUrl(acceptedFiles[0]))

    },[]
)


    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.pdf',
      });


  return (
    <div>PdfFileUploader</div>
  )
}

export default PdfFileUploader