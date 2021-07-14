//part 1 - pop window

let brightItemHeadLineInfoButton = document.getElementsByClassName("bright-item-headLine-info-button");
let brightItemHeadLineInfoSquare = document.getElementsByClassName("bright-item-headLine-info-square");

for (let i = 0; i < brightItemHeadLineInfoButton.length; i++) {
    brightItemHeadLineInfoButton[i].addEventListener("mouseover", function() {
        brightItemHeadLineInfoSquare[i].style.display = "block";
    });
    brightItemHeadLineInfoButton[i].addEventListener("mouseout", function() {
        brightItemHeadLineInfoSquare[i].style.display = "none";
    });
}



//part 1 - pop window mobile

if (window.matchMedia("(max-width: 610px)").matches) {
    for (let i = 0; i < brightItemHeadLineInfoSquare.length; i++) {
        if (i % 2 === 0) {
            brightItemHeadLineInfoSquare[i].style.right = "0";
            brightItemHeadLineInfoSquare[i].style.left = "";

        }

    }

}

//part 2 charts


//chart1

Highcharts.chart('chart1-container', {
    chart: {
        type: 'area',
        //height: 250
        //width: 400
    },
    title: {
        text: ' '
    },
    xAxis: {
        lineWidth: 0,

        categories: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1'],
        labels: {
            useHTML: true,
            style: {
                whiteSpace: 'nowrap',
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: '10px',
                paddingBottom: '10px',


            }
        }


    },
    yAxis: {
        labels: {
            x: -10,
            y: 10,
            format: '{value}%'


        },
        tickAmount: 6,
        max: 15,
        min: -10,
        maxPadding: 0.1,
        title: {
            margin: 0,
            text: "אחוז שינוי יומי",
            padding: 0,
            style: {
                fontSize: 12,
                fontWeight: 400,
            },

        },
        gridLineWidth: 0
    },
    plotOptions: {
        series: {
            pointPadding: 1,
            // padding: 0,
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 0.8 },
                stops: [
                    [0, '#87DBFD'],
                    [1, '#ffffff']
                ]
            },
            marker: {
                fillColor: '#FFFFFF',
                lineWidth: 2,
                radius: 2.5,
                lineColor: null // inherit from series
            }
        }
    },
    tooltip: {
        enabled: false
    },

    credits: {
        enabled: false
    },
    legend: {
        enabled: false

    },
    series: [{
        name: 'John',
        data: [6, 6, 4, 8, 8, 5, -8],
        color: '#50CBFD',
        lineWidth: 2,
        useHTML: true,

    }]
});





//צארט 2 - מספר החולים קשה וקריטי

Highcharts.chart('chart2-container', {
    chart: {
        type: 'area',
        //height: 180
    },
    title: {
        text: ' '
    },
    xAxis: {
        lineWidth: 0,

        categories: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1'],

    },
    yAxis: {
        labels: {
            x: 10,
            y: -2,
            align: 'left',

        },
        tickAmount: 6,
        max: 570,
        min: 0,
        maxPadding: 0.1,
        title: {
            margin: 0,
            text: " ",
            padding: 0,
            style: {
                fontSize: 14,
                fontWeight: 400,
            },
        },
        gridLineWidth: 0
    },
    plotOptions: {
        series: {
            pointPadding: 1,
            // padding: 0,
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#66A7A8'],
                    [1, '#ffffff']
                ]
            },
            marker: {
                fillColor: '#FFFFFF',
                lineWidth: 2,
                radius: 2.5,
                lineColor: null // inherit from series
            }
        }
    },
    tooltip: {
        enabled: false
    },

    credits: {
        enabled: false
    },
    legend: {
        enabled: false

    },
    series: [{
        name: 'John',
        data: [475, 473, 515, 517, 539, 566, 561],
        color: '#368C8D',
        lineWidth: 1
    }]
});



//מספר המאומתים החדשים מחוץ לאזורי ההתפשטות צארט 3
//let chart3YAxisLabels = ['0', '500', '1000', '1500', '2000', '2500', '3000'];
document.addEventListener('DOMContentLoaded', function() {
    let chart5 = Highcharts.chart('chart3-container', {
        chart: {
            type: 'column',
            //height: 180,
            //  width: "90%"

        },
        title: {

            style: {
                display: 'none'
            }
        },
        legend: {
            style: {
                display: 'none'
            }
        },


        xAxis: {

            lineWidth: 0,

            categories: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1'],
            labels: {
                autoRotation: false,
                // step: 1

            },

            title: {
                text: null,
                style: {

                    fontSize: 14,
                    fontWeight: 400,

                }
            }
        },
        yAxis: {
            max: 3000,
            min: 0,
            tickAmount: 6,

            maxPadding: 0.5,
            title: {
                text: '   ',
                margin: 30
            },

            labels: {

                format: '{value}',

                align: 'left',
                x: -5,
                style: {
                    color: '#333333',
                    fontSize: 13,
                    fontWeight: 400,
                },
                /* formatter: function() {

                     if (this.isFirst) {
                         i = -1
                     }
                     i++;
                     return chart3YAxisLabels[i]
                 }*/
            },
            gridLineWidth: 0,

        },

        tooltip: {
            enabled: false
        },

        plotOptions: {


            series: {
                //stacking: 'normal',
                maxPointWidth: 7,
                pointPadding: 0.0001,
                color: "#B6CA51",

                dataLabels: {
                    useHTML: true,
                    enabled: true,
                    align: 'center',
                    format: '{y}',

                    style: {
                        fontWeight: 300,
                        color: "#8F929D",
                        width: 100
                    }
                }
            },
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{
            borderRadiusTopLeft: "15px",
            borderRadiusTopRight: "15px",
            data: [2300, 2400, 1500, 2200, 2000, 1800, 2340],

        }, ]
    });

});



//עקומה אפידמית

let yAxisLabels = ['0', '80400', '160800', '241200', '321600', '402000'];
let yAxisLabels2 = ['0', '400', '800', '1200', '1600', '2000'];
document.addEventListener('DOMContentLoaded', function() {
    let chart4 = Highcharts.chart('chart4-container', {
        chart: {
            type: 'column',
            height: 220
                // styledMode: true,


        },
        credits: {
            enabled: false
        },

        title: {
            text: ' '
        },
        legend: {
            // squareSymbol: false,
            rtl: true,
            align: 'right',
            verticalAlign: 'top',

            useHTML: true,
            labelFormatter: function() {
                console.log(this.yData);
                return '<span class="legend-title">' + this.name + '</span>'


            }



        },



        tooltip: {

            useHTML: true,
            shared: true,
            borderWidth: 0,
            shadow: false,
            textAlign: 'center',
            backgroundColor: "transparent",
            outline: 0,
            formatter: function() {
                return '<table style="font-size: 14; width: 170px;padding:0" ><tr><td style="text-align: center; color:#48CAFF;font-weight:700; "> ' + this.points[2].y + ' מאומתים מצטבר</td></tr><tr><td style="text-align: center; color:#949494;font-weight:700">' + this.points[1].y + 'מחלימים חדשים</td></tr> <tr><td style="text-align: center; color:#1C7D7E;font-weight:700">' + this.points[0].y + 'מאומתים חדשים </td></tr></table>'
            },


            /*
                        style: {
                            padding: 1
                        },
                        backgroundColor: "white",
                        borderWidth: 0,
                        //  split: false,
                        valueDecimals: 2,

                        followPointer: true,
                        followTouchMove: true,*/

        },
        //   tooltipsingle: false,
        /*  xAxis: {
            crosshair: true,
            displayMask: "##0.00",
            max: 1592179200000,
            min: 1579996800000,
            ordinal: false,
            showLastLabel: true,
            step: 1,
            tickInterval: 604800000,
            tickmarkPlacement: "on",
            type: "datetime"
        },
*/

        xAxis: {
            categories: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1', '9.1', '10.1', '11.1', '12.1', '13.1', '14.1'],
            title: {
                x: 0,

                text: "תאריך הבדיקה",
                align: "middle",
                textAlign: "center",
                style: {
                    fontSize: "14",
                    whiteSpace: 'nowrap',
                }
            }

        },
        plotOptions: {

            series: {
                //      pointPadding: 0.11,
                //  groupPadding: 0.34,
                borderWidth: 0,
                maxPointWidth: 22,
                enableMouseTracking: true,

                states: {
                    hover: {
                        enabled: true
                    }
                },

            },

            area: {
                color: "RGB(72,202,255)",
                fillColor: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, 'RGB(171,234,240,0.7)'],
                        [1, 'RGB(254,255,255, 0.7)']
                    ]
                }

            },

            areaspline: {},



        },


        yAxis: [{
            // gridLineWidth: 1.5,
            gridLineColor: "#CCCCCC",
            gridZIndex: 3,
            tickAmount: 6,
            title: {
                fontSize: 3,
                x: 0,
                y: -10,
                text: "מספר מקרים מצטבר",
                align: "middle",
                textAlign: "center",
                style: {
                    fontSize: "13",
                    whiteSpace: 'nowrap'
                },
                margin: 50
            },
            labels: {
                //distance: '75%',
                align: 'left',
                x: 0,
                style: {
                    color: 'RGB(84,206,255)',
                    fontSize: 13,
                    fontWeight: 500,
                },
                formatter: function() {

                    if (this.isFirst) {
                        i = -1
                    }
                    i++;
                    return yAxisLabels[i]
                }
            }
        }, {
            linkedTo: 0,
            opposite: true,
            title: {
                fontSize: 3,
                x: 0,
                y: 0,
                text: "מספר מקרים חדשים",
                align: "middle",
                textAlign: "center",
                rotation: -90,

                style: {
                    fontSize: "13",
                    whiteSpace: 'nowrap',

                },
                margin: 50
            },
            labels: {
                distance: "290%",
                align: 'right',
                x: 0,
                style: {
                    color: '#7BB4B4',
                    fontSize: 12.5,
                    fontWeight: 400,
                },
                formatter: function() {

                    if (this.isFirst) {
                        i = -1
                    }
                    i++;
                    return yAxisLabels2[i]
                }
            }

        }],
        series: [{
                maxPointWidth: 22,

                borderRadiusTopLeft: "15px",
                borderRadiusTopRight: "15px",
                color: "RGB(137,137,137)",

                name: 'מחלימים חדשים',
                data: [120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000],
                zIndex: 5
            },



            {
                borderRadiusTopLeft: "15px",
                borderRadiusTopRight: "15px",
                name: 'מאומתים חדשים',
                color: "#1E898A",

                data: [190000, 185000, 188000, 189000, 192000, 179000, 189000, 180000, 180000, 189000, 180000, 188000, 187000],
                zIndex: 5
            },
            {
                type: "area",
                name: 'מאומתים מצטבר',
                data: [320000, 320000, 320000, 320000, 320000, 320000, 320000, 320000, 320000, 320000, 322200, 322000, 321000],
                zIndex: -1,
                marker: {
                    enabled: false
                },


            }

        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 455
                },
                chartOptions: {
                    chart: {
                        width: "90%",
                        margin: [70, 30, 50, 30],
                        height: 140,
                        type: 'column',
                        // styledMode: true,
                    },
                    plotOptions: {
                        series: {
                            stacking: 'percent'
                        }
                    },
                    legend: {
                        //useHTML: true,
                        symbolHeight: 8,
                        itemDistance: 1,
                        x: 0,

                        itemHoverStyle: {
                            color: '#039'
                        },
                        itemStyle: {
                            color: 'gray',
                        }
                    },
                    xAxis: {

                        labels: {
                            padding: 10,
                            rotation: 210

                        },

                        gridZIndex: 0
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 5,
                            y: -5
                        },
                        title: {
                            x: 10,
                            style: {
                                fontSize: 10
                            }
                        },
                        gridZIndex: 0
                    },
                    series: [{
                            stacking: 'normal',

                            maxPointWidth: 16,

                            borderRadiusTopLeft: "15px",
                            borderRadiusTopRight: "15px",
                            color: "RGB(137,137,137)",

                            name: 'מחלימים חדשים',
                            data: [120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000],
                            zIndex: 5
                        },



                        {
                            stacking: 'normal',
                            borderRadiusTopLeft: "15px",
                            borderRadiusTopRight: "15px",
                            name: 'מאומתים חדשים',
                            color: "#1E898A",
                            borderRadiusTopLeft: 0,
                            borderRadiusTopRight: 0,
                            data: [190000, 185000, 188000, 189000, 192000, 179000, 189000, 180000, 180000, 189000, 180000, 188000, 187000],
                            zIndex: 5
                        },
                        {
                            type: "area",
                            name: 'מאומתים מצטבר',
                            data: [322200, 322000, 321000, 322200, 322000, 321000, 322200, 322000, 321000, 322200, 322000, 321000, 312000],
                            zIndex: -1,
                            lineWidth: 5
                        }

                    ],
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }

    });
});


// צארט חולים קשה ומונשמים 
let chart5YAxisLabels = ['0', '96', '192', '288', '384', '480'];
document.addEventListener('DOMContentLoaded', function() {
    let chart5 = Highcharts.chart('chart5-container', {
        chart: {
            type: 'line',
            height: 190

        },
        title: {

            style: {
                display: 'none'
            }
        },
        legend: {
            style: {
                display: 'none'
            }
        },

        xAxis: {

            crosshair: {
                width: 1,
                color: '#C0BEBE',
                snap: false,
                gridLineWidth: 7,


            },

            categories: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1', '9.1', '10.1', '11.1', '12.1', '13.1', '14.1',
                '15.1', '16.1', '17.1', '18.1', '19.1', '20.1', '21.1', '22.1', '23.1', '24.1', '25.1', '26.1', '27.1', '28.1', '29.1', '30.1', '31.1'
            ],
            labels: {
                autoRotation: false,
                step: 3

            },

            title: {
                text: "תאריך",
                style: {

                    fontSize: 14,
                    fontWeight: 400,

                }
            }
        },
        yAxis: {
            crosshair: {
                width: 1,
                color: '#C0BEBE',
                snap: false,
                dashStyle: "Dash"

            },
            gridLineWidth: 7,
            tickAmount: 6,

            maxPadding: 0.5,
            title: {
                text: "מספר מחלימים ליום",

                margin: 50,
                style: {
                    fontSize: 14,
                    fontWeight: 400,
                },
            },
            labels: {
                align: 'left',
                x: -3,
                style: {
                    color: '#333333',
                    fontSize: 13,
                    fontWeight: 400,
                },
                formatter: function() {

                    if (this.isFirst) {
                        i = -1
                    }
                    i++;
                    return chart5YAxisLabels[i]
                }
            },
            gridLineWidth: 1,

        },

        tooltip: {

            useHTML: true,
            shared: true,
            borderWidth: 0,
            shadow: false,
            backgroundColor: "transparent",
            outline: 0,
            formatter: function() {
                return '<table style="font-size: 14; width: 110px;padding:0;margin:0;line-height:1rem" ><tr style="width:10px;padding:0;margin:0"><td style="width:10px;padding:0;margin:0;text-align: center; color:#50CBFD;font-weight:700; padding:0 "> ' + this.points[1].y + ' חולים קשה</td></tr><tr><td style="text-align: center; color:#C8DE59;font-weight:700">' + this.points[0].y + ' מונשמים</td></tr></table>'
            },


        },
        plotOptions: {

            series: {
                //stacking: 'normal',
                lineWidth: 1,

            },
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{
                name: "חולים קשה",
                data: [96, 100, 90, 100, 101, 104, 121, 99, 98, 90, 100, 104, 121, 111, 100, 90, 99, 89, 100, 101, 104, 121, 99, 98, 90, 100, 104, 121, 111, 100, 90, 99, 89, 100],
                borderWidth: 0,
                color: "#50CBFD"
            }, {
                name: "מונשמים",
                data: [250, 250, 240, 260, 250, 250, 250, 240, 260, 250, 250, 250, 240, 260, 250, 250, 250, 240, 260, 250, 250, 250, 240, 260, 250, 250, 250, 240, 260, 250, 250, 250, 240, 260, 250],
                borderWidth: 0,
                color: "#C8DE59",
                marker: {
                    symbol: 'circle'
                }
            }


        ]


    });

});





//מערך נתונים תוכנית הרמזור
let cityTableData = [
    ["אילת", 3, 151.3, 11, 42, 74],
    ["ירושלים", 4, 150.3, 12, 21, 74],
    ["נתניה", 2, 144.3, 13, 32, 74],
    ["חדרה", 6.5, 211.3, 14, 11, 74],
    ["אילת", 7, 112.3, 15, 45, 74],
    ["ירושלים", 9, 213.3, 16, 21, 74],
    ["נתניה", 8, 321.3, 17, 33, 74],
    ["חדרה", 3.5, 432.3, 1, 55, 74],
    ["אילת", 3.5, 111.3, 1, 66, 74],
    ["ירושלים", 3.5, 126.3, 2, 77, 74],
    ["נתניה", 4.5, 421.3, 3, 77, 74],
    ["חדרה", 5.5, 654.3, 4, 42, 74],
    ["אילת", 6.5, 121.3, 5, 42, 74],
    ["ירושלים", 7.5, 111.3, 6, 42, 74],
    ["נתניה", 9.5, 156.3, 7, 42, 74],
    ["חדרה", 9.5, 532.3, 8, 42, 74],
    ["אילת", 9.5, 273.3, 11, 42, 74],
    ["ירושלים", 8.5, 128.3, 20, 42, 74],
    ["נתניה", 7.5, 151.3, 21, 42, 74],
    ["חדרה", 6.5, 151.3, 22, 42, 74],
    ["אילת", 7, 151.3, 23, 42, 74],
    ["ירושלים", 9, 151.3, 24, 42, 74],
    ["נתניה", 8, 151.3, 25, 42, 74],
    ["חדרה", 3.5, 151.3, 26, 42, 74],
    ["אילת", 3.5, 151.3, 27, 42, 74],
    ["ירושלים", 3.5, 151.3, 28, 42, 74],
    ["נתניה", 4.5, 151.3, 29, 42, 74],
    ["חדרה", 5.5, 151.3, 11, 42, 74],
    ["אילת", 6.5, 151.3, 11, 42, 74],
    ["ירושלים", 7.5, 151.3, 11, 42, 74],
    ["נתניה", 9.5, 151.3, 11, 42, 74],
    ["חדרה", 9.5, 151.3, 11, 42, 74],
    ["אילת", 9.5, 151.3, 11, 42, 74],
    ["ירושלים", 8.5, 151.3, 11, 42, 74],
    ["נתניה", 7.5, 151.3, 11, 42, 74],
    ["חדרה", 6.5, 151.3, 11, 42, 74],
    ["אילת", 7, 151.3, 11, 42, 74],
    ["ירושלים", 9, 151.3, 11, 42, 74],
    ["נתניה", 8, 151.3, 11, 42, 74],
    ["חדרה", 3.5, 151.3, 11, 42, 74],
    ["אילת", 3.5, 151.3, 11, 42, 74],
    ["ירושלים", 3.5, 151.3, 11, 42, 74],
    ["נתניה", 4.5, 151.3, 11, 42, 74],
    ["חדרה", 5.5, 151.3, 11, 42, 74],
    ["אילת", 6.5, 151.3, 11, 42, 74],
    ["ירושלים", 7.5, 151.3, 11, 42, 74],
    ["נתניה", 9.5, 151.3, 11, 42, 74],
    ["חדרה", 9.5, 151.3, 11, 42, 74],
    ["אילת", 9.5, 151.3, 11, 42, 74],
    ["ירושלים", 8.5, 151.3, 11, 42, 74],
    ["נתניה", 7.5, 151.3, 11, 42, 74],
    ["חדרה", 6.5, 151.3, 11, 42, 74],
    ["אילת", 7, 151.3, 11, 42, 74],
    ["ירושלים", 9, 151.3, 11, 42, 74],
    ["נתניה", 8, 151.3, 11, 42, 74],
    ["חדרה", 3.5, 151.3, 11, 42, 74],
    ["אילת", 3.5, 151.3, 11, 42, 74],
    ["ירושלים", 3.5, 151.3, 11, 42, 74],
    ["נתניה", 4.5, 151.3, 11, 42, 74],
    ["חדרה", 5.5, 151.3, 11, 42, 74],
    ["אילת", 6.5, 151.3, 11, 42, 74],
    ["ירושלים", 7.5, 151.3, 11, 42, 74],
    ["נתניה", 9.5, 151.3, 11, 42, 74],
    ["חדרה", 9.5, 151.3, 11, 42, 74],

];
let abc = "א";
console.log(abc.charCodeAt(0));
let cityTable = document.getElementById("table1");

//עמודות
let citysName = document.getElementsByClassName("table1-city-name");
let dayliGrade = document.getElementsByClassName("daily-grade");
let newPatients = document.getElementsByClassName("table1-new-patients-for-10k");
let presTrue = document.getElementsByClassName("pres-true");
let presChange = document.getElementsByClassName("pres-change");
let currentPatients = document.getElementsByClassName("current-patients");

// כותרות
let cityNameHeader = document.getElementById("city-table1-headline");
let dailyGradeHeader = document.getElementById("daily-grade-header");
let newPatientsHeader = document.getElementById("new-patiens-header");
let presTrueHeader = document.getElementById("pres-true");
let presChangeHeader = document.getElementById("pres-change");
let currentPatientsHeader = document.getElementById("current-patients");



loadDataToTable1();

function loadDataToTable1() {

    for (let i = 0; i < citysName.length; i++) {
        citysName[i].innerHTML = cityTableData[i][0];
    }
    for (let i = 0; i < citysName.length; i++) {
        dayliGrade[i].innerHTML = cityTableData[i][1];
        dayliGrade[i].style.width = "30px";

    }
    for (let i = 0; i < citysName.length; i++) {
        newPatients[i].innerHTML = cityTableData[i][2];
    }
    for (let i = 0; i < citysName.length; i++) {
        presTrue[i].innerHTML = cityTableData[i][3] + '%';
    }
    for (let i = 0; i < citysName.length; i++) {
        presChange[i].innerHTML = cityTableData[i][4] + '%';
    }
    for (let i = 0; i < citysName.length; i++) {
        currentPatients[i].innerHTML = cityTableData[i][5];
    }

}


let sortedStatus = undefined;
cityNameHeader.addEventListener("click", function() {

    switch (sortedStatus) {

        case "lowToHigh":
            cityTableData.sort(function(a, b) {
                return b[0].charCodeAt(0) - a[0].charCodeAt(0)
            });
            sortedStatus = "highToLow";
            break;
        case undefined:
        case "highToLow":
            cityTableData.sort(function(a, b) {
                return a[0].charCodeAt(0) - b[0].charCodeAt(0)
            });
            sortedStatus = "lowToHigh";
            break;
    }

    loadDataToTable1();
    addCorrectColor();

});


dailyGradeHeader.addEventListener("click", function() {

    switch (sortedStatus) {
        case undefined:
        case "lowToHigh":
            cityTableData.sort(function(a, b) {
                return b[1] - a[1]
            });
            sortedStatus = "highToLow";
            break;
        case "highToLow":
            cityTableData.sort(function(a, b) {
                return a[1] - b[1]
            });
            sortedStatus = "lowToHigh";
            break;
    }

    loadDataToTable1();
    addCorrectColor();

});

newPatientsHeader.addEventListener("click", function() {

    switch (sortedStatus) {
        case undefined:
        case "lowToHigh":
            cityTableData.sort(function(a, b) {
                return b[2] - a[2]
            });
            sortedStatus = "highToLow";
            break;
        case "highToLow":
            cityTableData.sort(function(a, b) {
                return a[2] - b[2]
            });
            sortedStatus = "lowToHigh";
            break;
    }

    loadDataToTable1();
    addCorrectColor();

});

presTrueHeader.addEventListener("click", function() {

    switch (sortedStatus) {
        case undefined:
        case "lowToHigh":
            cityTableData.sort(function(a, b) {
                return b[3] - a[3]
            });
            sortedStatus = "highToLow";
            break;
        case "highToLow":
            cityTableData.sort(function(a, b) {
                return a[3] - b[3]
            });
            sortedStatus = "lowToHigh";
            break;
    }

    loadDataToTable1();
    addCorrectColor();

});

presChangeHeader.addEventListener("click", function() {

    switch (sortedStatus) {
        case undefined:
        case "lowToHigh":
            cityTableData.sort(function(a, b) {
                return b[4] - a[4]
            });
            sortedStatus = "highToLow";
            break;
        case "highToLow":
            cityTableData.sort(function(a, b) {
                return a[4] - b[4]
            });
            sortedStatus = "lowToHigh";
            break;
    }

    loadDataToTable1();
    addCorrectColor();

});

currentPatientsHeader.addEventListener("click", function() {

    switch (sortedStatus) {
        case undefined:
        case "lowToHigh":
            cityTableData.sort(function(a, b) {
                return b[5] - a[5]
            });
            sortedStatus = "highToLow";
            break;
        case "highToLow":
            cityTableData.sort(function(a, b) {
                return a[5] - b[5]
            });
            sortedStatus = "lowToHigh";
            break;
    }

    loadDataToTable1();
    addCorrectColor();

});





//console.log(cityTableData.length);


//  צארט תכנית הרמזור

let table1 = document.getElementById("table1");
let cityName = table1.getElementsByTagName("strong");

for (let i = 0; i < cityName.length; i++) {
    cityName[i].style.direction = "rtl";
}

addCorrectColor();

function addCorrectColor() {

    for (let i = 0; i < dayliGrade.length; i++) {


        dayliGrade[i].style.fontWeight = "600";

        dayliGrade[i].classList.remove(dayliGrade[i].classList.item(1));
        if (dayliGrade[i].innerHTML * 1 <= 4)
            dayliGrade[i].classList.add("green-background");
        else if (dayliGrade[i].innerHTML * 1 > 4 && dayliGrade[i].innerHTML * 1 <= 5.5)
            dayliGrade[i].classList.add("yellow-background");
        else if (dayliGrade[i].innerHTML * 1 > 5.5 && dayliGrade[i].innerHTML * 1 <= 7)
            dayliGrade[i].classList.add("orange-background");
        else if (dayliGrade[i].innerHTML * 1 > 7)
            dayliGrade[i].classList.add("red-background");
    }
}




//צארט7  בדיקות לגילוי נדבקים

let chart7YAxisLabels = ['0', '20000', '40000', '60000', '80000', '100000', '120000'];
document.addEventListener('DOMContentLoaded', function() {
    let chart5 = Highcharts.chart('chart7-container', {
        chart: {
            type: 'column',
            //height: 180,
            //  width: "90%"

        },
        title: {

            style: {
                display: 'none'
            }
        },
        legend: {
            style: {
                display: 'none'
            }
        },


        xAxis: {

            lineWidth: 0,

            categories: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1'],
            labels: {
                autoRotation: false,
                // step: 1

            },

            title: {
                text: 'תאריך הבדיקה',
                style: {

                    fontSize: 14,
                    fontWeight: 400,

                }
            }
        },
        yAxis: {
            max: 120000,
            min: 0,
            tickAmount: 6,
            maxPadding: 0.5,
            title: {
                text: 'מספר בדיקות',
                margin: 40
            },

            labels: {
                align: 'left',
                x: 10,
                style: {
                    color: '#333333',
                    fontSize: 13,
                    fontWeight: 400,
                },
                format: '{value}'
                    /*      formatter: function() {

                              if (this.isFirst) {
                                  i = -1
                              }
                              i++;
                               return chart7YAxisLabels[i]
                          }*/
            },
            gridLineWidth: 0,

        },

        tooltip: {
            enabled: false
        },

        plotOptions: {


            series: {
                borderWidth: 0,
                stacking: 'normal',
                maxPointWidth: 12,
                pointPadding: 0.0001,
                enableMouseTracking: false,

                states: {
                    hover: {
                        enabled: false,
                        opacity: 1
                    }
                }
            },
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{

                borderRadiusTopLeft: "15px",
                borderRadiusTopRight: "15px",
                data: [93000, 95000, 95400, 94000, 96000, 93000, 95000],
                color: "#50CBFD",
                dataLabels: {
                    format: '{y}',
                    //rtl: false,
                    //    textAlign: 'center',
                    y: -70,
                    useHTML: true,
                    enabled: true,
                    align: 'center',
                    style: {
                        //rtl: false,
                        // textAlign: 'center',

                        fontWeight: 500,
                        color: "#8F929D",
                        width: 100
                    }
                }
            },
            {
                data: [5000, 4000, 4000, 4000, 4000, 4000, 4000],
                color: '#1C7D7E',
                dataLabels: {
                    padding: 2,
                    style: {
                        fontWeight: 300
                    },

                    useHTML: true,
                    color: '1E898A',
                    enabled: true,
                    align: 'center',
                    enabled: true,
                    borderRadius: 3,
                    backgroundColor: '#FFFFFF',
                    borderWidth: 2,
                    borderColor: '#1E898A',
                    y: -14,
                    formatter: function() {
                        let pcnt = (this.y / 90000) * 100;
                        return Highcharts.numberFormat(pcnt) + '%';
                    }
                }
            }
        ]
    });

});



// צארט 4 בתוך טבלה 

$(document).ready(function() {
    // Using classes to select multiple containers
    var $containers = $(".table2-chart");
    // You just set the configuration object once
    var chartConfig = {
        chart: {
            type: 'bar',
            renderTo: 'container',
        },
        title: {

            style: {
                display: 'none'
            }
        },
        legend: {
            style: {
                display: 'none'
            }
        },
        plotOptions: {
            series: {
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        colorAxis: {
            minColor: "#EFF5F9",
            maxColor: "#50CBFD"
        },

        xAxis: {
            categories: ['Africa'],
            title: {
                text: null
            },

            labels: {
                enabled: false

            },
            visible: false
        },
        yAxis: {
            visible: false,
            min: 0,
            title: {
                enable: false
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 0,
            labels: {
                enabled: false
            }
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            },
            series: {
                stacking: 'normal',
            },
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{
                name: null,
                data: [50],
                //  colorValue: 3,
                borderRadiusTopLeft: "15px",
                borderRadiusTopRight: "15px",
                borderWidth: 0
            },
            {
                name: null,
                data: [100],
                borderWidth: 0

            }

        ]
    };
    // And then for every container init Hightchart with the same object 
    $containers.each(function() {
        $(this).highcharts(chartConfig);
    });

});


///// צארט 5 פאי
document.addEventListener('DOMContentLoaded', function() {
    let chart4 = Highcharts.chart('chart8-container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',

        },
        credits: {
            enabled: false
        },
        title: {
            text: 'סה"כ',
            y: 225
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false,

            // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            series: {
                states: {
                    hover: {
                        halo: {
                            size: 9,
                            opacity: 1,
                            /*attributes: {
                                // fill: Highcharts.getOptions().colors[2],
                                'stroke-width': 1,
                                'stroke': 'rgb(0,0,0,0.6)'
                            } */


                        }
                    }
                }

            },
            pie: {
                borderWidth: 0,
                center: ["52%", "48%"],
                allowPointSelect: true,
                cursor: 'pointer',
                size: '90%',
                dataLabels: {
                    distance: '10',
                    connectorShape: 'crookedLine',
                    crookDistance: '90%',
                    style: {
                        fontWeight: "300",
                        fontSize: 13,
                        whiteSpace: "wrap",
                        width: "30px"

                    },
                    y: -25,
                    textAlign: "center",
                    alignTo: 'plotEdges',
                    softConnector: false,
                    formatter: function() {
                        return this.key + ': ' + this.y;
                    },
                    useHTML: true,
                    formatter: function() {
                        return this.point.name + '<br>' +
                            '<span style="color:' + this.point.color + '">' + this.point.y + '</span>';
                    },
                },
                showInLegend: true,
                states: {
                    hover: {
                        opacity: 1,
                        brightness: 0,

                    },
                    inactive: {
                        opacity: 1
                    }

                },

            }
        },

        series: [{
            styledMode: true,
            className: "pie1",
            name: 'סהכ',
            colorByPoint: true,
            innerSize: '75%',

            data: [{
                name: 'אחים/ות',
                color: "#C8DE59",
                y: 180,
            }, {
                name: 'רופאים/ות',
                color: '#50CBFD',
                y: 100,
                dataLabels: {
                    y: 5,
                    x: 5,
                    distance: 11
                },
            }, {
                name: 'מקצועות אחרים',
                color: '#237D7D',
                y: 400
            }]
        }]
    });
});




// צארט נפטרים 
let chart9YAxisLabels = ['0', '10', '20', '30', '40', '47'];
document.addEventListener('DOMContentLoaded', function() {
    let chart5 = Highcharts.chart('chart9-container', {
        chart: {
            type: 'column',
            height: 180,
            //  width: "90%"

        },
        title: {

            style: {
                display: 'none'
            }
        },
        legend: {
            style: {
                display: 'none'
            }
        },


        xAxis: {
            crosshair: {
                width: 1,
                color: '#C0BEBE',
                snap: false

            },

            categories: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1', '9.1', '10.1', '11.1', '12.1', '13.1', '14.1',
                '15.1', '16.1', '17.1', '18.1', '19.1', '20.1', '21.1', '22.1', '23.1', '24.1', '25.1', '26.1', '27.1', '28.1', '29.1', '30.1', '31.1'
            ],
            labels: {
                autoRotation: false,
                step: 3

            },

            title: {
                text: "תאריך",
                style: {

                    fontSize: 14,
                    fontWeight: 400,

                }
            }
        },
        yAxis: {
            crosshair: {
                width: 1,
                color: '#C0BEBE',
                snap: false,
                dashStyle: "Dash"

            },
            tickAmount: 6,

            maxPadding: 0.5,
            title: {
                text: "מספר נפטרים ליום",
                x: -15,
                style: {
                    fontSize: 14,
                    fontWeight: 400,
                },


            },


            labels: {
                align: 'left',
                x: 0,
                style: {
                    color: '#333333',
                    fontSize: 13,
                    fontWeight: 500,
                },
                formatter: function() {

                    if (this.isFirst) {
                        i = -1
                    }
                    i++;
                    return chart9YAxisLabels[i]
                }
            },
            gridLineWidth: 1,

        },


        tooltip: {
            backgroundColor: null,
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            style: {
                color: '#388D8E',
                fontWeight: 'bold',
                fontSize: 15,

            },
            formatter: function() {
                return '<b>' + this.y +
                    ' נפטרים '
            }
        },
        plotOptions: {

            series: {
                //stacking: 'normal',
                maxPointWidth: 15,
                pointPadding: 0.0001,
                color: "#1C7D7E"
            },
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{
                // name: null,
                data: [12, 17, 6, 4, 12, 17, 6, 4, 12, 17, 6, 4, 12, 17, 6, 4, 12, 17, 6, 4, 12, 17, 6, 4, 12, 17, 6, 4, 17, 6, 4],
                borderWidth: 0
            },


        ]


    });

});


// צארט מחלימים 
let chart10YAxisLabels = ['0', '700', '1400', '2100', '2500'];
document.addEventListener('DOMContentLoaded', function() {
    let chart5 = Highcharts.chart('chart10-container', {
        chart: {
            type: 'line',
            height: 190

        },
        title: {

            style: {
                display: 'none'
            }
        },
        legend: {
            style: {
                display: 'none'
            }
        },


        xAxis: {
            crosshair: {
                width: 1,
                color: '#C0BEBE',
                snap: false

            },

            categories: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1', '9.1', '10.1', '11.1', '12.1', '13.1', '14.1',
                '15.1', '16.1', '17.1', '18.1', '19.1', '20.1', '21.1', '22.1', '23.1', '24.1', '25.1', '26.1', '27.1', '28.1', '29.1', '30.1', '31.1'
            ],
            labels: {
                autoRotation: false,
                step: 3

            },

            title: {
                text: "תאריך",
                style: {

                    fontSize: 14,
                    fontWeight: 400,

                }
            }
        },
        yAxis: {
            crosshair: {
                width: 1,
                color: '#C0BEBE',
                snap: false,
                dashStyle: "Dash"

            },
            tickAmount: 6,

            maxPadding: 0.5,
            title: {
                text: "מספר מחלימים ליום",

                margin: 50,
                style: {
                    fontSize: 14,
                    fontWeight: 400,
                },


            },


            labels: {
                align: 'left',
                x: -3,
                style: {
                    color: '#333333',
                    fontSize: 13,
                    fontWeight: 500,
                },
                formatter: function() {

                    if (this.isFirst) {
                        i = -1
                    }
                    i++;
                    return chart10YAxisLabels[i]
                }
            },
            gridLineWidth: 1,

        },


        tooltip: {
            backgroundColor: null,
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            style: {
                color: '#50CBFD',
                fontWeight: 'bold',
                fontSize: 15,

            },
            formatter: function() {
                return '<b>' + this.y
            }
        },
        plotOptions: {

            series: {
                //stacking: 'normal',
                lineWidth: 1,
                color: "#50CBFD"
            },
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{
                // name: null,
                data: [1200, 170, 600, 466, 1582, 1097, 609, 466, 125, 1447, 446, 454, 1752, 1677, 400, 884, 912, 817, 776, 674, 912, 817, 776, 764, 812, 617, 656, 874, 817, 766, 664],
                borderWidth: 0
            },


        ]


    });

});

// צארט פילוח מדדים שונים על פי גיל ומגדר


chart11YAxisLabels = ['20', '10', '0', '10', '20'];
Highcharts.chart('chart11-container', {

    chart: {
        type: 'bar',
        height: 280
    },
    title: {

        text: null
    },
    credits: {
        enabled: false
    },
    subtitle: {
        text: null

    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
        }
    },
    legend: {
        useHTML: true,
        align: 'right',
        verticalAlign: 'top',
        layout: 'horizontal',
        x: -17,
        y: 0,
        float: true,
        reversed: true,
        rtl: true,
        margin: 0,
        padding: 10,
        itemStyle: {
            fontSize: 15,
            fontWeight: 100,
            lineHeight: 1.3
        },
        symbolHeight: 11,
        itemDistance: 10,
        symbolPadding: 0
    },
    xAxis: {
        crosshair: {
            width: 1,
            color: '#C0BEBE',
            snap: false,
            dashStyle: "Dash"

        },
        categories: ['0-9', '10-19', '20-29', '30-39',
            '40-49', '50-59', '60-69', '70-79', '80-89',
            '90+'
        ],
        labels: {
            align: 'left',
            x: -3
        },

        step: 1,
        reversed: false,
        title: {
            text: "קבוצת גיל",

            margin: 38,
            style: {
                fontSize: 12,
                fontWeight: 400,
            },


        },
        gridLineColor: '#E5E5E5',
        gridLineWidth: 1
    },
    yAxis: {
        crosshair: {
            width: 1,
            color: '#C0BEBE',
            snap: false,
            dashStyle: "Dash"

        },
        title: {
            text: "%סה\"כ",
            style: {
                fontSize: 14,
                fontWeight: 400,
            },
            margin: 10
        },
        tickAmount: 5,

        gridLineColor: '#E5E5E5',
        gridLineWidth: 1,

        labels: {
            formatter: function() {

                if (this.isFirst) {
                    i = -1
                }
                i++;
                return chart11YAxisLabels[i]
            }
        }
        /*  labels: {
              formatter: function() {
                  return Math.abs(this.value) + '%';
              }
          },
          accessibility: {
              description: 'Percentage population',
              rangeDescription: 'Range: 0 to 5%'
          }*/
    },

    plotOptions: {
        series: {
            stacking: 'normal',
            states: {
                inactive: {
                    opacity: 1
                }
            }

        }
    },


    tooltip: {

        style: {
            fontWeight: 'bold',
            textAlign: 'right',
            fontSize: 14,
            fontWeight: 700
        },

        backgroundColor: null,
        borderWidth: 0,
        useHTML: true,
        /*formatter() {
            return this.series.name + ' ' + this.x + '</br>' + this.y * (this.series.name === 'גברים' ? 1 : -1)
        }*/

        /*  formatter() {
              return '<div style="color:{point.color}"> ' +
                  this.series.name + ' ' + this.x + '</br>' + this.y * (this.series.name === 'גברים' ? 1 : -1) +
                  '</div>';
          },*/

        formatter: function() {
            let l = 0
            let populationByAge = [300000, 400000, 450000, 360000, 410000, 330000, 345000, 248855, 345555, 465544]
            let thisY = this.y * (this.series.name === 'גברים' ? 1 : -1)
            return '<div style="color:' + this.series.color + '!important;" class="tooltip"> ' + this.series.name + ' ' + this.x + '</br>' + thisY + '%' + '(' + populationByAge[l] + ')' +
                '</div>';


        }



    },


    series: [{
        name: 'נשים',
        data: [-2.2, -2.1, -2.2, -2.4, -2.7, -3.0, -3.3, -3.2, -2.9, -0.5],
        color: "#B5C951",
        borderRadiusBottomLeft: "7px",
        borderRadiusBottomRight: "7px",
        lineWidth: 2,
        states: {
            hover: {

            }
        },

    }, {
        name: 'גברים',
        data: [
            2.1, 2.0, 2.1, 2.3, 2.6,
            2.9, 3.2, 2.3, 3.6, 0.5
        ],
        color: "#50CBFD",
        borderRadiusTopLeft: "7px",
        borderRadiusTopRight: "7px"
    }]
});