<template>
  <main>
    <div class="header">
      <h1>Join the Mystery Dinner</h1>
      <p>Fill out the form to meet strangers for dinner in your city.</p>
    </div>
    <form class="info-form">
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" placeholder="Your Name" />
      </div>
      <div class="form-group">
        <label for="job">직업</label>
        <input type="text" id="job" placeholder="Your Occupation" />
      </div>
      <div class="form-group">
        <label for="contact">연락처</label>
        <input type="text" id="contact" placeholder="010-1234-5678" />
      </div>
      <div class="form-group">
        <label for="gender">성별</label>
        <select id="gender">
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <div class="form-group">
        <label for="age">나이</label>
        <input type="text" id="age" placeholder="Your Age" />
      </div>
      <BottomButton @click="goToTimeSelectView">다음</BottomButton>
    </form>
  </main>
</template>

<script>
import { useRouter } from 'vue-router';
import BottomButton from './components/BottomButton.vue';

export default {
  components: {
    BottomButton,
  },
  setup() {
    const router = useRouter();

    const goToTimeSelectView = () => {
      router.push({ name: 'TimeSelect' });
    };

    return {
      goToTimeSelectView,
    };
  },
};
</script>
<style lang="scss" scoped>
main {
  background-color: black; /* 배경 색상을 검은색으로 설정 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  min-height: calc(100vh - 160px); /* 높이 대신 최소 높이 설정 */
  display: flex; /* Flexbox 레이아웃을 사용하여 내부 요소를 유연하게 배열 */
  flex-direction: column; /* 요소들을 세로 방향으로 배치 */
  align-items: center; /* 세로 중심선을 기준으로 요소들을 중앙 정렬 */
  padding-left: 20px;
  padding-right: 20px;
  text-align: center; /* 텍스트를 중앙 정렬 */
}

.header h1 {
  margin-bottom: 0.3em; /* 하단 여백을 0.3em으로 설정 */
  font-size: 2.5em; /* 글꼴 크기를 2.5em으로 설정 */
}

.header p {
  margin-bottom: 2em; /* 단락 하단 여백을 2em으로 설정 */
  font-size: 1.2em; /* 글꼴 크기를 1.2em으로 설정 */
}

.info-form {
  width: 100%; /* 폼의 너비를 100%로 설정 */
  max-width: 500px; /* 폼의 최대 너비를 500px로 제한 */
}

.form-group {
  margin-bottom: 1em; /* 폼 그룹 간 하단 여백을 1em으로 설정 */
}

label {
  display: block; /* 라벨을 블록 요소로 설정하여 단독 라인으로 표시 */
  margin-bottom: 0.5em; /* 라벨 하단 여백을 0.5em으로 설정 */
  font-size: 1.1em; /* 글꼴 크기를 1.1em으로 설정 */
}

input,
select {
  width: 100%; /* 입력 필드와 선택 필드의 너비를 100%로 설정 */
  padding: 10px; /* 내부 패딩을 10px로 설정 */
  margin-bottom: 10px; /* 하단 여백을 10px로 설정 */
  border: 1px solid #333; /* 테두리 설정 */
  border-radius: 5px; /* 테두리 모서리를 약간 둥글게 처리 */
  background-color: #222; /* 배경색을 어두운 회색으로 설정 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
}

input:focus,
select:focus {
  outline-color: #ff3e3e; /* 인풋이 액티브될 때의 테두리 색상을 빨간색으로 설정 */
}

input::placeholder {
  color: #555; /* 입력 필드의 플레이스홀더 텍스트 색상을 밝은 회색으로 설정 */
}

select {
  color: white;
}
</style>
