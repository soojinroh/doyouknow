<template>
  <main class="selector-container">
    <div class="header">
      <h1>Who are you?</h1>
      <p>나를 가장 잘 나타내는 아이템을 선택해주세요</p>
    </div>

    <section
      v-for="category in categories"
      :key="category.name"
      class="category"
    >
      <h2>{{ category.name }}</h2>
      <div class="options">
        <div
          v-for="option in category.options"
          :key="option.name"
          :class="['option', { selected: option === category.selected }]"
          @click="selectOption(category, option)"
        >
          {{ option.name }}
        </div>
      </div>
    </section>
    <BottomButton @click="goToPersonalInfo">다음</BottomButton>
  </main>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import BottomButton from './components/BottomButton.vue';

export default {
  components: {
    BottomButton,
  },
  setup() {
    const router = useRouter();

    const goToPersonalInfo = () => {
      router.push({ name: 'PersonalInfo' });
    };

    const state = reactive({
      categories: [
        {
          name: '주제',
          options: [
            { name: '옵션 121312' },
            { name: '옵션 2dfsa' },
            { name: '옵션 21' },
            { name: '옵션 2dfa' },
            { name: '옵션 2vcxz' },
            { name: '옵션 2s' },
            { name: '옵션 2' },
            { name: '옵션 2dddddd' } /* more options */,
          ],
          selected: null,
        },
        {
          name: '주제',
          options: [{ name: '옵션 1' }, { name: '옵션 2' } /* more options */],
          selected: null,
        },
        {
          name: '주제',
          options: [{ name: '옵션 1' }, { name: '옵션 2' } /* more options */],
          selected: null,
        },
        {
          name: '주제',
          options: [{ name: '옵션 1' }, { name: '옵션 2' } /* more options */],
          selected: null,
        },
        {
          name: '주제',
          options: [{ name: '옵션 1' }, { name: '옵션 2' } /* more options */],
          selected: null,
        },
        {
          name: '주제',
          options: [{ name: '옵션 1' }, { name: '옵션 2' } /* more options */],
          selected: null,
        },
        {
          name: '주제',
          options: [{ name: '옵션 1' }, { name: '옵션 2' } /* more options */],
          selected: null,
        },
        {
          name: '주제',
          options: [{ name: '옵션 1' }, { name: '옵션 2' } /* more options */],
          selected: null,
        },
        {
          name: '주제',
          options: [{ name: '옵션 1' }, { name: '옵션 2' } /* more options */],
          selected: null,
        },
        // ...other categories
      ],
    });

    function selectOption(category, option) {
      category.selected = option;
    }

    return {
      ...toRefs(state),
      selectOption,
      goToPersonalInfo,
    };
  },
};
</script>
<style scoped>
.selector-container {
  background-color: black;
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  padding: 20px; /* 내부 여백 20px */
  font-family: 'Arial', sans-serif; /* 글꼴 스타일 Arial, sans-serif로 설정 */
  min-height: calc(100vh - 160px); /* 높이 대신 최소 높이 설정 */
}

.header h1 {
  font-size: 24px; /* 제목의 글꼴 크기를 24px로 설정 */
  font-weight: bold; /* 글꼴 두께를 굵게 설정 */
}

.header p {
  font-size: 16px; /* 단락의 글꼴 크기를 16px로 설정 */
  margin-bottom: 30px; /* 단락 아래 여백을 30px로 설정 */
}

.category + .category {
  border-top: 1px solid #333; /* 이전 카테고리와 구분하기 위한 상단 테두리 */
  padding-top: 20px; /* 상단 테두리 아래 여백을 20px로 설정 */
}

.category:not(:first-of-type) {
  margin-top: 20px; /* 첫 번째 카테고리가 아닐 경우 상단 여백을 20px로 설정 */
}

.category h2 {
  font-size: 20px; /* 카테고리 제목의 글꼴 크기를 20px로 설정 */
  font-weight: bold; /* 글꼴 두께를 굵게 설정 */
  margin-bottom: 10px; /* 제목 아래 여백을 10px로 설정 */
}

.options {
  display: flex; /* 옵션을 유연하게 배열하기 위해 flexbox 사용 */
  flex-wrap: wrap; /* 옵션이 넘칠 경우 다음 줄로 넘김 */
  gap: 10px; /* 옵션 사이의 간격을 10px로 설정 */
}

.option {
  padding: 6px 18px; /* 옵션 내부 여백 설정 */
  border-radius: 20px; /* 옵션의 모서리를 둥글게 처리 */
  background-color: transparent; /* 배경색을 투명하게 설정 */
  border: 1px solid #555; /* 경계선 설정 */
  color: #555; /* 글꼴 색상 설정 */
  cursor: pointer; /* 포인터 커서 표시 */
  transition: /* 테두리 색상과 글꼴 색상의 변경에 대한 전환 효과 */
    border-color 0.3s,
    color 0.3s;
}

.option.selected {
  color: white; /* 선택된 옵션의 글꼴 색상을 흰색으로 변경 */
  border-color: #ff3e3e; /* 테두리 색상을 #ff3e3e로 변경 */
}

.confirm-btn {
  width: 100%; /* 버튼 너비를 100%로 설정 */
  padding: 15px; /* 내부 여백 15px */
  border-radius: 25px; /* 모서리를 매우 둥글게 처리 */
  background-color: #ff3e3e; /* 배경 색상 설정 */
  border: none; /* 테두리 없음 */
  color: white; /* 글꼴 색상 흰색 */
  margin-top: 30px; /* 위쪽 여백 30px */
  cursor: pointer; /* 포인터 커서 표시 */
  transition: background-color 0.3s; /* 배경색 변경에 대한 전환 효과 */
}

.confirm-btn:hover {
  background-color: #e03535; /* 마우스 오버 시 배경 색상을 #e03535로 변경 */
}

.screen-container {
  position: relative; /* 상대적 위치 설정 */
  padding-bottom: 120px; /* 하단 여백을 120px로 설정 */
  background-color: #121212; /* 배경색 설정 */
  min-height: 100vh; /* 최소 높이를 화면의 100%로 설정 */
}

.fixed-container {
  position: fixed; /* 위치 고정 */
  bottom: 0; /* 하단에 위치 */
  left: 0; /* 왼쪽에 위치 */
  right: 0; /* 오른쪽에 위치 */
  padding: 20px; /* 내부 여백 20px */
  /* background-color: #121212; */ /* 배경색은 주석 처리되어 비활성화됨 */
}

.action-btn {
  display: block; /* 블록 요소로 표시 */
  width: 100%; /* 너비를 부모 요소의 100%로 설정 */
  padding: 15px; /* 내부 여백 15px */
  margin-bottom: 10px; /* 아래로 10px 여백 */
  background-color: #ff3e3e; /* 배경 색상 설정 */
  color: white; /* 글꼴 색상 흰색 */
  border: none; /* 테두리 없음 */
  border-radius: 25px; /* 모서리를 매우 둥글게 처리 */
  text-align: center; /* 텍스트 중앙 정렬 */
  cursor: pointer; /* 포인터 커서 표시 */
}

.secondary-btn {
  display: block; /* 블록 요소로 표시 */
  width: calc(100% - 40px); /* 너비를 계산하여 설정 (전체 너비에서 40px 차감) */
  padding: 15px; /* 내부 여백 15px */
  background-color: transparent; /* 배경색 투명 */
  color: white; /* 글꼴 색상 흰색 */
  border: 1px solid white; /* 흰색 테두리 1px */
  border-radius: 25px; /* 모서리를 매우 둥글게 처리 */
  text-align: center; /* 텍스트 중앙 정렬 */
  cursor: pointer; /* 포인터 커서 표시 */
}
</style>
