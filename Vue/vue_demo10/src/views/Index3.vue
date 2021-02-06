<template>
    <div class="index3">
        <div id="echarts" style="width: 600px; height: 600px;"></div>
        <button @click="btnClick">更换数据</button>
    </div>
</template>

<script>
import * as Echarts from 'echarts'
export default {
    name: 'index3',
    data () {
        return {
            option: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }
    },
    mounted () {
        this.$nextTick( () => {
            //获取echarts
            let myEcharts = Echarts.init(document.querySelector('#echarts'));
            console.log(myEcharts);
            myEcharts.setOption(this.option);
        } );
    },
    methods: {
        btnClick () {
            this.option.series[0].data = [15, 22, 26, 17, 30, 22]
        }
    },
    watch: {
        option: {
            deep: true,
            handler: function () {
                //获取echarts
                let myEcharts = Echarts.init(document.querySelector('#echarts'));
                console.log(myEcharts);
                myEcharts.setOption(this.option);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
