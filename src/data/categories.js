// src/data/categories.js
export const categories = [
  {
    description: '당신의 MBTI 유형을 선택해주세요',
    name: 'mbti',
    options: [      { name: 'ISTJ' }, { name: 'ISFJ' }, { name: 'INFJ' }, { name: 'INTJ' },
    { name: 'ISTP' }, { name: 'ISFP' }, { name: 'INFP' }, { name: 'INTP' },
    { name: 'ESTP' }, { name: 'ESFP' }, { name: 'ENFP' }, { name: 'ENTP' },
    { name: 'ESTJ' }, { name: 'ESFJ' }, { name: 'ENFJ' }, { name: 'ENTJ' }],
    selected: null,
  },
  {
    name: 'movieTaste',
    description: '당신을 자신을 어떤 쪽에 더 가까운 사람이라고 생각하나요?',
    options: [
      { name: '블록버스터 영화 애호가' }, 
      { name: '예술영화/독립영화 애호가' }, 
    ],
    selected: null,
  },
  {
    name: 'smartFunny',
    description: '당신을 자신을 어떤 쪽에 더 가까운 사람이라고 생각하나요?',
    options: [
      { name: '스마트한 사람' }, 
      { name: '재미있는 사람' }, 
    ],
    selected: null,
  },
  {
    name: 'fashionStyle',
    description: '당신의 패션 스타일을 선택해주세요',
    options: [
      { name: '클래식' }, 
      { name: '캐주얼' }, 
      { name: '스트릿' }, 
    ],
  },
  {
    name: 'musicTaste',
    description: '당신의 음악 취향을 선택해주세요',
    options: [
      { name: '힙합'},
      { name: '팝' },
      { name: '락' },
      { name: '재즈' },
      { name: '클래식' },
      { name: 'EDM' },
      { name: 'R&B' },
      { name: '인디' },
    ]
  },
  {
    name: 'selfMotivatedDegree',
    description: '당신은 얼마나 자기 주도적인 사람인가요?',
    options: [
      { name: '매우 자기주도적' },
      { name: '자기주도적' },
      { name: '보통' },
      { name: '자기주도적이지 않음' },
      { name: '전혀 자기주도적이지 않음' },
    ]
  },
  {
    name: 'creativeDegree',
    description: '당신은 창의적인 사람인가요?',
    options: [
      { name: '매우 창의적' },
      { name: '창의적' },
      { name: '보통' },
      { name: '창의적이지 않음' },
      { name: '전혀 창의적이지 않음' },
    ]
  },
  {
    name: 'loveJob',
    description: '당신은 당신의 일을 좋아하는 편인가요?',
    options: [
      { name: '매우 좋아함' },
      { name: '좋아함' },
      { name: '보통' },
      { name: '좋아하지 않음' },
      { name: '전혀 좋아하지 않음' },
    ]
  },
  {
    name: 'familyImportance',
    description: '당신은 가족을 얼마나 중요하게 생각하나요?',
    options: [
      { name: '매우 중요하게 생각함' },
      { name: '중요하게 생각함' },
      { name: '보통' },
      { name: '중요하게 생각하지 않음' },
      { name: '전혀 중요하게 생각하지 않음' },
    ]
  },
  {
    name: 'lonlinessDegree',
    description: '당신은 얼마나 자주 외로움을 느끼나요?',
    options: [
      { name: '매우 자주 느낌' },
      { name: '자주 느낌' },
      { name: '보통' },
      { name: '때때로 느낌' },
      { name: '전혀 느끼지 않음' },
    ]
  },
  {
    name: 'conversationTheme',
    description: '당신이 주로 대화하는 주제는 무엇인가요?',
    options: [
      {name: '일상 이야기'},
      {name: '취미 이야기'},
      {name: '좋아하는 것 이야기'},
      {name: '영화/드라마 이야기'},
      {name: '음악 이야기'},
      {name: '책 이야기'},
      {name: '연애 이야기'},
      {name: '정치/사회 이야기'},
      {name: '자기계발 이야기'},
    ]
  },
  {
    name: 'workLifeBalance',
    description: '당신은 일과 생활의 균형을 어떻게 유지하고 있나요?',
    options: [
      {name: '워커홀릭'},
      {name: '일과 생활을 균형있게 유지'},
      {name: '일보다는 생활이 중심'},
    ]
  },
  {
    name: 'travelStyle',
    description: '당신은 여행을 가면 주로 어떤 활동을 하나요?',
    options: [
      {name: '명소 관광'},
      {name: '맛집 탐방'},
      {name: '쇼핑'},
      {name: '힐링'},
      {name: '액티비티'},
      {name: '휴식'},
      {name: '취향 디깅'}
    ]
  },
  {
    name: 'hangoutStyle',
    description: '당신은 친구들을 만나면 주로 어떻게 시간을 보내나요?',
    options: [
      {name: '집에서 놀기'},
      {name: '스포츠'},
      {name: '맛집/카페 탐방'},
      {name: '클럽'},
      {name: '술 마시기'},
      {name: '영화/전시회 보기'},
      {name: '잘 만나지 않음'},
    ]
  },
  {
    name: 'priceRange',
    description: '당신은 모임 진행시 어느 정도 가격대의 식당을 선호하나요?',
    options: [
      {name: '2만원 이하'},
      {name: '4만원 이하'},
      {name: '6만원 이하'},
      {name: '8만원 이하'},
      {name: '10만원 이하'},
      {name: '10만원 이상'},
    ]
  },
];

export function resetCategories() {
  categories.map(category => {
    category.selected = null;
    return category;
  });
}