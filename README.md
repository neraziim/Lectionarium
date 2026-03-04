# Lectionarium catechistis🥰

## 천주교 전례력과 독서주기에 따른 독서 및 복음 내용을 확인할 수 있는 웹 서비스

## 서론

### 배경

가톨릭 교회의 행사는 전례력에 따라 진행되기 때문에 복음화계획서나 연간교리계획을 세울 때 전례력을 참고하면 큰 도움이 된다.<br>
현재 널리 이용되는 사이트에서는 전례 특정 기간까지만 올라와있어 계획을 세우는 시점에는 전례력 및 미사 전례의 세부적인 내용을 확인하기에 너무나도 불편한 실정이다.

전례에 쓰이는 성경 본문은 독서 주기에 따라 반복되는데, 그 근거는 ‘말씀’의 중요성을 강조한 제2차 바티칸공의회의 전례 개혁에 있다.
제2차 바티칸 공의회에서는 1년 주기에 2독서(독서와 복음)로 구성됐던 예전의 ‘미사 독서’ 배열을 다음과 같이 개편했다.

#### 독서 주기

  **주일과 축일 독서 목록의 세 가지 특징**

  1. 세 독서(구약, 사도서, 복음)
  2. 3년 주기(가나다 해)
  3. ‘주제의 조화’(전례 시기와 독서들 사이 주제의 일관성을 고려) 및 ‘준연속 독서’(시작한 서간서나 복음서를 계속해서 읽어나가지만, 필요성이 적다고 여겨지는 부분은 생략)

  **평일 독서 목록의 네 가지 특징**

  1. 두 개의 독서(구약이나 사도서, 복음)
  2. 사순 시기는 세례와 회개를 주제로 한 해 주기로 배정
  3. 대림·성탄·부활 시기의 평일에 한 해 주기로 배정
  4. 연중 시기 평일에는 복음은 한 해 주기, 독서는 2년 주기(홀수, 짝수)로 배정

#### **전례력의 계산**

  대표적인 이동 축일인 **주님 부활 대축일**은 춘분 이후 보름달 다음 첫 일요일이다. 이는 가우스 부활절 알고리즘을 활용할 수 있다.<br>
  **사순 시기**는 부활 대축일로부터 46일을 역산한 재의 수요일부터 주님 만찬 성목요일(부활 대축일 직전 목요일)의 주님 만찬 미사 직전까지이다. <br>
  **부활 시기**는 주님 부활 대축일 밤 미사(토요일)부터 성령 강림 대축일까지이다. 부활 대축일 후 40일째 되는 목요일(또는 부활 제7주일)을 주님승천대축일로, 50일째 되는 주일을 성령강림대축일로 지낸다. <br>
  **연중 시기**는 주님 부활 대축일의 날짜에 따라 총 33주간이나 34주간으로 지내는데 33주간이 되는 연도에는 성령 강림 대축일 이후의 한 주간이 삭제되어 제9주간 또는 제10주간으로 시작해서 항상 제34주간 토요일에 연중 시기가 끝난다. <br>
  **대림 시기**는 12월 25일로부터 과거로 거슬러 4번째 일요일부터 대림 시기가 시작되고, 12월 24일 낮에 끝납니다. 대림 제1주일부터는 독서 주기가 다음 해로 넘어간다. <br>
  **성탄 시기**는 주님 성탄 대축일부터 주님 세례 축일까지이다. 주님 세례 축일은 1월 6일 다음에 오는 주일 또는 1월 7일이나 8일에 오는 주일의 주님 공현 대축일 다음 월요일이다.

  **의무 축일**: 천주의 성모 마리아 대축일 1월 1일, 성모 승천 대축일 8월 15일을 포함한다.

### 목적

- **전례력 계산**: 부활 대축일 등 이동 축일과 함께 매년 반복되는 전례 주기를 계산할 수 있다!
- **교리교사의 정신건강 증진**: 기존 사이트에서 확인하기 어려운 미래의 독서, 복음 내용을 미리 확인하여 연간 계획 수립을 도울 수 있다!

## 도구 및 방법

### backend

- node.js / express
- postgresql

### frontend

- Next.js

### 천주교 성경 DB 구축

- ~~json 파일을 구하지 못해서...개신교는 어둠의 경로가 있던데 왜 천주교는 없는 것일까요? 사람들이 가톨릭굿뉴스에 만족하는 것일까요?~~
- 한국천주교주교회의 사이트에서 크롤링을 시도하기로 했습니다...

### 전례력 계산 로직

- ~~이 험난한 여정을 하느니 그냥 주어진 현실에 만족하고 사는 게 행복할 수도 있겠다는 생각을 하게 됩니다.~~

- 독서 주기 계산식: year % 3 의 값이 1인 경우 '가해', 2인 경우 '나해', 0인 경우 '다해'

  ```
  cosnt lectionary = (year) => {
    return LectionaryYear = year % 3 === 1 ? '가해' : year % 3 === 2 ? '나해' : '다해';
  }
  ```

- 대림 및 성탄 시기:

  ```
  //대림 시기
  function getAdvent(year) {
    const week = 7;
    //성탄대축일 객체 생성 (기준 날짜)
    const christmas = new Date(year, 11, 25);
    //성탄대축일 요일 확인
    const dayOfWeek = christmas.getDay();

    //성탄대축일이 주일(0)이면 7일 전이 대림 제4주일, 그밖의 n요일의 경우 n일 전이 대림 제n주일임.
    const fourthDuration = dayOfWeek === 0 ? week : dayOfWeek;
    const fourthAdvent = new Date(christmas);
    fourthAdvent.setDate(christmas.getDate()-fourthDuration);

    //대림 제n주일은 대림 제4주일로부터 (4-n)주 전
    const advent = new Date(fourthAdvent);
    advent.setDate(fourthAdvent.getDate() - week * n);//대충 이런 느낌으로 만들면 되지 않을까...

    return {advent, fourthAdvent, christmas};
  }

  //성탄 시기
  function getNativitatis(year) {
    //주님 공현 대축일(1월 6일) 객체 생성(기준 날짜)
    const epiphany = new Date(year, 0, 6);
    const dayOfWeek = epiphany.getDay();

    //주님 공현 대축일 이동
    const movedEpiphany = new Date(epiphany);
    if (dayOfWeek >= 5) {
      movedEpiphany.setDate(epiphany.getDate() + (7 - dayOfWeek))
      } else {
      movedEpiphany.setDate(epiphany.getDate() - dayOfWeeek);
    }

    //주님 세례 축일
    const baptism = dayOfWeek>=5 ? new Date(movedEpiphany.getDate() + 1): new Date(movedEpiphany.getDate() + 7)

    return {movedEpiphany, baptism};
  }
  ```

- 가우스 부활절 알고리즘

  ```
  function computus(year) {
    const a = year % 19;
    const b = year % 4;
    const c = year % 7;

    // 그레고리력 보정값
    const k = Math.floor(year / 100);
    const p = Math.floor((13 + 8 * k)/25);
    const q = Math.floor(k/4);
    const M = (15- q + k - q) % 30;
    const N = (4+k-q) % 7;

    const d = (19 * a + M); //파스칼 보름달 변수
    const e = (2 * b + 4 * c + 6 * d + N)% 7 //일요일 찾기

    let month = 3;
    let day = 22 + d + e;

    if ( day > 31) {
      month = 4;
      day -= 31;
    }

    //Lichtenberg 예외 처리
    if (month === 4 && day === 26) { day = 19; }
    if (month === 4 && day === 25 && d === 28 && a > 10) { day = 18; }

  const easter = new Date(year, month, day);

  return easter;
  }

  ```

- 사순: 재의 수요일부터~ 성목요일 낮까지
  ```
  function lent(year, easter) {
    //재의 수요일은 부활대축일로부터 46일 전
    const ashWednesday = new Date(easter);
    ashWednesday.setDate(easter.getDate() - 46);
    
    const endOfLent = new Date(ashWednesday);
    endOfLent.setDate(ashWednesday.getDate() + 40 );

    return {ashWednesday, endOfLent};
  }
  ```
- 연중:
  ```
  function annum(year) {
    //악 이거 뭔가 더 쉽게 적을 수 있을 것 같은데
    const annums = [];

    //연중시기 첫째 부분 : baptism ~ ashWednesday
    //연중시기 둘째 부분 : easter + 51 ~ advent - 1, annum34 = advent - 7;
      //-> 대림 1주 전 주를 연중 34주일로, 역산하여 성령강림 대축일 이후까지 번호 부여

    //return annums;
  }
  ```

## 주요 기능

- **가/나/다해 판별**: 입력된 날짜를 기준으로 독서주기를 계산
- **전례시기 판별**: 입력된 날짜를 바탕으로 전례시기를 계산하여 시각화
- **미사 전례에 쓰이는 성경 본문 조회**: 독서주기 및 전례력 계산 결과를 바탕으로 매일미사에 쓰이는 성경 본문 조회

## 진행상황

- [ ] 주일 독서/복음 계산 로직 구현
- [ ] 천주교 성경 DB구축
- [ ] 엉망이어도 일단 보이는 사이트 만들기
- [ ] 피드백 1차
- [ ] 평일 독서/복음 계산 로직 구현
- [ ] 축일 우선순위 로직 구현

### 나중에 하면 재미있겠다..

- 성경 각주도 추가해서 본문 넘어다닐 수 있도록 하기
- 본문 비교하기..!!! 교안 쓸 때 진짜 편하겠다
