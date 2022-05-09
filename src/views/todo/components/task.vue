<template>
    <li :class="{isDone:task.isDone}">
        <el-checkbox v-model="task.isDone"></el-checkbox>
        <span>{{task.content}}</span>
        <el-button type="danger" @click="handleDel">删除</el-button>
    </li>
</template>
<script setup>
const props = defineProps({
  task: Object,
});
const emit = defineEmits(['delete']);
const handleDel = () => {
    emit('delete',props.task.id)
};
</script>
<style lang="less">
    li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0 20px 0;
        padding: 5px 20px 5px 20px;
        position: relative;
        border: 1px solid #000;
        border-radius: 4px;
    }
    .isDone{
        background-color: #fc8500;
        color: white;
    }
    .isDone::before {
        content:'';
        width:70%;
        border:1px dashed #000;
        position: absolute;
        transform: translateY(50%);
    }
</style>