import React from "react";
import { useDataContext } from "../components/providers/DataContext";

export const IPStats = () => {
  const {locationData, ipInfo} = useDataContext();

  return (
    <div className="page">
      <h1>Location & IP Stats</h1>

      <div className="infoCards">
        <div className="card">
          <h4>Your Location</h4>
          { !locationData ? (
            <div>
              <p>Loading...</p>
            </div>
          ) : (
            <table className="table">
              <tbody>
                <tr>
                  <td>Longitude:</td>
                  <td>{locationData.longitude}</td>
                </tr>
                <tr>
                  <td>Latitude:</td>
                  <td>{locationData.latitude}</td>
                </tr>
                <tr>
                  <td>Accuracy:</td>
                  <td>{locationData.accuracy} meters</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <div className="card">
          <h4>Your IP Info</h4>

          {
            !ipInfo ? (
              <div>
                <p>Loading...</p>
              </div>
            ) : (
              <>
                <img
                  src={`https://flagsapi.com/${ipInfo.country}/flat/64.png`}
                  alt={`${ipInfo.country} Flag`}
                  className="flag"
                />

                <table className="table">
                  <tbody>
                    <tr>
                      <td>IP Address:</td>
                      <td>{ipInfo.ip}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{ipInfo.city}</td>
                    </tr>
                    <tr>
                      <td>Region</td>
                      <td>{ipInfo.region}</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>{ipInfo.country}</td>
                    </tr>
                    <tr>
                      <td>Timezone</td>
                      <td>{ipInfo.timezone}</td>
                    </tr>
                    <tr>
                      <td>IP Location</td>
                      <td>{ipInfo.loc}</td>
                    </tr>
                    <tr>
                      <td>Network organization</td>
                      <td>{ipInfo.org}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )
          }

        </div>
      </div>
    </div>
  );
}
