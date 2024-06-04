<template>
    <div>
        AxiosBox Vue 입니다.
    </div>
</template>

<script setup>
import axios from 'axios';

const owner = "gdhong";
// const url = "http://localhost:8000/todolist/gdhong"; <- CORS 문제 발생
// vite.config.js에서 프록시를 설정해주면 요청URL을 우회하여 데이터를 받을 수 있다
const BASEURI = "/api/todolist";
const firstTodoID = '';

const getAllTodoList = async () => {
    try {
        const response = await axios.get(BASEURI + `/${owner}`);
        console.log('전체 검색');
        console.log(response);
        console.log('# TodoList : ', response.data);
        console.log('# first : ', response.data[0]);
        
        firstTodoID = response.data[0]
    } catch (error) {
        console.log('error');
        console.log(error);
    }
}

const getFirstTodo = async () => {
    try {
        const response = await axios.get(BASEURI + `/${owner}`);
        
    } catch (error) {
        
    }
}

getAllTodoList();
</script>