//src/store/user.ts

import { defineStore } from 'pinia'
const defaultList = JSON.parse(localStorage.getItem('taskList'))|| [
  {id:1,content:"吃饭",isDone: true},
  {id:2,content:"睡觉",isDone: false},
  {id:3,content:"打豆豆",isDone: true},
];

export const useTaskStore = defineStore({
  id: 'taskList', // id必填，且需要唯一(类似命名空间)
  state: () => {
    return {
        taskList: defaultList
    }
  },
  actions: {
    updateTaskList(payload) {
      this.taskList = payload;
      window.localStorage.setItem('taskList',JSON.stringify(payload))
    }
  } 
})