const backend = require('./backend');
var performances = [
    {
      "performanceid": 1000000004,
      "starttime": "10:00:00",
      "endtime": "11:00:00"
    },
    {
      "performanceid": 1000000005,
      "starttime": "10:00:00",
      "endtime": "11:00:00"
    },
    {
      "performanceid": 1000000006,
      "starttime": "12:00:00",
      "endtime": "11:00:00"
    },
    {
      "performanceid": 1000000008,
      "starttime": "15:00:00",
      "endtime": "16:00:00"
    }
  ]

console.log(backend.getPerformanceAlgo(performances));