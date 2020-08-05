<template>
    <div class="index">
        <div class="box">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        //深拷贝和浅拷贝
        var user = { 
            name: '小明',
            age: 18,
            sister: {
                name: '可心'
            }
        };
        var student = JSON.parse(JSON.stringify(user)); //深拷贝
        user.sister.name = '翠花';
        console.log(student);
        console.log(user);
    }
}
</script>

<style lang="stylus" scoped>
.box
    overflow: scroll
    width: 100px
    height: 100px
    padding: 20px
    margin: 40px
    border: 10px solid red
</style>
