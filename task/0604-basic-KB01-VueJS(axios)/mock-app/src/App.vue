<script setup>
import axios from 'axios';

const requesrAPI = () => {
  // const url = "http://localhost:8000/todolist/gdhong"; <- CORS 문제 발생
  // vite.config.js에서 프록시를 설정해주면 요청URL을 우회하여 데이터를 받을 수 있다
  const url = "/api/todolist/gdhong";

  axios.get(url).then((response) => {
    console.log('# 응답객체 : ', response);
  }).catch((error) => {
    console.log('error');
    console.log(error);
  })
}

requesrAPI();
</script>

<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>