export const progressSimpleCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialProgress from "@/components/MaterialProgress.vue";
</script>
<template>
  <section class="py-6 mt-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-6 mx-auto">
          <MaterialProgress class="mb-3" color="primary" :value="50" />
          <MaterialProgress class="mb-3" color="secondary" :value="50" />
          <MaterialProgress class="mb-3" color="success" :value="50" />
          <MaterialProgress class="mb-3" color="info" :value="50" />
          <MaterialProgress class="mb-3" color="warning" :value="50" />
          <MaterialProgress class="mb-3" color="danger" :value="50" />
          <MaterialProgress class="mb-3" color="dark" :value="50" />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const progressGradientCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialProgress from "@/components/MaterialProgress.vue";
</script>
<template>
  <section class="py-6 mt-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-6 mx-auto">
          <MaterialProgress class="mb-3" variant="gradient" color="primary" :value="50" />
          <MaterialProgress class="mb-3" variant="gradient" color="secondary" :value="50" />
          <MaterialProgress class="mb-3" variant="gradient" color="success" :value="50" />
          <MaterialProgress class="mb-3" variant="gradient" color="info" :value="50" />
          <MaterialProgress class="mb-3" variant="gradient" color="warning" :value="50" />
          <MaterialProgress class="mb-3" variant="gradient" color="danger" :value="50" />
          <MaterialProgress class="mb-3" variant="gradient" color="dark" :value="50" />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const slidersCode = `<script setup>
// slider lib
import Slider from "@vueform/slider";
</script>
<template>
  <section class="py-7 mt-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-6 mx-auto">
          <Slider :value="[30, 80]" />
          <br />
          <Slider :value="50" :tooltips="false" />
        </div>
      </div>
    </div>
  </section>
</template>
<!-- slider style -->
<style src="@vueform/slider/themes/default.css"></style>
`;
