<template>
    <div class="index19">
        <p class="p1">

        </p>
        <p class="p2">

        </p>
    </div>
</template>

<script>
export default {
    name: 'index19',
    mounted () {
        //HTML DOM节点 父节点parentNode 下一个节点NextSibling 上一个节点PreviousSibling
        //获取p1
        let p1 = document.querySelector('.p1');
        console.log(p1);
        //下一个节点
        let p2 = p1.nextSibling;
        console.log(p2);
        //上一个节点
        let _p1 = p2.previousSibling;
        console.log(_p1);
        //获取父节点
        let _p1_parentNode = p1.parentNode;
        console.log(_p1_parentNode);

        //HTML DOM方法 在DOM节点上执行的动作
        let a = document.createElement('a');
        _p1_parentNode.appendChild(a);

        //HTML DOM属性 在DOM节点上设置或者获取值
        a.setAttribute('class', 'index19_a');
    }
}
</script>

<style lang="stylus" scoped>

</style>
