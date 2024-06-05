<template lang>
    <div class="container">
        <div class="px-5">
            <h1 class="mb-3 my-3">Input 예제 - 전통적인 form 활용</h1> <!-- ★★★★★★잘 알아둘 것 -->
            <form name="form" class="needs-validation" novalidate @submit.prevent="submit"> <!-- submit의 경로 이동 기능은 X, submit event는 발동 -->
                <div class="row g-3">
                    <div class="col-sm-6">
                        <!-- 전통적인 form의 식별자는 name -->
                        <label for="firstName" class="form-label">First name</label>
                        <input name="firstName" type="text" class="form-control" id="firstName" placeholder="" value="" required>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <label for="lastName" class="form-label">Last name</label>
                        <input name="lastName" type="text" class="form-control" id="lastName" placeholder="" value="" required>
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input name="email" type="email" class="form-control" id="email" placeholder="you@example.com">
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div class="col-md-12">
                        <label for="country" class="form-label">Gender</label>
                        <select name="gender" class="form-select" id="gender" required>
                            <option value="">Choose...</option>
                            <option>Male</option> <!-- value값과 option값이 다른 경우에는 value를 따로 지정해줘야함 -->
                            <option>Female</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid gender.
                        </div>
                    </div>

                    <hr class="my-4">
                    <div class="col-sm-6">
                        <button class="btn btn-primary btn-lg w-100" type="submit">Submit!</button>
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
const submit = (e) => {
    // 전통적으로 form에서 input값 가져오는 방법!
    // formName.inputName
    let member = {
        firstName: form.firstName.value, // 여기서 'form'은 상단의 form태그에 선언한 name="form"의 "form"이다
        lastName: form.lastName.value,   // 이런 방식으로 데이터를 가져올 수 있는 방법은 form태그 뿐이다(나머지는 getElementById())
        email: form.email.value,
        gender: form.gender.options[form.gender.selectedIndex].value, // option's'임을 꼭 기억할것..
    }
    alert('member: ' + JSON.stringify(member));
} 
</script>