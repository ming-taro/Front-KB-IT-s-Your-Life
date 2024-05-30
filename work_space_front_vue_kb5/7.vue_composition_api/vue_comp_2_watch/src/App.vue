<template>
    <div>
        <Calc1 />
        <hr><br>

        <Calc2 />
        <hr><br>

        <Calc3 />
        <hr><br>

        <Calc4 />
        <hr><br>
    </div>
</template>
<script>
import Calc1 from './components/Calc1.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';

export default {
    name: 'App',
    components: { Calc1, Calc2, Calc3, Calc4 },
    data() {
        return { calcResult: 0 }
    },
    methods: {
        // 사용자(내가 정의한) 이벤트
        myCalcEvent(value) {
            alert(value);
        }
    }
}
</script>