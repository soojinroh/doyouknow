<template>
  <div class="main-screen">
    <div class="site-name">DoYouKnow</div>
    <div class="description">
      <h1>퇴근 후, 결이 맞는 사람들과 함께하는</h1>
      <h1>시크릿 다이닝</h1>
    </div>
    

    <BottomButton @button-click="goToPersonalitySelectView">신청하기</BottomButton>
  </div>
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

    const goToPersonalitySelectView = () => {
      router.push({ name: 'PersonalitySelect' });
    };

    return {
      goToPersonalitySelectView,
    };
  },
};
</script>
<style lang="scss" scoped>
.main-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: calc(100vh - 90px); /* 하단 버튼의 높이만큼 높이 조정 */
  min-height: calc(100vh - 160px); /* 높이 대신 최소 높이 설정 */
  padding: 20px;
  background-color: black;
  color: white;
  text-align: center;
  overflow-y: auto; /* 내부 스크롤 활성화 */
  
}

.site-name {
  font-size: 2em; /* 사이트 이름의 글꼴 크기를 2em으로 설정 */
  font-weight: bold; /* 글꼴 두께를 굵게 설정 */
  margin-bottom: 0.5em; /* 이름 아래에 0.5em의 여백 */
}

.description {
  font-size: 1.2em; /* 설명 텍스트의 글꼴 크기를 1.2em으로 설정 */
  margin-bottom: 2em; /* 설명 텍스트 아래에 2em의 여백 */
}
</style>
