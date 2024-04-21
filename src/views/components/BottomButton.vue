<template>
  <div class="fixed-footer">
    <button class="bottom-button" @click.prevent="onClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BottomButton',
  methods: {
    onClick() {
      this.$emit('button-click');
    },
  },
};
</script>

<style scoped>
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  padding: 20px;
  text-align: center;
  z-index: 100;
}

.bottom-button {
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #ff3e3e; /* 빨간 배경색 */
  color: white; /* 텍스트 색상은 흰색 */
  border: none;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: darken(#ff3e3e, 10%); /* 호버 시 색상을 어둡게 */
  }

  &:active {
    transform: scale(0.98); /* 클릭 시 버튼 축소 효과 */
  }

  font-size: 18px; /* 버튼 텍스트 크기 */
  font-weight: bold; /* 텍스트 두께 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* 텍스트 그림자 추가 */
}
</style>
