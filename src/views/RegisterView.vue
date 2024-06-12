<template>
  <div class="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
    <div class="logo-area uk-margin-bottom">
      <img src="https://i.balaan.io/mobile/img/icons/logo-blue.png" alt="logo">
    </div>
    <div class="form-area">
      <component :is="componentList[step]"></component> 
    </div>
  </div>
</template>

<script setup>
  import PersonalInfo from "@/components/PersonalInfo.vue";
  import AddressInfo from "@/components/AddressInfo.vue";
  import PaymentInfo from "@/components/PaymentInfo.vue";
  import Complete from "@/components/Complete.vue";

  import {step} from "@/store/user"

  const componentList = [
    PersonalInfo, AddressInfo, PaymentInfo, Complete
  ]
</script>

<style scoped>
  .form-area {
    width: 100%;
    border: 2px solid black;
    padding: 40px 20px 20px 20px;
  }
</style>