<template>
  <div class="modal-overlay" @click="cancel">
    <div class="modal-content">
      <h2>입금이 완료되었나요?</h2>
      <p>신청을 확정하려면 입금이 완료되어야 합니다.</p>
      <div class="button-group">
        <button class="confirm-btn" @click.stop="confirm">확인</button>
        <button class="cancel-btn" @click.stop="cancel">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    confirm() {
      this.$emit('confirm');
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>
<style scoped>
.modal-overlay {
  position: fixed; /* 모달 오버레이를 화면에 고정 */
  top: 0; /* 상단부터 시작 */
  left: 0; /* 왼쪽부터 시작 */
  width: 100%; /* 너비를 화면 전체로 설정 */
  height: 100%; /* 높이를 화면 전체로 설정 */
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은색 배경 */
  display: flex; /* Flexbox 레이아웃을 사용 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
}

.modal-content {
  background-color: #fff; /* 배경색을 흰색으로 설정 */
  padding: 20px; /* 패딩을 20px으로 설정 */
  border-radius: 10px; /* 모서리를 둥글게 처리 (반경 10px) */
  max-width: 400px; /* 최대 너비를 400px로 제한 */
  text-align: center; /* 텍스트 중앙 정렬 */
  color: black;
}

h2 {
  margin-bottom: 10px; /* 제목 하단의 여백을 10px로 설정 */
}

.button-group {
  display: flex; /* Flexbox 레이아웃을 사용 */
  justify-content: space-between; /* 버튼들 사이에 공간을 균등하게 분배 */
  margin-top: 20px; /* 상단 여백을 20px로 설정 */
}

.confirm-btn,
.cancel-btn {
  padding: 10px 20px; /* 패딩을 상하 10px, 좌우 20px로 설정 */
  border: none; /* 테두리 없음 */
  border-radius: 5px; /* 모서리를 약간 둥글게 처리 (반경 5px) */
  cursor: pointer; /* 마우스 포인터를 클릭 가능하게 변경 */
}

.confirm-btn {
  background-color: red; /* 배경색을 빨간색으로 설정 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
}

.cancel-btn {
  background-color: #ddd; /* 배경색을 연회색으로 설정 */
  color: #333; /* 텍스트 색상을 진회색으로 설정 */
}
</style>
