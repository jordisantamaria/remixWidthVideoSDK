import jwt from "jsonwebtoken";


export const getVideoSDKToken =  () => {
  // const API_KEY = process.env.VIDEOSDK_API_KEY;
  // const SECRET_KEY = process.env.VIDEOSDK_SECRET_KEY as jwt.Secret;
  const API_KEY = '47c2b0b2-0ff6-4e61-b8db-2b4eeaa489ce'
  const SECRET_KEY = 'b6025bb7371e999fc13152f2e604cadf37a8724dae6d9a803363c6d22218ad87'
  console.log({API_KEY, SECRET_KEY})
  const options = { expiresIn: "10m", algorithm: "HS256" } as jwt.SignOptions;
  const payload = {
    apikey: API_KEY,
    permissions: ["allow_join", "allow_mod", "ask_join"], // Trigger permission.
  };
  const authToken = jwt.sign(payload, SECRET_KEY, options);
  return authToken
}


// API call to create meeting
export const createMeeting = async (token: string) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId }: { roomId: string } = await res.json();
  return roomId;
};
