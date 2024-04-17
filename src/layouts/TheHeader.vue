<template>
  <header class="header">
    <div class="logo">DoYouKnow</div>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.header {
  padding: 20px;
  background-color: #000000;
  color: white;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center; /* 로고 텍스트를 수직 중앙 정렬 */
}

.logo {
  font-size: 24px; /* 글꼴 크기 조정 */
  font-weight: bold; /* 글꼴 두께를 굵게 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트 그림자 추가 */
  transition: color 0.3s ease-in-out; /* 색상 변화에 대한 부드러운 전환 효과 */
}

.logo:hover {
  color: #ff3e3e; /* 마우스 호버 시 색상을 밝은 빨간색으로 변경 */
}
</style>
