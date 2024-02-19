"use client";
import { React, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import checkFormat from "../hooks/checkFormat";
import imageSizeReducer from "./imageSizeReducer";
import Image from "next/image";
import { postMakerFormData } from "@/assets/data/data";

const ImageDragDrop = ({ setImage, currentImage, edition, lable }) => {
  const [binaryImage, setBinaryImage] = useState("");
  const [binaryImageName, setBinaryImageName] = useState("");
  const [format, setFormat] = useState("");
  const [isFormatError, setIsFormatError] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    setBinaryImageName(acceptedFiles[0].name);
    
    checkFormat({ acceptedFiles, setFormat, setIsFormatError });
    
    const file = new FileReader();

    file.onload = function () {
      setBinaryImage(file.result);
      imageSizeReducer({
        file: file.result,
        setImage: setImage,
        edition: edition,
      });
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div className="flex flex-col items-start w-full gap-2">
      <label htmlFor="image" className="min-w-fit h-fit text-[.8rem]">
        {lable}
      </label>
      <div {...getRootProps()} className="relative w-full">
        <input id="image" {...getInputProps()} />
        <div
          className={`flex flex-col items-center justify-center w-full min-h-[9rem] h-fit px-2 py-4 ${isDragActive ? "dark:bg-gray-600 bg-gray-300" : "dark:bg-gray-700 bg-gray-200"} cursor-pointer`}
        >
          <span>{postMakerFormData.dragFile}</span>
          {binaryImageName && format == "image" && !isFormatError && (
            <div className="flex flex-col w-full items-center gap-2">
              <span className="relative flex items-center justify-center w-full max-h-[20rem] mt-3">
                <Image
                  src={binaryImage}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Upload preview image"
                  className={`${edition == "avatar" ? "h-[20rem] w-[20rem] rounded-full object-cover" : "object-contain w-full h-full max-h-[20rem]"}`}
                />
              </span>
              <span>{binaryImageName}</span>
            </div>
          )}
          {edition != "post" && !binaryImage && !isFormatError && (
            <span className="relative flex items-center justify-center w-full max-h-[20rem] mt-3">
              {currentImage && (
                <Image
                  src={currentImage}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Upload preview image"
                  className={`object-cover h-[20rem]  ${edition == "avatar" ? "w-[20rem] rounded-full" : "w-full"} `}
                />
              )}
            </span>
          )}
          {binaryImageName &&
            format == "video" &&
            !isFormatError &&
            edition == "post" && (
              <div className="flex flex-col w-full items-center gap-2">
                <span className="relative flex w-full max-h-[20rem] mt-3">
                  <video
                    controls
                    autoPlay
                    src={binaryImage}
                    className="object-contain"
                  ></video>
                </span>
                <span>{binaryImageName}</span>
              </div>
            )}
          {isFormatError && <span>format not supported</span>}
        </div>
      </div>
    </div>
  );
};

export default ImageDragDrop;
