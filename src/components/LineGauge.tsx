import React, { type FC, useEffect, useRef, useState } from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, Background } from 'victory';

interface Props {
  value: number,
  min: number,
  max: number,
  softWarning: number,
  hardWarning: number,
  label: string
}

const LineGauge: FC<Props> = ({value, min, max, softWarning, hardWarning, label}) => {
  const [timeSeries] = useState([value])
  const lastValueRef = useRef(value)


  useEffect(() => {
    const canRerenderCallback = setInterval(() => {
      timeSeries.unshift(lastValueRef.current)
      if (timeSeries.length > 30) {
        timeSeries.pop() 
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(canRerenderCallback);
  }, []);

  useEffect(() => {
    lastValueRef.current = value
  }, [value]);

  return (
    <div style={{width: 140, height: 115, borderRadius: 16, backgroundColor:"rgba(0, 0, 0, 0.25)" }}> 
    <VictoryChart
      height={100}
      width={150}
      padding={{
        top: 6,
        bottom: 14,
        left: 10,        
        right: 16
      }}
      maxDomain={{ y: max, x: 30 }}
      minDomain={{ y: min, x : 0}}
      backgroundComponent={
        <Background y={20} height={100} width={100} style={{backgroundColor: '#FFFFFF'}} />
      }
    >
      <VictoryAxis
        tickValues={[softWarning, hardWarning]}
        
      dependentAxis
  style={{
    axis: { stroke: "#666565" },
    axisLabel: {
      fontSize: 20,
      padding: 30,
      color: 'pink'
    },

    grid: {
      stroke: ({ tick }) =>
        tick === softWarning ? "#ea7c28" : "#EA4228",

    },
    tickLabels: {
      fontSize: 15,
      padding: 5,
    },
  } 
}
/>
<VictoryAxis
  tickValues={[softWarning, hardWarning]}
  style={{
    axis: { stroke: "#666565" },
  }
}
/>
        <VictoryLine
          data={ timeSeries.map((data, index) => ({y: data, x: 30 - index})) }
          interpolation="linear"
          labels={({ datum }) => datum?.x === 30 ? datum?.y : null}
          
          style={{
            data: {
              stroke: '#FFFFFF',
            },
            labels: {
              stroke: '#FFFFFF',
              marginRight: 10
            }
          }}

        />
    </VictoryChart>
<div color='white' style={{ textAlign:'center', color:'white', marginTop: '-20px' }}>{label}</div>
    </div>
  );
};

export default LineGauge;