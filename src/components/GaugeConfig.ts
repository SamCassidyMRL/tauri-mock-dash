/**
 * These gagues config values come from PC link
 * 
 * Min and Max values can be found in raw.githubusercontent.com/LinkECU/settings-editor/refs/heads/develop/source/ECU.cfgr.xml?token=GHSAT0AAAAAAC52CUV3YG4K6U6KKABV72H2Z6HURHA 
 * soft and hard warnings can be found in PC link install files → DefaultParamaterConfig.rtcr
 */

export const GAUGE_CONFIG = {
    'SectionTime': {min:0, max: 1000, softWarning: 999, hardWarning:1000, label: "Time"}, // this does not need min max or hard warning
    'MAP': {min:0, max: 300, softWarning: 250, hardWarning:280, label: "MAP"},
    'OilPressure': {min:0, max: 1000, softWarning: 650, hardWarning:750, label: "Oil Pressure"}, 
    'ECT': {min:-10, max: 150, softWarning: 103, hardWarning:110, label: "ECT"}, 
    'OilTemperature': {min:0, max: 200, softWarning: 120, hardWarning:140, label: "Oil Temperature"}, 
    'IAT': {min:0, max: 150, softWarning: 55, hardWarning:75, label: "IAT"}, 
    'Gear': {min:0, max: 6, label: "Gear"},	
    'DrivenWheelSpeed': {min:0, max: 200, hardWarning:160, label: "Speed"},	
    'Lambda': {min:0, max: 0.7, softWarning: 1.3, hardWarning:1.5, label: "Lambda"}, 
    'AvgEngineSpeed': {min:0, max: 1000, softWarning: 800, hardWarning:900, label: "RPM"}
}