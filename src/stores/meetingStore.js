import { defineStore } from 'pinia';
import { db } from '../config/firebaseConfig'; // Firestore 설정 가져오기
import { doc, getDoc } from 'firebase/firestore';

export const useMeetingStore = defineStore('meeting', {
  state: () => ({
    selectedId: '',
  }),
  getters: {},
  actions: {
    select(id) {
      this.selectedId = id;
    },
    async getMeetingDetails() {
      if (!this.selectedId) {
        return null; // 선택된 ID가 없으면 null 반환
      }
      const meetingRef = doc(db, 'meetings', this.selectedId);
      try {
        const docSnap = await getDoc(meetingRef);
        if (docSnap.exists()) {
          return docSnap.data(); // 문서 데이터 반환
        } else {
          console.log('No such document!');
          return null; // 문서가 없을 경우 null 반환
        }
      } catch (error) {
        console.error("Error fetching meeting details: ", error);
        return null; // 에러 발생 시 null 반환
      }
    },
    clear() {
      this.selectedId = '';
    }
  },
});
