"use client";

import React from "react";
import {
  APIProvider,
  Map as VisMap,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

const Map = () => (
  <APIProvider
    apiKey={"AIzaSyDNDfZ6INfle6ygFAmMkIkHEMFuPMs1E3E"}
    onLoad={() => console.log("Maps API has loaded.")}
  >
    <div className="w-96 h-96 bg-black">
      <VisMap
        defaultZoom={13}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        onCameraChanged={(ev) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom
          )
        }
      />
      hello
    </div>
    hello
  </APIProvider>
);

export default Map;
