<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <!-- <hello></hello> -->
        <h1 v-text="msg"></h1>
        <input type="text" v-model="newItem" @keyup.enter="addNew">
        <ul>
            <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="enters(item)">
                {{item.label}}
            </li>
        </ul>
        <ComponentA></ComponentA>
    </div>
</template>
<script>
import Hello from './components/Hello'
import ComponentA from './components/componentA'
import Store from './store.js'

export default {
    name: 'app',
    components: {
        // Hello,
        ComponentA
    },
    data() {
            return {
                msg: '一个toDoList',
                newItem: '',
                items: [],
            }
        },
        watch: {
            items: {
                handler(items) {
                    Store.save(items);
                },
                deep: true
            }
        },
        methods: {
            enters(item) {
                item.isFinished = !item.isFinished;
            },
            addNew() {
                this.items.push({
                    label: this.newItem,
                    isFinished: false
                });
                this.newItem = '';
            }
        }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.finished {
    color: red;
}
</style>
