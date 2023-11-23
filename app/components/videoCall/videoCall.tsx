import { ClientOnly } from "remix-utils/client-only";
import { MeetingProvider } from "./videoSDK.client";


type Props = {
  authToken: string
  meetingId: string
}
export const VideoCall = ({authToken, meetingId}: Props) => {

  return authToken && meetingId ? (
    <ClientOnly>
      {() => (
        <MeetingProvider
          config={{
            meetingId,
            micEnabled: true,
            webcamEnabled: true,
            name: "C.V. Raman",
          }}
          token={authToken}
        >
          <div />
        </MeetingProvider>
      )}
    </ClientOnly>
  ) : (
    <div />
  );
}

