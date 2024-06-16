<template>
    <div>
        AxiosBox Vue 입니다
    </div>
</template>

<script setup>
import axios from 'axios';

// const url = "http://localhost:8000/todolist/gdhong"; <- CORS 문제 발생
// vite.config.js에서 프록시를 설정해주면 요청URL을 우회하여 데이터를 받을 수 있다
const BASE_URL = "api/todolist"
const owner = "gdhong";

const searchAllTodolist = async () => {
    try {
        const response = await axios.get(BASE_URL + `/${owner}`);
        const todolist = response.data;
        console.log('#Todo List: ', todolist);
    } catch (error) {
        console.error(error);
    }
}
searchAllTodolist();
</script>