import { IKContext } from "imagekitio-react";

const apiURL = import.meta.env.VITE_API;
const imagekitEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;

if (!imagekitEndpoint || !publicKey || !apiURL) {
  throw new Error("Missing key or url");
}

const ImagekitProvider = ({ children }) => {
  const authenticator = async () => {
    try {
      const response = await fetch(`${apiURL}/images/auth`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  return (
    <IKContext
      urlEndpoint={imagekitEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      {children}
    </IKContext>
  );
};

export default ImagekitProvider;
