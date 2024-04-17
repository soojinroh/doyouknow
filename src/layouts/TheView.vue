<template>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
main {
  height: calc(100vh - 100px); /* 헤더와 버튼의 높이만큼 전체 높이에서 제외 */
  padding-top: 60px; /* 헤더 높이만큼 상단 패딩 */
  padding-bottom: 0px; /* 버튼 높이만큼 하단 패딩 */
  overflow-y: auto; /* 스크롤을 내부에서만 적용 */
  background-color: black;
}
</style>
