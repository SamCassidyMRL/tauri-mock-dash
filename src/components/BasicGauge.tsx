import React, { FC, useEffect, useState } from 'react';
import { GaugeComponent } from 'react-gauge-component';

interface Props {
  value: number,
  min?: number,
  max?: number,
  softWarning?: number,
  hardWarning?: number,
  label: string
}

const BasicGauge: FC<Props> = ({value, min, max, softWarning, hardWarning, label}) => {
  const [canRerender, setCanRerender] = useState(true)
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    const canRerenderCallback = setInterval(() => {
      setCanRerender(true);
    }, 100);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(canRerenderCallback);
  }, []);

  return (
    <div style={{width: 150}}> 
      <GaugeComponent
      style={{marginRight: '-50px', marginLeft: '-50px', marginTop: '-30px', fontFamily: 'fantasy'}}
      labels={{ 
        tickLabels: {hideMinMax: true}, 
        valueLabel: { formatTextValue: (value: any) => { 
          if (canRerender) {
            setCurrentValue(Math.floor(value))
            setCanRerender(false)
            return Math.floor(value).toString()
          } else {
            return currentValue.toString()
          }
        }},
      }}
      minValue={min ?? 0}
      maxValue={max ?? 100}
  arc={{
    nbSubArcs: 0,
    cornerRadius: 100,
    emptyColor: '#8C7995',
    subArcs: [
      
      {
        limit: softWarning ?? hardWarning,
        color: '#ffffff',
        showTick: false
      },
      ...[softWarning ? {
        limit:  hardWarning,
        color: '#ea7c28',
        showTick: false
      } : {}],
      ...[softWarning || hardWarning ? {
        limit: max,
        color: '#EA4228',
        showTick: false
      }: {}],
    ]
  }}
  value={value}

/>
<div color='white' style={{ fontFamily: 'fantasy', textAlign:'center', color:'white', marginTop: '-24px' }}>{label}</div>
    </div>
  );
};

export default BasicGauge;