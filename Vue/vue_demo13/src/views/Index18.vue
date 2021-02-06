<template>
    <div class="index18">

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'index18',
    mounted () {
        //请求blobRouter接口
        axios({
            method: 'get',
            url: '/api/blobRouter',
            responseType: 'blob'
        }).then( res => {
            res = res.data;
            console.log(res);
            //URL.createObjectURL
            let file = URL.createObjectURL(res);
            console.log(file);
            //创建a元素
            let a = document.createElement('a');
            console.log(a);
            //获取index18元素
            let index18 = document.querySelector('.index18');
            console.log(index18);
            //将a元素放置index18元素下
            index18.appendChild(a);
            //设置a元素的内容
            a.innerText = '下载文件';
            //设置a元素的属性
            a.setAttribute('href', file);
            a.setAttribute('download', true);
        } );
    }
}
</script>

<style lang="stylus" scoped>

</style>
