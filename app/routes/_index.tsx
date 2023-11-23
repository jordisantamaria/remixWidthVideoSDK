import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { VideoCall } from "~/components/videoCall/videoCall";
import { createMeeting, getVideoSDKToken } from "~/utils/videoSDK";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const authToken = getVideoSDKToken()
  const meetingId = await createMeeting(authToken)

  console.log({ authToken, meetingId })

  return json({ authToken, meetingId })
}
export default function Index() {
  const { authToken, meetingId } = useLoaderData<typeof loader>()

  console.log({ authToken, meetingId })

  return authToken && meetingId ? (
    <VideoCall authToken={authToken} meetingId={meetingId} />
  ) : (
    <div />
  );
}
