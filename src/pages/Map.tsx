import React, { useContext, useEffect, useMemo } from "react";
import { MapContainer, Marker, Polyline, TileLayer, Tooltip } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { DataContext, useDataContext } from "../components/providers/DataContext";
import { calculateDistance } from "../static/map";

export const Map = () => {
  const { locationData, ipInfo } = useDataContext();
 

  const currentLocation: LatLngExpression = useMemo(() => {
    if (locationData) return ([locationData.latitude, locationData.longitude])

    return [0, 0];
  }, [locationData]);


  const ipLocation: LatLngExpression = useMemo(() => {
    if (ipInfo?.loc) {
      const loc = ipInfo.loc.split(",").map(l => Number(l));
      return [loc[0], loc[1]];
    } else {
      return [0, 0]
    }
  }, [ipInfo?.loc])

  const distance = useMemo(() => {
    return calculateDistance(currentLocation[0], currentLocation[1], ipLocation[0], ipLocation[1]);
  }, [currentLocation, ipLocation])

  return (
    <div className="fullWidthHeight">
      {
        !locationData || !ipInfo ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="fullWidthHeight">
            <MapContainer
              bounds={[currentLocation, ipLocation]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={currentLocation}>
                <Tooltip>
                  Your current location
                </Tooltip>
              </Marker>
              <Marker position={ipLocation}>
                <Tooltip>
                  Your IP Location
                </Tooltip>
              </Marker>
              <Polyline
                pathOptions={{ color: "#000000" }}
                positions={[
                  currentLocation, ipLocation
                ]}
              >
                <Tooltip sticky>Distance: {distance} km</Tooltip>
              </Polyline>
            </MapContainer>
          </div>
        )
      }

    </div>
  );
}