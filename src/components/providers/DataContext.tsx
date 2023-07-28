import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { IPINFO_API_TOKEN } from "../../static/config";
import { IIPInfo } from "../../static/types";
import { useLocation, useNavigate, useNavigation, useRoutes } from "react-router-dom";
import { inherits } from "util";

interface ContextProps {
  locationData?: GeolocationCoordinates;
  ipInfo?: IIPInfo;
}

const appReducer = (state: any, action: any)=>{

}

export const DataContext = createContext<ContextProps>({});

interface ProviderProps {
  children: React.ReactNode
}

export const DataContextProvider = ({ children }: ProviderProps) => {
  const [locationData, setLocationData] = useState<GeolocationCoordinates | undefined>();
  const [ipInfo, setIPInfo] = useState<IIPInfo | undefined>();
  const location  = useLocation()

  useEffect(() => {
    let isInitiated: boolean = true
    if(location.pathname !== '/'){
      if (navigator.geolocation) navigator.geolocation.watchPosition(
            (position) => setLocationData(position.coords),
            (e) => alert(`Error getting location [${e}]`),
            { enableHighAccuracy: true })
          else alert("This device doesn't support geolocation API")
          
            handleAPI(isInitiated)
         
         
    }
    return ()=>{
      isInitiated = false
    };
   
  }, [location.pathname]);

  const handleAPI=async(isInitiated: boolean)=>{
    try {
      const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_API_TOKEN}`)
      try {
        const data = await response.json()
        if(isInitiated)setIPInfo(data)
      } catch (err) {
        alert(`Error getting ip info [${err}]`)
      }
    } catch (error) {
      alert(`Error getting ip info [${error}]`)
    }
  }

  return (
    <DataContext.Provider value={{locationData, ipInfo}}>
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
