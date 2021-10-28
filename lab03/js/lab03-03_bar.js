document.addEventListener("DOMContentLoaded",function(){
    const labels = ["Boys 0-4 years", "Girls 0-4 years", "Boys 10-14 years", "Boys 15-19 years"]
    const data = {
        labels: labels,
        datasets: [{
            data: [10725,8990,8399,8219],
            backgroundColor: [
                 'rgb(255, 99, 132)',
                 'rgb(255, 159, 64)',
                 'rgb(255, 205, 86)',
                 'rgb(75, 192, 192)',
            ],
            borderColor: [
                    'rgb(255, 99, 132)',
                     'rgb(255, 159, 64)',
                     'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
            ],
            borderWidth: 1
        }],
    };
    const config = {
          type: 'bar',
          data: data,
          options: {
                //indexAxis默认为x，改为y后将显示垂直条状图
                indexAxis:'y',
                scales: {
                       //虽为垂直条形图，但x轴依旧默认为水平方向
                        x: {
                            title: {
                                display: true ,
                                text: "per 100,000 children",
                                font:{ size: 12},
                                padding: 10
                            }
                        },
                        y: { },
                },

                plugins:{//图表上侧的标题
                        title:{
                            display:true,
                            text:"Vulnerable Groups for Tai Po District",
                            font:{size:24},
                            padding:20
                        },
                        legend:{display:false}
                }
          }
    };
    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

})