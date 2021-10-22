import React, { FC, useRef } from 'react';

interface FileUploadProps {
  setFile: (file: any) => void;
  accept: string;
}

export const FileUpload: FC<FileUploadProps> = ({ accept, children, setFile }) => {
  const ref = useRef<HTMLInputElement>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFile(e.target.files[0]);
  };

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        onChange={onChangeHandler}
        ref={ref}
        accept={accept}
        style={{ display: 'none' }}
        type="file"
      />
      {children}
    </div>
  );
};
