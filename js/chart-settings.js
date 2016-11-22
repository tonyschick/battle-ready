/******** FOR LIGHT BACKGROUNDS ***********/
$(function() {
    Highcharts.setOptions({
        chart: {
          style: {
            fontFamily: 'Helvetica Neue',
          }
        },
        title: {
          style: {
            fontFamily: 'Crimson Text',
          }
        },
        lang: {
            thousandsSep: ','
        },
        exporting: {
        	enabled: false
        },
        credits: {
        	enabled: false
        },
        legend: {
          enabled: false
        },
        tooltip:  {
          borderWidth: 0,
        }
    });
});

/********* FOR DARK BACKGROUNDS ***********/
// $(function() {
//     Highcharts.setOptions({
//         chart: {
//           backgroundColor: '#333',
//           // polar: true,
//           style: {
//             fontFamily: 'Helvetica Neue',
//             color: '#fff',
//           },
//
//         },
//         title: {
//           style: {
//             color: '#fff',
//             fontFamily: 'Crimson Text'
//           }
//
//         },
//         yAxis: {
//           labels: {
//            style: {
//               color: '#ccc',
//            }
//         },
//
//         },
//         xAxis: {
//           labels: {
//            style: {
//               color: '#ccc',
//            }
//          }
//         },
//         lang: {
//             thousandsSep: ','
//         },
//         exporting: {
//         	enabled: false
//         },
//         credits: {
//         	enabled: false
//         },
//         legend: {
//           enabled: false
//         },
//         tooltip:  {
//           borderWidth: 0,
//         }
//     });
// });
