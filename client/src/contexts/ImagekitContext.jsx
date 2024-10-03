import { IKContext } from "imagekitio-react";

const API_URL = import.meta.env.VITE_API;
const IMAGEKIT_ENDPOINT = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const PUBLIC_KEY = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;

if (!IMAGEKIT_ENDPOINT || !PUBLIC_KEY || !API_URL) {
  throw new Error("Missing key or url");
}

const ImagekitProvider = ({ children }) => {
  const authenticator = async () => {
    try {
      const response = await fetch(`${API_URL}/images/auth`);

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
      urlEndpoint={IMAGEKIT_ENDPOINT}
      publicKey={PUBLIC_KEY}
      authenticator={authenticator}
    >
      {children}
    </IKContext>
  );
};

export default ImagekitProvider;
