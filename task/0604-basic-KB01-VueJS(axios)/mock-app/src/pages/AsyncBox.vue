<template>
  <div>
    AsyncBox 입니다
  </div>
</template>
<script setup>
import axios from 'axios';

const BASE_URL = "api/todolist"
const owner = "gdhong";

const searchTodolistById = async() => {
    let response = await axios.get(BASE_URL + `/${owner}`);
    const firstTodoId = response.data[0].id;
    const secondTodoId = response.data[1].id;

    response = await axios.get(BASE_URL + `/${owner}/${firstTodoId}`);
    console.log(`## 첫번째 Todo : `, response.data);
    response = await axios.get(BASE_URL + `/${owner}/${secondTodoId}`);
    console.log(`## 두번째 Todo : `, response.data);
}

searchTodolistById();
</script>