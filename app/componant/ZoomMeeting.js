'use client';
import { useEffect, useState } from "react";

function ZoomMeeting() {
  const [ZoomMtg, setZoomMtg] = useState(null);

  const sdkKey = "Your SDK key";
  const meetingNumber = "Your meetingNumber";
  const passWord = "123456";
  const role = 0;
  const userName = "next";
  const userEmail = "";
  const registrantToken = "";
  const zakToken = "";
  const signature = "your signature";
  const leaveUrl = "http://localhost:3000";


  useEffect(() => {
    async function loadZoomSDK() {
      if (typeof window !== "undefined") {
        const { ZoomMtg } = await import("@zoom/meetingsdk");
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();
        setZoomMtg(ZoomMtg);
      }
    }
    loadZoomSDK();
  }, []);

  function startMeeting() {
    if (!ZoomMtg) return;

    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      patchJsMedia: true,
      leaveOnPageUnload: true,
      success: function () {
        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          tk: registrantToken,
          zak: zakToken,
          success: function (success) {
            console.log("Joined Meeting:", success);
          },
          error: function (error) {
            console.error("Error Joining Meeting:", error);
          },
        });
      },
      error: function (error) {
        console.error("Error Initializing Zoom SDK:", error);
      },
    });
  }

  return (
    <div>
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>
        <button onClick={startMeeting} disabled={!ZoomMtg}>
          Join Meeting
        </button>
        <div id="zmmtg-root" style={{ display: "none" }} />
      </main>
    </div>
  );
}

export default ZoomMeeting;
