<template>
    <div class="index4">
        <div>
            firstName：<input type="text" v-model="firstName"/>
        </div>
        <div>
            lastName：<input type="text" v-model="lastName"/>
        </div>
        <div>
            fullName：{{fullName}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'index4',
    data () {
        return {
            firstName: '',
            lastName: ''
        }
    },
    computed: {
        fullName: {
            get () {
                return this.firstName + this.lastName;
            },
            set (val) {
                console.log(val);
            }
        }
    },
    watch: {
        firstName: {
            deep: true,
            handler: function () {
                this.lastName = this.firstName;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
