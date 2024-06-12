<template>
  <form @submit.prevent="rules.addressInfoCheck" class="uk-form-stacked login-form">
    <fieldset class="uk-fieldset uk-margin-top fieldset-area">
      <div class="uk-margin uk-flex uk-flex-column">
        <div class="uk-flex uk-flex-between uk-flex-middle">
          <label class="uk-form-label uk-width-1-3@m uk-flex-first" for="form-stacked-name">이름</label>
          <div class="uk-form-controls uk-width-2-3@">
            <input class="uk-input" id="form-stacked-name" type="text" v-model="user.form.name">
          </div>
        </div>
        <div class="invalid-text" v-show="!rules.checkResult.name">이름 형식이 안 맞거나 비어있습니다.</div>
      </div>
      <div class="uk-margin uk-flex uk-flex-column">
        <div class="uk-flex uk-flex-between uk-flex-middle">
          <label class="uk-form-label uk-width-1-3@m uk-flex-first" for="form-stacked-phone">연락처</label>
          <div class="uk-form-controls uk-width-2-3@">
            <input class="uk-input" id="form-stacked-phone" type="text" v-model="user.form.phone">
          </div>
        </div>
        <div class="invalid-text" v-show="!rules.checkResult.phone">연락처 형식이 안 맞거나 비어있습니다.</div>
      </div>
      <div class="uk-margin-top">
        <div class="uk-flex uk-flex-middle uk-flex-between">
          <label class="uk-form-label" for="form-stacked-address">주소</label>
          <div>
            <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
              type="button" @click.prevent="rules.searchAddress">우편 번호</button>
          </div>
        </div>
        <div class="uk-form-controls">
          <input class="uk-input uk-margin-small-bottom" type="text" disabled v-model="user.form.address">
          <input class="uk-input" id="form-stacked-address" type="text" placeholder="상세 주소" v-model="user.form.addressDetail">
          <div class="invalid-text" v-show="!rules.checkResult.address">주소 형식이 안 맞거나 비어있습니다.</div>
        </div>
      </div>
    </fieldset>
    <div id="map" style="width:100%;"></div>
    <div class="uk-flex uk-flex-between button-area uk-margin-large-top">
      <div>
        <button class="uk-button uk-button-secondary uk-button-large" type="button" @click="rules.previusStep">이전</button>
      </div>
      <div>
        <button class="uk-button uk-button-default uk-button-large" type="submit">다음</button>
      </div>
    </div>
  </form>
</template>

<script setup>
  import { onMounted } from 'vue'
  import rules from '@/utils/rules'
  import { user, step } from '@/store/user'

  onMounted(() => {
    if(!user.form.email && !user.form.password) {
      alert('개인정보가 없습니다.');
      step.value = 0;
    }
  })
</script>