<template>
    <div class="container">
        <h2>Boxoffice API</h2>
        Date : <input type="text" v-model="date" placeholder="20240602">
        <button @click="getBoxoffice">요청</button>
        <br><br>
        <div v-for="item in boxOfficeList" :key="item.rank">
            rank : <b>{{ item.rank }}</b><br>
            movieNm : <b>{{ item.movieNm }}</b><br>
            audiAcc : <b>{{ item.audiAcc }}</b><br>
            <hr>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

// 영화 api : https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
const boxofficeURL = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=4298055d882fbc5c120b654c1fa42815';
const date = ref('20240602');
const boxOfficeList = ref([]);

// ajax를 통해 boxoffice 가져오는 메소드
// axios가 promise 기반이므로 async + await 기반으로 프로그래밍하는 것이 편함!(promise 잘 안씀)
const getBoxoffice = async (e) => {
    try {
        // url 선언하기
        const requestURL = boxofficeURL + '&targetDt=' + date.value;

        // 요청 방법 : https://axios-http.com/kr/docs/api_intro
        // 요청 config(옵션) : https://axios-http.com/kr/docs/req_config
        // await.axios()는 기본적으로 get이지만 명시해 주는게 좋다
        // const response = await axios.get(requestURL);     // 가장 간단한 get 요청방법!
        const config = { timeout: 1000, responseType: 'json' };
        const response = await axios.get(requestURL, config); // config 작성 방법!

        console.log('response');
        console.log(response);
        console.log('response.data');
        console.log(response.data);

        // 응답 스키마 : https://axios-http.com/kr/docs/res_schema
        if (response.status != 200
            || !response.data.boxOfficeResult.weeklyBoxOfficeList
            || response.data.boxOfficeResult.weeklyBoxOfficeList.length == 0) {
            alert('잘못된 요청입니다!');
            boxOfficeList = [];
            return;
        }
        boxOfficeList.value = response.data.boxOfficeResult.weeklyBoxOfficeList;
        return;
    } catch (error) {
        alert('에러 발생!');
        console.error('error');
        console.error(error);
    }

}

</script>