<script setup>
import Task from './components/task.vue'
// @ts-ignore
import { useTaskStore } from '@/store/taskList.js';
import { ref,computed } from 'vue';
const task =ref('');
const taskList = computed(()=>{
    return useTaskStore().taskList
})
const addTask = () => {
    let tasks = taskList.value;
    if (!task.value) return ElMessage.error('请输入。。。');
    let id = 0;
    tasks.forEach(item=> {
        if (item.id>id) id = item.id
    })
    tasks.unshift({
        id: id+1,
        content:task.value,
        isDone:false
    })
    useTaskStore().updateTaskList(tasks)
    task.value = '';
}
const delTask = (id) => {
    let tasks = taskList.value.filter(item => item.id !== id)
    useTaskStore().updateTaskList(tasks)
};
const toggleIsDone = (id) => {
    let tasks = taskList.value.map(item => {
        if (item.id === id) {
            item.isDone = !item.isDone
        }
        return item
    })
    useTaskStore().updateTaskList(tasks)
};
</script>
<template>
    <div>
        <!-- <el-button type="primary">
            <el-icon style="vertical-align: middle;">
                <back />
            </el-icon>
            <span style="vertical-align: middle;"> 返回 </span>
        </el-button> -->
        <router-link class="back" to="/">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></svg>
        </router-link>
        <h1>TO DO DEMO</h1>
        <el-row justify="center">
            <el-col :span="6">
                <el-input placeholder="write something to do..." v-model="task" @keyup.enter="addTask"></el-input>
            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col :span="8">
                <ul>
                    <Task v-for="item in taskList" :task="item" :key="item.id" @delete="delTask" @click.prevent="toggleIsDone(item.id)"/>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    h1 {
        text-align: center;
        color:aqua;
    }
    ul {
        margin: 30px 0 30px 0;
    }
    .back {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        color: aqua;
        cursor: pointer;
    }
</style>