<template>
    <li class="list-group-item" :class="{ 'list-group-item-success': completed }"
        @click="emitter.emit('toggle-completed', id)"
    >
    <span class="pointer" :class="{'todo-done': completed}">
        {{ todo }} {{ completed ? '완료' : ''}} 
    </span>
    <span class="float-end badge bg-secondary pointer"
        @click.stop="emitter.emit('delete-todo', id);"
    >
        삭제
    </span>
    </li>
</template>
<script>
export default {
    name: 'TodoListItem',
    props: {
        // id: Number 보다는 아래처럼 객체로 선언하는걸 추천
        id: {
            type: Number,
            required: true,
        },
        todo: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            required: false,
            default: false,
        }
    }
}
</script>