<template>
    <!-- 컴포넌트의 기본 HTML을 작성하는 영역 -->
    <li>
        <input type="checkbox" v-model="checked">
        <span class="test">옵션1</span>
    </li>

</template>

<script>
// script 오는 곳
export default {
    name: 'CheckBoxItem',
    data() {
        return {
            checked: false,
        };
    }
}
</script>

<style scoped>
    /* style scoped */
    /* css를 적용 가능한 영역 */
    /* 가능하면 사용하지 말고, css 파일에 정의하는 것이 일반적 */
    .test {
        color: blue;
    }
</style>