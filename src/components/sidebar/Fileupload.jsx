import React, { useState } from 'react';
import { Button } from '../ui/button';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Files</h2>
        <div
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed  border-gray-300 py-20 rounded-lg bg-blue-50 text-center mb-4"
        >
          <p className="text-blue-500">
            <svg
              className="mx-auto mb-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16V4M12 4L8 8M12 4L16 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 18H4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Drag & drop files or <span className="text-blue-600 cursor-pointer">Browse</span>
          </p>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            id="fileUpload"
          />
        </div>
        <p className="text-gray-500 text-center mb-4">Supported formats: XLS, PDF</p>
        <Button className="w-full" onClick={() => console.log(files)}>
          Ingest Files
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
