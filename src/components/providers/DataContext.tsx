import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import {IPINFO_API_TOKEN} from "../../static/config";
import {IIPInfo} from "../../static/types";
import {Outlet} from "react-router-dom";

interface ContextProps {
  locationData?: GeolocationCoordinates;
  ipInfo?: IIPInfo;
  loadLocations?: () => void;
}

export const DataContext = createContext<ContextProps>({});

interface ProviderProps {
}

export const DataContextProvider = (props: ProviderProps) => {
  const [locationData, setLocationData] = useState<GeolocationCoordinates | undefined>();
  const [ipInfo, setIPInfo] = useState<IIPInfo | undefined>();

  const navigatorId = useRef<any>(null);
  const abortController = useRef<any>(new AbortController());
  const abortSignal = abortController.current.signal;

  const loadLocations = async () => {
    if (navigator.geolocation) {
      navigatorId.current = navigator.geolocation.watchPosition(
        (position) => setLocationData(position.coords),
        (e) => alert(`Error getting location [${e}]`),
        {enableHighAccuracy: true})
    } else alert("This device doesn't support geolocation API")

    try {
      const res = await fetch(`https://ipinfo.io/json?token=${IPINFO_API_TOKEN}`, {signal: abortSignal});
      const data = await res.json();
      setIPInfo(data)
    } catch (e) {
      alert(`Error getting ip info [${e}]`)
    }
  }

  const unsubscribe = () => {
    navigator.geolocation.clearWatch(navigatorId.current);
  }

  useEffect(() => {
    loadLocations();
    const abortC = abortController.current;

    return () => {
      unsubscribe()
      abortC.abort();
    }
    // eslint-disable-next-line
  }, []);

  const value = {
    locationData,
    ipInfo,
  }

  return (
    <DataContext.Provider value={value}>
      <Outlet/>
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  const {locationData, ipInfo} = useContext(DataContext);

  return ({
    locationData,
    ipInfo,
  });
}
