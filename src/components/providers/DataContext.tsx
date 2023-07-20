import React, { createContext, useContext, useEffect, useState } from "react";
import { IPINFO_API_TOKEN } from "../../static/config";
import { IIPInfo } from "../../static/types";

interface ContextProps {
  locationData?: GeolocationCoordinates;
  ipInfo?: IIPInfo;
}

export const DataContext = createContext<ContextProps>({});

interface ProviderProps {
  children: React.ReactNode
}

export const DataContextProvider = ({ children }: ProviderProps) => {
  const [locationData, setLocationData] = useState<GeolocationCoordinates | undefined>();
  const [ipInfo, setIPInfo] = useState<IIPInfo | undefined>();

  useEffect(() => {
    if (navigator.geolocation) navigator.geolocation.watchPosition(
      (position) => setLocationData(position.coords),
      (e) => alert(`Error getting location [${e}]`),
      { enableHighAccuracy: true })
    else alert("This device doesn't support geolocation API")

    fetch(`https://ipinfo.io/json?token=${IPINFO_API_TOKEN}`)
      .then((res) => {
        res.json()
          .then((data) => setIPInfo(data))
          .catch((e) => alert(`Error getting ip info [${e}]`))
      }).catch((e) => alert(`Error getting ip info [${e}]`))
  }, []);

  const value = {
    locationData,
    ipInfo
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  const { locationData, ipInfo } = useContext(DataContext);

  return ({
    locationData,
    ipInfo
  });
}
