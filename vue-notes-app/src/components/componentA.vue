<template>
    <div class="componentA">
        <h2>{{title}}</h2>
        <button @click="onClick">click</button>
    </div>
</template>
<script>
export default {
	name:'componentA',
    data() {
            return {
                title: 'yes'
            }
        },
        methods: {
            onClick() {
                console.log('+++++++++++++++++', this.title)
            }
        }
}
</script>
<style>
h2 {
    color: blue;
}
</style>
