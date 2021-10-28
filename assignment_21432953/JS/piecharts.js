document.addEventListener("DOMContentLoaded",function(){
    const labels = ["2-bedroom", "3-bedrooms(135 sq.m.)", "3-bedrooms(150 sq.m.)","4-bedrooms"]
    const data = {
        labels: labels,
        datasets: [{
            data: [3,28,30,7],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(44, 205, 75)'
            ],
            hoverOffset: 4
        }],
    };
    const config = {
          type: 'doughnut',
          data: data,
          options: {
                plugins:{//图表上侧的标题
                     title:{
                        display:true,
                        text:"Number of bedrooms",
                        font:{size:30},
                        padding:20
                     },
                     //显示图例
                    legend:{display:true}
                },
                radius:"55",
          }
    };
    var myChart = new Chart(
        document.getElementById('myChart1'),
        config
    );

})