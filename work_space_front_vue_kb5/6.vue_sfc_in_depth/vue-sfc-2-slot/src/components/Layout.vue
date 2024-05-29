<template>
    <Layout>
        <!-- 사용자가 정의한 slot이 작성되는 영역 -->
        <template v-slot:header>
        </template>
        <template v-slot:sidebar>
        </template>
        <template v-slot:default>
        </template>
        <template v-slot:footer>
        </template>
    </Layout>

    <div class="wrapper">
        <header class="box header">
            <slot name="header"></slot>
        </header>
        <aside class="box sidebar">
            <slot name="sidebar"></slot>
        </aside>
        <section class="box content">
            <!-- default 자리 -->
            <slot></slot>
        </section>
        <footer class="box footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
body {
    margin: 40px;
}

.sidebar {
    grid-area: sidebar;
}

.content {
    grid-area: content;
    position: relative;
}

.header {
    grid-area: header;
}

.footer {
    grid-area: footer;
}

.wrapper {
    display: grid;
    grid-gap: 5px;
    grid-template-rows: 100px 1fr 100px;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
        "header  header"
        "content sidebar"
        "footer  footer";
    background-color: #fff;
    color: #444;
}

.box {
    background-color: #ddd;
    color: #444;
    border-radius: 5px;
    padding: 10px;
    font-size: 100%;
}
</style>