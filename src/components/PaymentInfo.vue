<template>
  <form @submit.prevent="rules.paymentInfoCheck" class="uk-form-stacked login-form">
    <fieldset class="uk-fieldset uk-margin-top fieldset-area" style="height:300px;">
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-card">카드번호</label>
        <div class="uk-form-controls uk-grid-small" uk-grid>
          <div class="uk-width-1-4@s">
            <input class="uk-input" id="form-stacked-card" type="text" maxlength="4" v-model="rules.cardNumArr[0]" 
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
          </div>
          <div class="uk-width-1-4@s" v-for="index in 3" :key="index">
            <input class="uk-input" type="text" maxlength="4" v-model="rules.cardNumArr[index]"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
          </div>
        </div>
        <span class="invalid-text" v-show="!rules.checkResult.cardNumber">카드 번호 형식이 안 맞거나 비어있습니다.</span>
      </div>
    </fieldset>
    <div class="complete-button-area">
      <button class="uk-button uk-width-1-1 uk-button-default uk-button-large">완료</button>
    </div>
  </form>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import rules from '@/utils/rules'
  import { user, step } from '@/store/user'

  onMounted(() => {
    if(!user.form.address) {
      alert('주소 정보가 없습니다.');
      step.value = 1;
    }
  })
</script>