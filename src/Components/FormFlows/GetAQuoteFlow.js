'use client';

import { useContext, useEffect, useState } from 'react';
import { use100vh } from 'react-div-100vh';
import Styles from './GetAQuoteFlow.module.css';
import { UserDetailsContext } from '@/Context/FormContext';

export default function GetAQuoteFlow() {
  const height = use100vh();
  const { userData, setUserData } = useContext(UserDetailsContext);
  const [userProgress, setUserProgress] = useState({
    barWidth: 25,
    page: 1,
  });

  function userProgressHandler(data) {
    setUserProgress((userProgress) => ({
      barWidth: userProgress.barWidth + 25,
      page: userProgress.page + 1,
    }));
  }

  function userServiceHandler(serviceChosen) {
    setUserData((userData) => ({
      ...userData,
      service: serviceChosen,
    }));
  }

  if (height) {
    return (
      <div>
        <div
          className={Styles.ProgressBar}
          style={{ width: `${userProgress.barWidth}vw` }}
        />
        <div className={Styles.Container} style={{ minHeight: `${height}px` }}>
          <div className={Styles.Content}>
            <h2>Select Your Sector</h2>
            <div className={Styles.CentralSection}>
              {userData.service === null && (
                <div className={Styles.SectorSelector}>
                  <button
                    type="button"
                    onClick={() => userServiceHandler('Solar')}
                  >
                    Solar
                  </button>
                  <button
                    type="button"
                    onClick={() => userServiceHandler('Commercial Electrical')}
                  >
                    Commercial Electrical
                  </button>
                  <button
                    type="button"
                    onClick={() => userServiceHandler('EV Charging')}
                  >
                    EV Charging
                  </button>
                </div>
              )}

              {userData.service === 'Solar' && (
                <h1>You Clicked {userData.service}</h1>
              )}
              {userData.service === 'Commercial Electrical' && (
                <h1>You Clicked {userData.service}</h1>
              )}
              {userData.service === 'EV Charging' && (
                <h1>You Clicked {userData.service}</h1>
              )}
              <div className={Styles.ProgressButton}>
                <button type="button" onClick={() => userProgressHandler()}>
                  Progress to next step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
