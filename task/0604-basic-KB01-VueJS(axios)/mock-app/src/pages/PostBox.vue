<template>
  <div>
    PostBox 입니다.
  </div>
</template>
<script setup>
import axios from 'axios';

const BASE_URL = "api/todolist"
const owner = "gdhong";

const postTodoList = async() => {
  try {
    let data = {todo: "윗몸일으키기 3세트", desc: "너무 빠르지 않게"};
    await axios.post(BASE_URL + `/${owner}`, data);
    console.log("todolist data 추가 완료", data);
  } catch (error) {
    console.error(error);
  }
}
postTodoList();
</script>