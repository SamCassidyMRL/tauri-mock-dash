import React, { FC, useEffect, useState } from 'react';
import { GaugeComponent } from 'react-gauge-component';
const UPDATE_TILL_RERENDER_NUMBER = 2

interface Props {
  rpm: number
}

const RPMMockGauge: FC<Props> = ({rpm}) => {
  const [numberDisplayValue, setNumberDisplayValue] = useState(rpm)
  const [renderCount, setRenderCount] = useState(0)

    const [canRerender, setCanRerender] = useState(true)
    const [currentValue, setCurrentValue] = useState(rpm)
  
    useEffect(() => {
      const canRerenderCallback = setInterval(() => {
        setCanRerender(true);
      }, 100);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(canRerenderCallback);
    }, []);

  return (
    <div style={{ width: 500, height: 400}}>
      <GaugeComponent
      style={{ position: 'absolute', zIndex: 2, width:500, height: 400, fontFamily: 'fantasy'}}
      type="radial"
      maxValue={9000} 
      marginInPercent={0.02}
  value={rpm }
  arc={{
    colorArray: ['#FFFFFF', '#DA2128', '#7a0000'],
    subArcs: [{limit:6000}, {limit: 8000}, {limit: 9000, color: '#DA2128'}],
    padding: 0,
    gradient: true,
    cornerRadius: 20,
    width: 0.15
  }}
  labels={{
    valueLabel: { formatTextValue: (value: any) => { 
      if (canRerender) {
        setCurrentValue(Math.floor(value))
        setCanRerender(false)
        return Math.floor(value).toString()
      } else {
        return currentValue.toString()
      }
    }},
    tickLabels: {
      // colorArray: ['#FFFFFF', ],
      type: "inner",
      ticks: [
        { value: 1000 },
        { value: 2000 },
        { value: 3000 },
        { value: 4000 },
        { value: 5000 },
        { value: 6000 },
        { value: 7000 },
        { value: 8000 },
        { value: 9000 },
      ]
    }}}
      />
      <div  style={{position: 'absolute', zIndex: 1, marginLeft: 21, marginTop: 10, height: 370, width: 456, overflow:'hidden'}} >
      <div  style={{ backgroundColor: '#000000', borderRadius: 2000, height: 456, width: 457}} />
      </div>
    </div>

  );
};

export default RPMMockGauge;