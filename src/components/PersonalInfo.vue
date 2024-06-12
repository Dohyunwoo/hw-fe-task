<template>
  <form @submit.prevent="rules.persnalInfoCheck" class="uk-form-stacked login-form">
    <fieldset class="uk-fieldset uk-margin-top fieldset-area uk-margin-large-bottom">
      <div class="uk-margin uk-flex uk-flex-column">
        <div class="uk-flex uk-flex-between uk-flex-middle">
          <label class="uk-form-label uk-width-1-3@m uk-flex-first" for="form-stacked-email">이메일</label>
          <div class="uk-form-controls uk-width-2-3@">
            <input class="uk-input" id="form-stacked-email" type="email" v-model="user.form.email">
          </div>
        </div>
        <div class="invalid-text" v-show="!rules.checkResult.email">이메일 형식이 안 맞거나 비어있습니다.</div>
      </div>
      <div class="uk-margin uk-flex uk-flex-column">
        <div class="uk-flex uk-flex-between uk-flex-middle">
          <label class="uk-form-label uk-width-1-3@m uk-flex-first" for="form-stacked-password">비밀번호</label>
          <div class="uk-form-controls uk-width-2-3@">
            <input class="uk-input" id="form-stacked-password" type="password" v-model="user.form.password">
          </div>
        </div>
        <div class="invalid-text" v-show="!rules.checkResult.password">비밀번호 형식이 안 맞거나 비어있습니다.</div>
      </div>
      <div class="uk-margin uk-flex uk-flex-column">
        <div class="uk-flex uk-flex-between uk-flex-middle">
          <label class="uk-form-label uk-width-1-3@m uk-flex-first" for="form-stacked-pwdcheck">비밀번호 확인</label>
          <div class="uk-form-controls uk-width-2-3@">
            <input class="uk-input" id="form-stacked-pwdcheck" type="password" v-model="user.form.pwdcheck">
          </div>
        </div>
        <div class="invalid-text" v-show="!rules.checkResult.pwdCheck">확인용 비밀번호 형식이 안 맞거나 비어있습니다.</div>
      </div>
    </fieldset>
    <div class="next-button-area">
      <button class="uk-button uk-width-1-1 uk-button-default uk-button-large">다음</button>
    </div>
  </form>
</template>

<script setup>
  import rules from '@/utils/rules'
  import {user, step} from '@/store/user'
</script>
