<template>
    <div class="back">
        <button @click="$router.go(-1)">返回</button>
    </div>
</template>

<script>
export default {
    name: 'back'
}
</script>
