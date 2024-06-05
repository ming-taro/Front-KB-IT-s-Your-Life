<template lang>
    <div class="container">
        <h2 class="my-3">Board List</h2>

        <router-link class="btn btn-primary mb-3" to="/list/board_create">
            Create New Post
        </router-link>

        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr class="table-dark text-white">
                    <th>id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>email</th>
                    <th>gender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in members">
                    <td>{{ item.id }}</td>
                    <td>{{ item.first_name }}</td>
                    <td>{{ item.last_name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.gender }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const members = ref([]);
const setMembers = async () => {
    const requestURL = 'http://localhost:3001/youth';
    const response = await axios.get(requestURL);
    members.value = response.data;
}
setMembers();

</script>