<template lang>
    <div class="container">
        <div class="px-5">
            <h1 class="mb-3 my-3">Update 예제</h1> <!-- ★★★★★★잘 알아둘 것 -->
            <form class="needs-validation" novalidate @submit.prevent="submit">
                <!-- submit의 경로 이동 기능은 X, submit event는 발동 -->
                <div class="row g-3">
                    <div class="col-sm-6">
                        <!-- 정통적인 form의 식별자는 name -->
                        <label for="firstName" class="form-label">First name</label>
                        <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder=""
                            value="" required>
                        <!-- <div class="invalid-feedback"> -->
                        <div :class="firstName ? 'invalid-feedback' : ''"> <!-- 입력값이 없는 경우 해당 문구를 입력폼 하단에 출력 -->
                            Valid first name is required.
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <label for="lastName" class="form-label">Last name</label>
                        <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="" value=""
                            required>
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="email" @change="changeEmail" type="email" class="form-control" id="email"
                            placeholder="you@example.com">
                        <div :class="email_class">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div class="col-md-12">
                        <label for="country" class="form-label">Gender</label>
                        <select v-model="gender" class="form-select" id="gender" required>
                            <option value="">Choose...</option>
                            <option>Male</option> <!-- value값과 option값이 다른 경우에는 value를 따로 지정해줘야함 -->
                            <option>Female</option>
                        </select>
                        <div :class="gender ? 'invalid-feedback' : ''">
                            Please select a valid gender.
                        </div>
                    </div>

                    <hr class="my-4">
                    <div class="col-sm-6">
                        <button class="btn btn-primary btn-lg w-100" type="submit">Update</button>
                    </div>
                    <div class="col-sm-6">
                        <button class="btn btn-primary btn-lg w-100" type="reset">Clear</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import json from '@/MOCK_DATA.json' // ajax로 받아올 데이터
const member  = json[0];

const firstName = ref(member.first_name);
const lastName = ref(member.last_name);
const email = ref(member.email);
const gender = ref(member.gender);
const email_class = ref('invalid-feedback')

const changeEmail = (e) => { // (e) -> 이벤트핸들러라는 표기로 명시해둠(e.target.value로도 가져올 수 있지만 상단의 ref객체로 가져오는게 더 좋음)
    let regex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email.value && regex.test(email.value) == false) {
        email_class.value = '';
    } else {
        email_class.value = 'invalid-feedback';
    }
}

const submit = (e) => {
    let member = {
        firstName: firstName.value, // 여기서 'form'은 상단의 form태그에 선언한 name="form"의 "form"이다
        lastName: lastName.value,   // 이런 방식으로 데이터를 가져올 수 있는 방법은 form태그 뿐이다(나머지는 getElementById())
        email: email.value,
        gender: gender.value, // option's'임을 꼭 기억할것..
    }
    alert('member: ' + JSON.stringify(member));
} 
</script>