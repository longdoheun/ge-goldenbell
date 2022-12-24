const CAPITAL_CITY = {
  name:"수도 맞추기",
  tries: 0,
  quiz: [
    ["말레이시아의 수도는?", '쿠엘라룸푸르'],
    ["싱가포르의 수도는?", "싱가포르"],
    ["태국의 수도는?", "방콕"],
    ["인도의 수도는?", "델리"],
  ],
}
const DRINK_INITIAL = {
  name:"음료초성맞추기",
  tries: 0,
  quiz: [
    ["ㄴㄹㄷㅅㅇㄷ", "나랑드사이다"],
    ["ㅇㅊㅅ", '웰치스'],
    ["ㅌㄹㅌ","토레타"],
    ["ㅇㅊㅎㅅ", "아침햇살"],
    ] ,
}
const SPORTS_INITIAL = {
  name:"스포츠 브랜드 초성 맞추기",
  tries: 0,
  quiz: [
    ["ㅅㅋㅊㅅ", "스케쳐스"],
    ["ㄹㅋㅅㅌ", '라코스테'],
    ["ㄴㅂㄹㅅ","뉴발란스"],
    ["ㅍㄹㅅㅍㅅ", "프로스펙스"],
    ] 
}
const ANIMATION_CHARACTER_NAME ={
  name:"애니메이션 등장인물 이름 맞추기",
  tries: 0,
  image: [
    ["./image/sad.png", "슬픔이"],
    ["./image/yubaba.png", '유바바'],
    ["./image/merida.png","메리다"],
    ["./image/phiona.png", "피오나"],
    ] 
}
const BRAND_LOGO_ENLARGEMENT = {
  name:"브랜드로고확대",
  tries: 0,
  image: [
    ["./el/el-starbucks.png", "스타벅스","./image/starbucks.png"],
    ["./el/el-macdonald.png", '맥도날드',"./image/macdonald.png"],
    ["./el/el-BBQ.png","BBQ","./image/BBQ.png"],
    ]
}
const KOREAN_ACTOR_ENLARGEMENT = {
  name:"인물 조금 보여주고 맞추기",
  tries: 0,
  image: [
    ["./el/el-bogum.png", "박보검","./image/bogum.png"],
    ["./el/el-gangho.png", '송강호',"./image/gangho.png"],
    ["./el/el-woosung.jpg", '정우성',"./image/woosung.png"],
    ]
}
const KOREAN_ACTOR_PHILMOGRAPHY = {
  name:"배우 출연 작품 3개 맞추기",
  tries: 0,
  image: [
    ["./image/gangho.png", "송강호"],
    ["./image/boyoung.png", '박보영'],
    ["./image/haejin.png","유해진"],
    ]
}
const MZ_TERM = {
  name:"MZ 세대 용어로 속담 맞추기",
  tries: 0,
  image: [
    ["./mz/mz2.png", "뱁새가 황새 따라가다 가랑이 찢어진다"],
    ["./mz/mz4.png","참새가 방앗간을 그냥 지나칠리 없다"],
    ["./mz/mz1.png", "식은 죽 먹기+누워서 떡먹기"],
    ["./mz/mz3.png", '바늘 가는 데 실간다'],
    ["./mz/mz6.png", "아니 땐 굴뚝에 연기 날 리 없다"],
    ["./mz/mz5.png", "소 잃고 외양간 고친다"],
    ]
}
const MISSION_PASS = {
  name:"미션패스",
}
const LAST_YEAR_DRAMA_5 = {
  name:"작년에 방영한 드라마 이름 다섯가지",
}
const LAST_YEAR_SONG_5 = {
  name:"작년에 나온 노래 이름 다섯가지",  
}
const PRIZE = {
  name:"경품추첨", 
}
const UNDEFINED = {
  name:"미정", 
}
const INFO = {
  num1  : { type : MISSION_PASS, finish : 1, },
  num2  : { type : ANIMATION_CHARACTER_NAME, finish : 1, },
  num3  : { type : MISSION_PASS, finish : 1, },
  num4  : { type : UNDEFINED, finish: 1 },
  num5  : { type : UNDEFINED, finish: 1 },
  num6  : { type : CAPITAL_CITY, finish: 1,},
  num7  : { type : PRIZE, finish : 1 },
  num8  : { type : MZ_TERM, finish: 1,},
  num9  : { type : CAPITAL_CITY, finish: 1,},
  num10 : { type : UNDEFINED, finish: 1 },
  num11 : { type : KOREAN_ACTOR_PHILMOGRAPHY, finish: 1},
  num12 : { type : MISSION_PASS, finish : 1, },
  num13 : { type : LAST_YEAR_DRAMA_5, finish : 1, },
  num14 : { type : DRINK_INITIAL, finish: 1,},
  num15 : { type : KOREAN_ACTOR_ENLARGEMENT, finish: 1, },
  num16 : { type : PRIZE, finish : 1 },
  num17 : { type : KOREAN_ACTOR_PHILMOGRAPHY, finish: 1 },
  num18 : { type : SPORTS_INITIAL, finish: 1,},
  num19 : { type : BRAND_LOGO_ENLARGEMENT, finish: 1, },
  num20 : { type : MISSION_PASS, finish : 1, },
  num21 : { type : LAST_YEAR_SONG_5, finish: 1 },
  num22 : { type : MZ_TERM, finish: 1,},
  num23 : { type : MISSION_PASS, finish : 1, },
  num24 : { type : ANIMATION_CHARACTER_NAME, finish : 1, },
  num25 : { type : PRIZE, finish : 1 },
}

export default INFO;