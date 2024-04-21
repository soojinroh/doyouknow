<template>
  <main class="selector-container">
    <div class="progress-bar-container">
      <div class="progress-bar">
        <div class="progress" :style="{ width: progressBarWidth }"></div>
      </div>
    </div>
    <div class="header">
      <h1>{{ currentCategory.name }}</h1>
    </div>
    <section>
      <div class="category">
        <div class="options">
          <div
            v-for="option in currentCategory.options"
            :key="option.name"
            :class="['option', { selected: option === currentCategory.selected }]"
            @click="selectOption(currentCategory, option)"
          >
            {{ option.name }}
          </div>
        </div>
      </div>
    </section>
    <bottom-button
      @button-click="handleNextClick"
      v-if="currentCategoryIndex < categories.length"
    >
      {{ currentCategoryIndex < categories.length - 1 ? '다음' : '완료' }}
    </bottom-button>
  </main>
</template>


<script>
import { reactive, computed, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import BottomButton from './components/BottomButton.vue';
import { usePersonalityStore } from '../stores/personalityStore'; // Update the path accordingly
import { categories } from '../data/categories'; // Update the path accordingly

export default {
  components: {
    BottomButton,
  },
  setup() {
    const router = useRouter();
    const personalityStore = usePersonalityStore();


    const state = reactive({
  categories: categories,
  currentCategoryIndex: 0,
});


function handleNextClick() {
  const currentSelection = state.categories[state.currentCategoryIndex].selected;
  if (!currentSelection) {
    alert('옵션을 선택해 주세요.');
    return;
  }
  personalityStore.saveSelection({
    category: state.categories[state.currentCategoryIndex].name,
    option: currentSelection.name
  });
  goToNextCategory();
}
    const currentCategory = computed(() => state.categories[state.currentCategoryIndex]);

    const progressBarWidth = computed(() => {
      const progressPercentage = (state.currentCategoryIndex / state.categories.length) * 100;
      return `${progressPercentage}%`;
    });

    function selectOption(category, option) {
      category.selected = option;
    }

    function goToNextCategory() {
      if (state.currentCategoryIndex < state.categories.length - 1) {
        state.currentCategoryIndex++;
      } else {
        router.push({ name: 'PersonalInfo' });
      }
    }

    return {
      ...toRefs(state),
      currentCategory,
      progressBarWidth,
      selectOption,
      goToNextCategory,
      handleNextClick,
    };
  },
};
</script>

<style scoped>
.selector-container {
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  padding: 20px;
  height: 100vh;
  align-items: center; /* 센터 정렬을 위해 추가 */
}

.header h1 {
  font-size: 24px;
  text-align: center; /* 가운데 정렬 */
  margin-bottom: 30px;
}
.progress-bar-container {
  width: 100%;
  border: 1px solid #555; /* 회색 테두리 추가 */
  background-color: transparent; /* 투명 배경 */
  border-radius: 5px;
  overflow: hidden; /* 넘치는 부분은 숨김 처리 */
  margin-bottom: 20px; /* 주제 위에 위치하기 위해 조정 */
}


.progress-bar {
  width: 100%;
  /* background-color: #555; */
  height: 13px;
  border-radius: 5px;
  
}

.progress {
  background-color: #ff3e3e;
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s;
}

.category {
  flex-grow: 1;
  width: 100%; /* 너비를 정확하게 조정 */
}

.options {
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬을 위해 추가 */
}

.option {
  padding: 15px 30px; /* 좀 더 넓은 패딩 */
  margin-bottom: 10px;
  background-color: transparent; /* 투명 배경 */
  border: 2px solid #aaa; /* 회색 테두리 */
  border-radius: 15px;
  color: #aaa; /* 회색 글씨 */
  cursor: pointer;
  transition: all 0.3s;
  text-align: center; /* 글씨 가운데 정렬 */
  width: 50%; /* 버튼 너비 */
  min-width: 400px; /* 최소 너비 설정 */
}

.option.selected {
  border-color: #ff3e3e; /* 빨간색 테두리 */
  color: white; /* 하얀색 글씨 */
}

</style>
