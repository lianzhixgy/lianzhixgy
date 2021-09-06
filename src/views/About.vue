<template>
  <div class="about">
    <h1>{{id}}</h1>
    <div ref="chart" style="height: 500px;width: 600px;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import {reactive,ref,onMounted} from 'vue'
  export default {
    setup(){ // 启动函数
      const state = reactive({   // 创建响应式数据对象
        id:1,
        chart:ref(),
        data: [100,200,300,400,500,200,300],
        type: 'line'
      });
      const init=()=>{    // 定义方法
        if(state.chart){
          //  图表初始化
          var mychart = echarts.init(state.chart);
          //  图表的配置数据
          const option = {
            xAxis: {    //X轴
              type: 'category',
              data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
            },
            yAxis: {    //Y轴
              type: 'value'
            },
            // series: [
            //   {
            //     data: [100,200,300,400,500,200,300],    // 图表的数据
            //     type: 'line'  //  图表的类型
            //   }
            // ]
            series: [
              {
                data:state.data,
                type:state.type
              }
            ]
          }
          //   指定配置项和数据显示
          mychart.setOption(option);
        }
      }
      onMounted(()=>{
        init()
      })
      return state;
    }
  }
</script>
