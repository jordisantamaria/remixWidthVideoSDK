import jwt from "jsonwebtoken";


export const getVideoSDKToken =  () => {
  const API_KEY = 'TODO'
  const SECRET_KEY = 'TODO'

  const options = { expiresIn: "10m", algorithm: "HS256" } as jwt.SignOptions;
  const payload = {
    apikey: API_KEY,
    permissions: ["allow_join", "allow_mod", "ask_join"], // Trigger permission.
  };
  const authToken = jwt.sign(payload, SECRET_KEY, options);
  return authToken
}

