import React, { useState, useEffect, FC } from 'react';
import { GaugeComponent } from 'react-gauge-component';

interface Props {
  speed: number
}

const SpeedoMockGauge: FC<Props> = ({speed}) => {

  const [canRerender, setCanRerender] = useState(true)
      const [currentValue, setCurrentValue] = useState(speed)
    
      useEffect(() => {
        const canRerenderCallback = setInterval(() => {
          setCanRerender(true);
        }, 100);
    
        // Cleanup the interval when the component unmounts
        return () => {
          clearInterval(canRerenderCallback);
        }
      }, []);

  return (
    <div style={{ width: 500, height: 400}}>
      <GaugeComponent
      style={{ position: 'absolute', zIndex: 2, width:500, height: 400, margin: 0, fontFamily: 'fantasy'}}
      type="radial"
      maxValue={200} 
      marginInPercent={0.02}
  value={speed}
  arc={{
    colorArray: ['#FFFFFF', '#DA2128'],
    subArcs: [{limit:160}, {limit: 180}],
    padding: 0,
    cornerRadius: 5,
    width: 0.15
  }}
  labels={{
    valueLabel: { formatTextValue: (value) => { 
      if (canRerender) {
        setCurrentValue(Math.floor(value as number))
        setCanRerender(false)
        return Math.floor(value as number).toString()
      } else {
        return currentValue.toString()
      }
    }},
    tickLabels: {
      // colorArray0: ['#FFFFFF'],
      type: "inner",
      ticks: [
        { value: 20 },
        { value: 40 },
        { value: 60 },
        { value: 80 },
        { value: 100 },
        { value: 120 },
        { value: 140 },
        { value: 160 },
        { value: 180 },
        { value: 200 },
      ]
    }}}
      />
      <div  style={{position: 'absolute', zIndex: 1, marginLeft: 22, marginTop: 10, height: 370, width: 456, overflow:'hidden'}} >
      <div  style={{ backgroundColor: '#000000', borderRadius: 2000, height: 456, width: 457}} />
      </div>
      </div>
      
  );
};

export default SpeedoMockGauge;