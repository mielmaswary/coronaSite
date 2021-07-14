document.addEventListener('DOMContentLoaded', function() {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        plotOptions: {
            series: {
                pointPadding: 0.3,
                groupPadding: 0,
            }
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            borderRadiusTopLeft: "20px",
            borderRadiusTopRight: "20px",
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            borderRadiusTopLeft: "2px",
            borderRadiusTopRight: "2px",
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});