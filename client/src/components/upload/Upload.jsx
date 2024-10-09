import { IKUpload } from "imagekitio-react";
import { useRef } from "react";

const Upload = ({ setFile }) => {
  const uploadRef = useRef(null);

  const onError = (err) => {
    console.log("Error", err);
    setFile((prev) => ({ ...prev, error: err }));
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setFile((prev) => ({ ...prev, data: res, isLoading: false }));
  };

  const onUploadProgress = (progress) => {
    console.log("Progress", progress);
    setFile((prev) => ({ ...prev, isLoading: true }));
  };

  const onUploadStart = (evt) => {
    console.log("Start", evt);
  };

  return (
    <>
      <IKUpload
        ref={uploadRef}
        fileName="test-upload.png"
        useUniqueFileName={true}
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        onUploadStart={onUploadStart}
        style={{ display: "none" }}
      />
      <img
        src="/attachment.png"
        width={26}
        height={26}
        onClick={() => uploadRef.current.click()}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default Upload;
