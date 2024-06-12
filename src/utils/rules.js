import { reactive, ref } from 'vue'
import { user, step } from '@/store/user'

const rules = reactive({
  cardNumArr: [null,null,null,null],
  checkResult: {
    name: true,
    address: true,
    phone: true,
    email: true,
    password: true,
    pwdCheck: true,
    cardNumber: true
  },
  nameCheck() {
    const korRegExp = /^[가-힣]{2,4}$/g;
    const engRegExp = /^[A-Za-z]{3,10}$/g;

    // 한국어 및 영어 규칙 체크
    !korRegExp.test(user.form.name) ?
      !engRegExp.test(user.form.name) ?
        rules.checkResult.name = false : rules.checkResult.name = true
        : rules.checkResult.name = true;
    return rules.checkResult.name
  },
  searchAddress() {
    new window.daum.Postcode({
      oncomplete: (data) => {
        const roadAddr = data.roadAddress; // 도로명 주소 변수
        let extraRoadAddr = ''; // 참고 항목 변수

        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        if (extraRoadAddr !== '') {
          extraRoadAddr = ' (' + extraRoadAddr + ')';
        }

        user.form.address = `(${data.zonecode}) ${!!roadAddr ? roadAddr : data.jibunAddress}`;

        !!user.form.address ? rules.checkResult.address = true : rules.checkResult.address = false;
      }
    }).open();
  },
  phoneCheck() {
    const regExp = /^0([0-9]{2})[-\s]?([0-9]{3,4})[-\s]?([0-9]{4})$/g;
    !!regExp.test(user.form.phone) ? rules.checkResult.phone = true : rules.checkResult.phone = false;
    return rules.checkResult.phone
  },
  emailCheck() {
    const regExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
    !!regExp.test(user.form.email) ? rules.checkResult.email = true : rules.checkResult.email = false;
    return rules.checkResult.email
  },
  passwordCheck() { //해당 파라미터는 비밀번호 확인으로 받는 데이터
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/g;
    !!regExp.test(user.form.password) ? rules.checkResult.password = true : rules.checkResult.password = false;
    ((user.form.password == user.form.pwdcheck) && !!user.form.pwdcheck) ? rules.checkResult.pwdCheck = true : rules.checkResult.pwdCheck = false;
    return (rules.checkResult.password && user.form.pwdcheck)
  },
  cardNumCheck(param) { // 해당 파라미터는 4자리씩 받은 카드 번호를 문자열 형태로 합하여 16자리 숫자의 데이터로 받음
    let paramToArr = [...param];
    let resultNum = 0
    paramToArr.forEach((val,index) => {
      let digit = paramToArr[paramToArr.length - 1 - index];
      // 짝수번째 자리 (1-based index) 처리
      if (index % 2 === 1) {
        digit *= 2;
        // 2를 곱한 결과가 9 이상일 경우 각 자리 숫자를 더함
        if (digit > 9) digit = Math.floor(digit / 10) + (digit % 10);  // 각 자리 숫자의 합
      }
      // 모든 값을 더함
      resultNum += Number(digit);
    });
    resultNum % 10 === 0 ? rules.checkResult.cardNumber = true : rules.checkResult.cardNumber = false;
    return rules.checkResult.cardNumber
  },
  persnalInfoCheck() {
    if(rules.emailCheck() && rules.passwordCheck()) step.value++;
  },
  addressInfoCheck() {
    if(rules.nameCheck() && rules.phoneCheck() && !!rules.checkResult.address) step.value++;
  },
  paymentInfoCheck() {
    let numToText = '';
    user.form.cardNumber = `${rules.cardNumArr[0]}-${rules.cardNumArr[1]}-${rules.cardNumArr[2]}-${rules.cardNumArr[3]}`
    numToText = rules.cardNumArr.join('')
    if(!!rules.cardNumCheck(numToText)) step.value++;
  },
  formatPhoneNumber(input) {
    let numbers = input.replace(/\D/g, '');

    // 전화번호 형식에 맞게 포맷팅
    if (numbers.length >= 10) {
      numbers = numbers.slice(0, 11); // 11자리까지만 사용
      return numbers.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    }
  }
})

export default rules