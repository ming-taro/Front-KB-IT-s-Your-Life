<template>
    <li>
        <input type="checkbox" :checked="idol.checked"> {{ idol.id }} - {{ idol.name }}
    </li>
</template>

<script>
export default {
    name: 'CheckBoxItem2',
    props: ['idol'],
}
</script>