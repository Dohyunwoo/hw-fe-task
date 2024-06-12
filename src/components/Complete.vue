<template>
  <div class="uk-card uk-card-default uk-card-large uk-card-body uk-padding-large">
    <div class="complete-text-title">
      <div>“{{user.form.name}}” 님,</div>
      <div>회원가입이</div>
      <div>완료되었습니다.</div>
    </div>
    
    <div class="uk-margin">
      <div class="complete-text-body">
        이메일: <a :href="mailtoLink">{{user.form.email}}</a>
      </div>
      <div class="complete-text-body">주소: {{user.form.address}} {{user.form.addressDetail}}</div>
      <div class="complete-text-body">연락처: {{rules.formatPhoneNumber(user.form.phone)}}</div>
      <div class="complete-text-body">카드번호: {{user.form.cardNumber}}</div>
    </div>
  </div>
</template>

<script setup>
  import { user } from '@/store/user'
  import { onMounted, computed } from 'vue'
  import rules from '@/utils/rules'

  onMounted(() => {
    if(!user.form.cardNumber) {
      alert('카드 정보가 없습니다.');
      step.value = 2;
    }
  })

  const mailtoLink = computed(() => `mailto:${user.form.email}`);
</script>

<style scoped>
.complete-text-title {
  font-size: 2rem;
  text-align: center;
  color: #000;
  font-weight: 500;
}
.complete-text-body {
  text-align: center;
}
</style>