<template>
  <div class="events-container">
    <!-- Events List -->
    <div class="events-list">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="event-card"
        :class="{ selected: selectedEvent === index }"
        @click="selectEvent(index)"
      >
        <!-- Event Image -->
        <img :src="event.imageUrl" alt="Event" class="event-image" />
        <!-- Event Details -->
        <div class="event-details">
          <h3>{{ event.date }}</h3>
          <p>{{ event.location }}</p>
          <p>{{ event.time }}</p>
        </div>
      </div>
    </div>
    <!-- Fixed Bottom Button -->
    <BottomButton @click="goToConfirmation">다음</BottomButton>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BottomButton from './components/BottomButton.vue';

export default {
  components: {
    BottomButton,
  },
  setup() {
    const router = useRouter();
    const selectedEvent = ref(null);

    const events = ref([
      {
        date: '2024/04/22 목요일 7 PM',
        location: 'Café in 인하대',
        time: '2 Hour',
        imageUrl:
          'https://media.istockphoto.com/id/1200280547/ko/%EC%82%AC%EC%A7%84/%EB%B0%95%EB%85%B8%EB%9D%BC%EB%A7%88-%EC%9D%98-%EA%B0%95%EB%82%A8%EC%8B%9C-%EB%82%98%EC%9D%B4%ED%8A%B8-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD.jpg?s=612x612&w=0&k=20&c=8R_mnsd9zx2ph5BpYMIo_I8jq5YemSsgFYWlfj2aMOI=',
      },
      {
        date: 'Saturday 1 PM',
        location: 'Café in 연희',
        time: '1 Hour',
        imageUrl:
          'https://media.istockphoto.com/id/1200280547/ko/%EC%82%AC%EC%A7%84/%EB%B0%95%EB%85%B8%EB%9D%BC%EB%A7%88-%EC%9D%98-%EA%B0%95%EB%82%A8%EC%8B%9C-%EB%82%98%EC%9D%B4%ED%8A%B8-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD.jpg?s=612x612&w=0&k=20&c=8R_mnsd9zx2ph5BpYMIo_I8jq5YemSsgFYWlfj2aMOI=',
      },
      {
        date: 'Saturday 1 PM',
        location: 'Café in 잠실',
        time: '1 Hour',
        imageUrl:
          'https://media.istockphoto.com/id/1200280547/ko/%EC%82%AC%EC%A7%84/%EB%B0%95%EB%85%B8%EB%9D%BC%EB%A7%88-%EC%9D%98-%EA%B0%95%EB%82%A8%EC%8B%9C-%EB%82%98%EC%9D%B4%ED%8A%B8-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD.jpg?s=612x612&w=0&k=20&c=8R_mnsd9zx2ph5BpYMIo_I8jq5YemSsgFYWlfj2aMOI=',
      },
      {
        date: 'Saturday 1 PM',
        location: 'Café in 캘리',
        time: '1 Hour',
        imageUrl:
          'https://media.istockphoto.com/id/1200280547/ko/%EC%82%AC%EC%A7%84/%EB%B0%95%EB%85%B8%EB%9D%BC%EB%A7%88-%EC%9D%98-%EA%B0%95%EB%82%A8%EC%8B%9C-%EB%82%98%EC%9D%B4%ED%8A%B8-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD.jpg?s=612x612&w=0&k=20&c=8R_mnsd9zx2ph5BpYMIo_I8jq5YemSsgFYWlfj2aMOI=',
      },
      // More events...
    ]);

    const selectEvent = index => {
      if (selectedEvent.value === index) {
        selectedEvent.value = null; // Deselect if the same card is clicked again
      } else {
        selectedEvent.value = index;
      }
    };

    const goToConfirmation = () => {
      console.log('clicked!!!!');
      router.push({ name: 'Confirm' });
    };

    return {
      events,
      selectedEvent,
      selectEvent,
      goToConfirmation,
    };
  },
};
</script>

<style scoped>
/* 카드 리스트를 위한 컨테이너, 화면의 중앙에 정렬 */
.events-list {
  display: flex; /* flexbox 레이아웃 사용 */
  flex-direction: column; /* 항목을 세로로 정렬 */
  align-items: center; /* 센터 정렬로 내부 아이템들 중앙 정렬 */
  max-width: 400px; /* 카드의 최대 너비를 400px로 설정 */
  margin: 30px auto 0;
  padding-bottom: 80px; 
}

/* 개별 이벤트 카드 스타일링 */
.event-card {
  width: 100%; /* 너비를 부모 요소의 100%로 설정 */
  border: 1px solid #555; /* 경계선은 1px, 색상 #555 */
  margin-bottom: 20px; /* 아래로 20px 여백 */
  padding: 15px; /* 내부 여백은 15px */
  border-radius: 10px; /* 모서리를 둥글게 처리 */
  cursor: pointer; /* 마우스 오버 시 포인터 모양 변경 */
  background-color: transparent; /* 배경색을 투명으로 설정 */
  transition: border-color 0.1s; /* 테두리 색상 변경에 대한 0.3초 동안의 애니메이션 효과 */
  margin-left: 30px;
  margin-right: 30px;
}

/* 선택된 카드 스타일링 */
.selected {
  border-color: red; /* 선택된 카드의 테두리 색상을 빨간색으로 변경 */
}

/* 이벤트 이미지 스타일링 */
.event-image {
  max-width: 100%; /* 최대 너비를 부모 요소의 100%로 설정 */
  height: auto; /* 높이는 자동으로 이미지 원본 비율에 맞춰 조절 */
  border-radius: 10px; /* 이미지 모서리를 둥글게 처리 */
}

/* 이벤트 상세 정보 스타일링 */
.event-details {
  text-align: center; /* 텍스트 중앙 정렬 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  margin-top: 10px; /* 상단 여백 10px 설정 */
}
</style>
