import React, { useEffect, useState } from 'react';
import RPMMockGauge from './RPMMockGauge';
import BasicGauge from './BasicGauge';
import { MOCK_ECU_DATA } from './mockECUData';
import SpeedoMockGauge from './SpeedoMockGauge';
import { GAUGE_CONFIG } from './GaugeConfig';
import LineGauge from './LineGauge';
import NumberGauge from './NumberGauge';


const MockDash = () => {
    const [ecuDataIndex, setEcuDataIndex] = useState(4500)
  
    useEffect(() => {
      // This function will update the number every 20ms (50 times per second)
      const interval = setInterval(() => { 
        setEcuDataIndex((prevNumber) => { 
          if (prevNumber === MOCK_ECU_DATA.length - 1 ) {
            return 1
          } else {
            return prevNumber + 1
          }
        }); 
      }, 20); // 1000ms / 50 = 20ms interval
  
      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }, []);

    const ecuData = MOCK_ECU_DATA[ecuDataIndex]

  return (
    <div style={{backgroundColor: '#3F1951', width: 1026, height: 600}}>
      <div style={{height: 40, width: '100%', backgroundColor: '#000000' }} />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Space items evenly across the page
        alignItems: 'center', // Vertically center items
        height:388,
        overflow: 'hidden',
        padding: 6
    }}>
        <SpeedoMockGauge speed={ecuData.Speed}/>
        <RPMMockGauge rpm={ecuData.RPM}/>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Space items evenly across the page
        alignItems: 'center', // Vertically center items
        padding: 6,
        height: 130
    }}>
        <BasicGauge value={ecuData.OilPressure} {...GAUGE_CONFIG.OilPressure}/>
        <BasicGauge value={ecuData.OilTemperature} {...GAUGE_CONFIG.OilTemperature} />
        <BasicGauge value={ecuData.ECT}  {...GAUGE_CONFIG.ECT} />
        <NumberGauge value={ecuData.Gear} {...GAUGE_CONFIG.Gear}/>
        <BasicGauge value={ecuData.IAT} {...GAUGE_CONFIG.IAT}/>
        <LineGauge value={ecuData.MAP} {...GAUGE_CONFIG.MAP}/>
      </div>

      <div style={{height: 40, width: '100%', backgroundColor: '#000000' }} >
        {/* <TimerCount /> */}
      </div>
    </div>
  );
};

export default MockDash;