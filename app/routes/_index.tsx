import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { VideoCall } from "~/components/videoCall/videoCall";
import { getVideoSDKToken } from "~/utils/authVideoSDK";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const authToken = getVideoSDKToken()

  return json({ authToken })
}
export default function Index() {
  const { authToken } = useLoaderData<typeof loader>()


  return <VideoCall authToken={authToken} />
}
