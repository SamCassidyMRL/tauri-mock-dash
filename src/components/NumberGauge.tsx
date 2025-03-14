import React, { FC } from 'react';

interface Props {
  value: number,
  min?: number,
  max?: number,
  softWarning?: number,
  hardWarning?: number,
  label: string
}

const NumberGauge: FC<Props> = ({value, label}) => {

  return (
    <div style={{width: 140, height: 115, borderRadius: 16, backgroundColor:"rgba(0, 0, 0, 0.25)" }}  > 
      <div color='white' style={{ textAlign:'center', color:'white', fontSize: 70 }}>{value}</div>
<div color='white' style={{marginTop: -18, textAlign:'center', color:'white', }}>{label}</div>
    </div>
  );
};

export default NumberGauge;