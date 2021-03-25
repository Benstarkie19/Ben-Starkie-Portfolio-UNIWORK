<template>
<div class="form-control">
  <label class="label">
    <span class="label-text">Primary</span>
  </label> 
  <input type="text" placeholder="username" class="input input-primary input-bordered">
</div> 
<div class="form-control">
  <label class="label">
    <span class="label-text">Secondary</span>
  </label> 
  <input type="text" placeholder="username" class="input input-secondary input-bordered">
</div> 
<div class="form-control">
  <label class="label">
    <span class="label-text">Accent</span>
  </label> 
  <input type="text" placeholder="username" class="input input-accent input-bordered">
</div>

</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
