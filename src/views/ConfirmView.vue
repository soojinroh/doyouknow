<template>
  <div class="final-page">
    <div class="content">
      <h1>모임 정보 확인</h1>
      <p>신청하신 모임의 정보를 마지막으로 확인해 주세요.</p>
      <div class="meeting-details">
        <h2>모임 상세</h2>
        <p>모임 장소: {{ meetingInfo.location }}</p>
        <p>모임 날짜: {{ meetingInfo.date }} {{ meetingInfo.time }}</p>
      </div>
      <div class="bank-info">
        <h2>입금 계좌 정보</h2>
        <p>은행명: 카카오뱅크</p>
        <p>계좌번호: 7979-95-89623</p>
        <p>예금주: 김유경</p>
        <p>신청비용 : 12,900원</p>
        <p>입금자명은 이름과 핸드폰 번호 뒷 4자리로 입력해주세요. (ex.홍길동1234)</p>
        <p>입금 확인 후 신청이 확정되며, 입금 순으로 마감됩니다.</p>
      </div>
      <div class="refund-policy">
        <h2>취소 규정</h2>
        <p>취소는 모임 2일 전 자정까지 가능합니다.</p>
        <p>취소를 원하시면 @doyouknow.social 인스타그램 계정으로 DM을 보내주세요.</p>
      </div>
      <div class="confirmation-notice">
        <p>신청 확정은 1~2일 내로 문자로 안내드립니다.</p>
        <p>정확한 모임 장소 및 모임 안내는 모임 1일 전에 문자로 연락드립니다.</p>
        <p>문의사항은 @doyouknow.social 인스타그램 계정으로 DM을 보내주세요.</p>
      </div>
    </div>
    <BottomButton @button-click="showConfirmationModal">신청 완료</BottomButton>
    <ConfirmationModal
      v-if="isModalVisible"
      @confirm="register"
      @cancel="hideConfirmationModal"
    />
  </div>
</template>

<script>
import { ref, computed, watchEffect } from 'vue';
import ConfirmationModal from './components/ConfirmationModal.vue';
import BottomButton from './components/BottomButton.vue';
import { db } from '../config/firebaseConfig';
import { getDocs, getDoc, collection, doc, runTransaction, query, where } from 'firebase/firestore';
import { usePersonalInfoStore } from '../stores/personalInfoStore';
import { useMeetingStore } from '../stores/meetingStore';
import { usePersonalityStore } from '../stores/personalityStore';
import router from '@/router';
import { categories, resetCategories } from '../data/categories'; // Update the path accordingly

export default {
  components: {
    ConfirmationModal,
    BottomButton,
  },
  setup() {
    const isModalVisible = ref(false);
    const personalInfoStore = usePersonalInfoStore();
    const meetingStore = useMeetingStore();
    const personalityStore = usePersonalityStore();

  
    const meetingInfo = ref(null);

    watchEffect(async () => {
      meetingInfo.value = await meetingStore.getMeetingDetails();
    });

    const showConfirmationModal = () => {
      isModalVisible.value = true;
    };

    const hideConfirmationModal = () => {
      isModalVisible.value = false;
    };

    const validationCheck = () => {
      const { name, occupation, phoneNumber, age, gender } = personalInfoStore;
      const { selectedId } = meetingStore;
      if (!name || !occupation || !phoneNumber || !age || !gender || !selectedId) {
        alert('모든 필요한 정보를 입력해주세요.');
        return false;
      }
      return true;
    };

    const checkForDuplicates = async () => {
      const { phoneNumber } = personalInfoStore;
      const { selectedId } = meetingStore;
      const userQuery = query(collection(db, 'users'), where("phoneNumber", "==", phoneNumber), where("meetingId", "==", selectedId));
      const userDocs = await getDocs(userQuery);
      if (!userDocs.empty) {
        alert('이미 신청한 모임입니다.');
        return false;
      }
      return true;
    };

    const checkMeetingAvailability = async () => {
      const { selectedId } = meetingStore;
      const { gender } = personalInfoStore;
      const meetingRef = doc(db, 'meetings', selectedId);
      const meetingDoc = await getDoc(meetingRef);
      const meetingData = meetingDoc.data();

      const regKey = gender === 'female' ? 'female_registered_count' : 'male_registered_count';
      const maxKey = gender === 'female' ? 'female_registable_count' : 'male_registable_count';
      const regCount = meetingData[regKey];
      const maxCount = meetingData[maxKey];

      if (regCount >= maxCount) {
        alert('이 모임은 신청 가능한 인원이 모두 찼습니다.');
        return false;
      }
      return true;
    };

    const validatePersonality = () => {
      const { selections } = personalityStore;
      if (selections.length !==  categories.length) {
        console.log('-----------');
        console.log(selections.length, categories.length);
        console.log('-----------');
        alert('취향 선택을 완료해주세요.');
        return false;
      }
      return true;
    };

    const register = async () => {
      if (!validationCheck() || !await checkForDuplicates() || !await checkMeetingAvailability() || !validatePersonality()) {
        return;
      }

    try {
        await runTransaction(db, async (transaction) => {
          const { selectedId } = meetingStore;
          const { name, occupation, phoneNumber, age, gender } = personalInfoStore;
          const newUserRef = doc(collection(db, 'users'));

          const meetingRef = doc(db, 'meetings', selectedId);
          const meetingDoc = await getDoc(meetingRef);
          const regKey = gender === 'female' ? 'female_registered_count' : 'male_registered_count';
          const regCount = meetingDoc.data()[regKey];

          // Update the meeting count
          transaction.update(meetingRef, {
            [regKey]: regCount + 1
          });

          // Add new user with meeting and confirmation info
          transaction.set(newUserRef, {
            name, occupation, phoneNumber, age, gender, confirmed: true, meetingId: selectedId
          });

          // Save personality selections to user_info
          const selections = personalityStore.selections;
          selections.forEach(async (selection) => {
            const userInfoRef = doc(collection(db, 'user_info'));
            transaction.set(userInfoRef, {
              userId: newUserRef.id,
              category: selection.category,
              option: selection.option
            });
          });
        });
        alert('신청이 완료되었습니다.');
        personalInfoStore.clear();
        meetingStore.clear();
        personalityStore.clear();
        resetCategories();
        router.push({ name: 'Main' });
      } catch (error) {
        console.error("Error during transaction: ", error);
        alert('신청 처리 중 오류가 발생했습니다.');
      }
    };

    return {
      isModalVisible,
      showConfirmationModal,
      hideConfirmationModal,
      register,
      meetingInfo,
    };
  },
};
</script>

<style scoped>
.final-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  margin-bottom: 40px;
}

.content {
  width: 100%;
  max-width: 600px;
  
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25); /* 그림자 강도 증가 */
}

.meeting-details,
.bank-info,
.refund-policy,
.confirmation-notice {
  
  padding: 20px;
  border-radius: 10px; /* 모서리 둥글기 증가 */
  margin-top: 20px;
  border: 1px solid #ff4242; /* 각 카드에 빨간색 테두리 추가 */
}

h1, h2 {
  color: white;
}

p {
  margin: 10px 0;
  line-height: 1.6; /* 줄 간격 조정 */
}
</style>