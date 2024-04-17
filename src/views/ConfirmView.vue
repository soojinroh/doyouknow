<template>
  <div class="final-page">
    <div class="content">
      <h1>모임 소개</h1>
      <p>우리 모임은 ... (모임에 대한 설명과 규정을 여기에 채워 넣으세요.)</p>
      <p>핸드폰 번호로 모임 확정 시 연락 드리겠습니다.</p>
      <div class="bank-info">
        <h2>계좌 정보</h2>
        <p>은행명: XXX은행</p>
        <p>계좌 번호: 123-456-7890</p>
        <p>예금주: 홍길동</p>
      </div>
      <div class="refund-policy">
        <h2>환불 규정</h2>
        <p>(환불 규정에 대한 내용을 여기에 채워 넣으세요.)</p>
      </div>
    </div>
    <BottomButton @click="showConfirmationModal">신청 완료</BottomButton>
    <ConfirmationModal
      v-if="isModalVisible"
      @confirm="goToNext"
      @cancel="hideConfirmationModal"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import ConfirmationModal from './components/ConfirmationModal.vue';
import BottomButton from './components/BottomButton.vue';

export default {
  components: {
    ConfirmationModal,
    BottomButton,
  },
  setup() {
    const isModalVisible = ref(false);

    const showConfirmationModal = () => {
      isModalVisible.value = true;
    };

    const hideConfirmationModal = () => {
      isModalVisible.value = false;
    };

    const goToNext = () => {
      // Logic to navigate to the next page or perform the final action
    };

    return {
      isModalVisible,
      showConfirmationModal,
      hideConfirmationModal,
      goToNext,
    };
  },
};
</script>
<style scoped>
.final-page {
  display: flex; /* Flexbox 레이아웃을 사용하여 내부 요소를 유연하게 배치 */
  flex-direction: column; /* 요소들을 세로 방향으로 배치 */
  min-height: calc(100vh - 160px); /* 높이 대신 최소 높이 설정 */
}

.content {
  padding: 20px; /* 모든 방향에 대해 20px의 패딩 추가 */
  overflow-y: auto; /* 세로 스크롤이 필요할 경우 스크롤바 표시 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
}

.bank-info,
.refund-policy {
  margin: 20px 0; /* 상하 여백을 20px으로 설정 */
}
</style>
