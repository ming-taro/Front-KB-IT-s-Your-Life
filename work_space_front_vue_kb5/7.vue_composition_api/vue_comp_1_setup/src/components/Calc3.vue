<template>
    <div>
        <h3>3. reactive</h3>
        <div> - 객체의 반응형 프록시(proxy)를 반환하는 방법 </div>
        <div> - 단일이 아닌 여러개의 동시에 반응형(ref)으로 선언할때 활용 </div>
        <div> - -> ref로 선언하는게 일반적이라 잘 사용되진 않는다. </div>
        <div>https://ko.vuejs.org/api/reactivity-core.html#reactive</div>
        <br>

        <!-- state.x로 하면 string을 덧붙이는 결과가 나오기 때문에 number로 캐스팅해줘야 함 -->
        X : <input type="text" v-model.number="state.x" /><br />
        Y : <input type="text" v-model.number="state.y" /><br />
        <button @click="calcAdd">계산</button><br />
        <div>결과 : {{ state.result }}</div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';

const state = reactive({x: 10, y: 20, result: 30});
const calcAdd = () => {
    state.result = state.x + state.y;
}

</script>