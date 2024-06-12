import { reactive, ref } from 'vue'

export const user = reactive({
  form: {
    name: '',
    phone: '',
    password: '',
    pwdcheck: '',
    email: '',
    address: '',
    addressDetail: '',
    cardNumber: ''
  }
});

export const step = ref(0);
