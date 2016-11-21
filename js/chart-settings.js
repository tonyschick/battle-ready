
/******** FOR LIGHT BACKGROUNDS ***********/
// $(function() {
//     Highcharts.setOptions({
//         chart: {
//           style: {
//             fontFamily: 'Helvetica Neue',
//           }
//         },
//         title: {
//           style: {
//             fontFamily: 'Crimson',
//           }
//         }
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

/********* FOR DARK BACKGROUNDS ***********/

$(function() {
    Highcharts.setOptions({
        chart: {
          backgroundColor: '#333',
          // polar: true,
          style: {
            fontFamily: 'Helvetica Neue',
            color: '#fff',
          },

        },
        title: {
          style: {
            color: '#fff',
            fontFamily: 'Crimson Text'
          }

        },
        yAxis: {
          labels: {
           style: {
              color: '#ccc',
           }
        },

        },
        xAxis: {
          labels: {
           style: {
              color: '#ccc',
           }
        },

        },
        // style: {
        //  color: '#F00',
        //  backgroundColor: '#333'
        //  font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        // }
        // title: {
        //   style: {
        //     fontFamily: 'Crimson',
        //   }
        // }
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
