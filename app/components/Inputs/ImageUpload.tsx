"use client";

import React, { useCallback } from "react";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
}) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="behylc6k"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative flex  cursor-pointer flex-col items-center
             justify-center gap-4 border-2 border-dashed border-neutral-300  
             p-[260px] text-neutral-400 transition hover:opacity-70"
          >
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold w-[200px] text-center">
              Click to upload
            </div>
            {value && (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
