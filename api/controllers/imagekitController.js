import { getAuthenticationParameters } from "../models/imagekitModel.js";

export const authenticateImageKit = (req, res) => {
  const result = getAuthenticationParameters();
  res.send(result);
};
