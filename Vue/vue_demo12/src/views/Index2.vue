<template>
    <div class="index2">
        <div id="echarts" style="width: 600px; height: 600px;"></div>
        <div>
            <button @click="changeData">修改数据</button>
        </div>
    </div>
</template>

<script>
import * as MyEcharts from 'echarts';
export default {
    name: 'index2',
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
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
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
            let myEcharts = MyEcharts.init(document.querySelector('#echarts'));
            console.log(myEcharts);
            myEcharts.setOption(this.option);
        } );
    },
    methods: {
        changeData () {
            this.option.series[0].data = [10, 25, 20, 25, 30, 35];
        }
    },
    watch: {
        'option.series': {
            deep: true,
            handler: function () {
                //获取echarts
                let myEcharts = MyEcharts.init(document.querySelector('#echarts'));
                console.log(myEcharts);
                myEcharts.setOption(this.option);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
