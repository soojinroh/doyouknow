<template>
  <div class="events-container">
    <div class="events-list">
      <div
        v-for="event in events"
        :key="event.id"
        class="event-card"
        :class="{ selected: selectedEventId === event.id, 'not-selectable': !event.isSelectable }"
        @click="event.isSelectable && selectEvent(event.id)"
      >
        <img :src="event.imageUrl" alt="Event" class="event-image" />
        <div class="event-details">
          <h3>{{ event.date }} ({{ event.weekDay }}) {{ event.time }}</h3>
          <h4>in {{ event.location }}</h4>
          <h5>{{ event.progress_time }} hour</h5>
        </div>
        <!-- 판매완료 표시 -->
        <div v-if="!event.isSelectable" class="sold-out-overlay">SOLD OUT</div>
      </div>
    </div>
    <BottomButton @button-click="goToConfirmation">다음</BottomButton>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BottomButton from './components/BottomButton.vue';
import { useMeetingStore } from '../stores/meetingStore';
import { usePersonalInfoStore } from '../stores/personalInfoStore';
import { db } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default {
  components: {
    BottomButton,
  },
  setup() {
    const router = useRouter();
    const events = ref([]);
    const meetingStore = useMeetingStore();
    const personalInfoStore = usePersonalInfoStore();
    const selectedEventId = ref(meetingStore.selectedId);

    onMounted(async () => {
      const userGender = personalInfoStore.gender;
      const querySnapshot = await getDocs(collection(db, "meetings"));
      
      events.value = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const isMale = userGender === 'male';
        const isFemale = userGender === 'female';
        const maleSpacesLeft = data.male_registable_count - data.male_registered_count;
        const femaleSpacesLeft = data.female_registable_count - data.female_registered_count;
        const weekDay = getWeekday(data.date);
        
        return {
          id: doc.id,
          ...data,
          isSelectable: (isMale && maleSpacesLeft > 0) || (isFemale && femaleSpacesLeft > 0),
          weekDay
        };
      });
    });

    function getWeekday(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('ko-KR', { weekday: 'short' });
    }


    const selectEvent = (id) => {
      if (selectedEventId.value === id) {
        selectedEventId.value = null;
      } else {
        selectedEventId.value = id;
        meetingStore.select(id);
      }
    };

    const goToConfirmation = () => {
      if (!selectedEventId.value) {
        alert('신청하실 모임을 선택해주세요.');
      } else {
        router.push({ name: 'Confirm' });
      }
    };

    return {
      events,
      selectedEventId,
      selectEvent,
      goToConfirmation,
    };
  },
};
</script>

<style scoped>
/* 스타일 코드는 원래 버전대로 유지됩니다 */
.events-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 30px auto 0;
  padding-bottom: 80px;
}

.event-card {
  width: 100%;
  border: 1px solid #555;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
  transition: border-color 0.1s;
  margin-left: 30px;
  margin-right: 30px;
}

.selected {
  border-color: red;
}

.not-selectable {
  opacity: 0.5;
  cursor: not-allowed;
}

.sold-out-overlay {
  background-color: rgba(255, 0, 0); /* 반투명 빨간색 배경 */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
}

.event-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.event-details {
  text-align: center;
  color: white;
  margin-top: 10px;
}
</style>
