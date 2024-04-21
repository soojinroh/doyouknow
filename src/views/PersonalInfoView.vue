<template>
  <main>
    <div class="header">
      <h1>내 정보 입력하기</h1>
    </div>
    <form class="info-form" @submit.prevent="goToMeetingSelectView">
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" placeholder="Your Name" v-model="name" maxlength="30" />
      </div>
      <div class="form-group">
        <label for="job">직업</label>
        <input type="text" id="job" placeholder="Your Occupation" v-model="occupation" maxlength="30"/>
      </div>
      <div class="form-group">
    <label for="contact">연락처</label>
    <input type="text" id="contact" placeholder="010-0000-0000" v-model="phoneNumber" @input="formatPhoneNumber">
    <span v-if="phoneNumberError" style="color: red;">{{ phoneNumberError }}</span>
  </div>
      <div class="form-group">
        <label for="gender">성별</label>
        <select id="gender" v-model="gender">
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <div class="form-group">
        <label for="age">나이</label>
        <input type="number" id="age" placeholder="Your Age" v-model="rawAge" @blur="validateAge">
        <span v-if="ageError" style="color: red;">{{ ageError }}</span>
      </div>
      <BottomButton @button-click="goToMeetingSelectView">입력완료</BottomButton>
    </form>
  </main>
</template>

<script>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import BottomButton from './components/BottomButton.vue';
import { usePersonalInfoStore } from '../stores/personalInfoStore';

export default {
  components: {
    BottomButton,
  },
  setup() {
    const router = useRouter();
    const personalInfo = usePersonalInfoStore();

    const name = ref(personalInfo.name);
    const occupation = ref(personalInfo.occupation);
    const phoneNumber = ref(personalInfo.phoneNumber || '');
    const gender = ref(personalInfo.gender);
    const rawAge = ref(personalInfo.age);
    const ageError = ref('');
    const phoneNumberError = ref('');

    const formatPhoneNumber = () => {
      let digits = phoneNumber.value.replace(/\D/g, '');
      if (digits.length > 11) {
        digits = digits.substring(0, 11); // 최대 11자리까지만 허용
      }
      phoneNumber.value = digits.replace(/(\d{3})(\d{1,4})(\d{1,4})/, (match, p1, p2, p3) => {
        return `${p1}-${p2}-${p3}`;
      });
    };

    watch(phoneNumber, (newVal) => {
      if (newVal.replace(/\D/g, '').length === 11) {
        phoneNumberError.value = '';
      } else {
        phoneNumberError.value = '연락처 형식이 올바르지 않습니다. (예: 010-0000-0000)';
      }
    });

    const validateAge = () => {
      const ageValue = parseInt(rawAge.value, 10);
      if (ageValue < 25 || ageValue > 37) {
        ageError.value = '25~37살까지만 신청 가능합니다.';
      } else {
        ageError.value = '';
        personalInfo.age = ageValue; // 유효한 경우에만 스토어에 나이 저장
      }
    };

    const goToMeetingSelectView = () => {
      if (!name.value || !occupation.value || !phoneNumber.value || !gender.value || !rawAge.value || ageError.value || phoneNumberError.value) {
        alert('모든 항목을 정확히 입력해주세요.');
        return;
      }
      personalInfo.setPersonalInfo(name.value, occupation.value, phoneNumber.value, gender.value, rawAge.value);
      router.push({ name: 'MeetingSelect' });
    };

    return {
      name,
      occupation,
      phoneNumber,
      gender,
      rawAge,
      ageError,
      phoneNumberError,
      validateAge,
      formatPhoneNumber,
      goToMeetingSelectView,
    };
  },
};
</script>



<style lang="scss" scoped>
main {
  background-color: black;
  color: white;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
}

.header h1 {
  margin-bottom: 1.5em;
}

.header p {
  margin-bottom: 2em;
  font-size: 1.2em;
}

.info-form {
  width: 100%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 1em;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-size: 1.1em;
}

input, select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #222;
  color: white;
}

input:focus, select:focus {
  outline-color: #ff3e3e;
}

input::placeholder {
  color: #555;
}

select {
  color: white;
}
</style>
