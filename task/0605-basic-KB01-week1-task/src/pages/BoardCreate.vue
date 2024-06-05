<template>
  <div class="container">
    <div class="px-5">
      <h1 class="mb-3 my-3">Create Post</h1>

      <form name="form" class="needs-validation" @submit.prevent="createBoard">
        <div class="row g-3">
          <div class="col-12">
            <label for="firstName" class="form-label">First name</label>
            <input name="firstName" type="text" class="form-control" id="firstName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div class="col-12">
            <label for="lastName" class="form-label">Last name</label>
            <input name="lastName" type="text" class="form-control" id="lastName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>

          <div class="col-12">
            <label for="email" class="form-label">Email</label>
            <input name="email" type="email" class="form-control" id="email" placeholder="you@example.com" required>
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class="col-md-12">
            <label for="country" class="form-label">Gender</label>
            <select name="gender" class="form-select" id="gender" required>
              <option value="">Unknown</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid gender.
            </div>
          </div>

          <hr class="my-4">
          <div class="col-sm-3">
            <button class="btn btn-success btn-lg w-100" type="submit">Create</button>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-secondary btn-lg w-100" type="reset">Calcel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';

const calcMemberID = async () => {
  const requestURL = 'http://localhost:3001/youth';
  const response = await axios.get(requestURL);
  return Math.max(...response.data.map(member => member.id)) + 1;
}

const createBoard = async (e) => {
  const id = await calcMemberID();

  let member = {
    id: id,
    first_name: form.firstName.value,
    last_name: form.lastName.value,
    email: form.email.value,
    gender: form.gender.options[form.gender.selectedIndex].value,
  };

  alert('[*** 회원정보가 추가되었습니다 ***]\n'
    + '\nfirstName: ' + JSON.stringify(member.first_name)
    + '\nlastName: ' + JSON.stringify(member.last_name)
    + '\nemail: ' + JSON.stringify(member.email)
    + '\ngender: ' + JSON.stringify(member.gender));

  try {
    const requestURL = 'http://localhost:3001/youth';
    await axios.post(requestURL, member);
  } catch (error) {
    console.error(error);
  }
} 
</script>