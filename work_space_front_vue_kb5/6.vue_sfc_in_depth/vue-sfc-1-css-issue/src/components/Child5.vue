<template>
    <div :class="$style.child">
        <h2>Child5 - main.css에 child5로 별도로 선언한 영역</h2>
    </div>
</template>
<script>
export default {
    name: "Child5",
    created() {
        console.log(this.$style);
    },
}
</script>