import React, { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from "react-dropzone";


type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
    mediaUrl: string;
  };


const FileUploader = ({fieldChange,mediaUrl}:FileUploaderProps) => {

const [file,setFile]  = useState<File[]>([]);
const [fileurl,setFileUrl]  = useState<string>(mediaUrl)

const onDrop = useCallback(
    (acceptedFiles: FileWithPath[])=>{
        setFile(acceptedFiles);
        fieldChange(acceptedFiles);
        setFileUrl(mediaUrl);
},[file]);

const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });


  return (
    <div>FileUploader</div>
  )
}

export default FileUploader