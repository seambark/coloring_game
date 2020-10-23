# 색칠공부 게임

## 게임 내용

지정된 그림에 원하는 색상을 채색하는 게임

## 구현 한 기능

- 몇 개의 그림 중 선택
- 선택된 그림 보이게 만들기
- 그림에 채색 가능하도록 하기
- 색상 선택 컬러칩
- 선택한 컬러 컬러칩에 생성
- 컬러칩 글씨 색상이 어두운 색이면 흰색, 밝으면 검정색
- 선택된 색상 마우스에 표시

## 구현해야 될 게임 기능

- 처음에 생각한 기능들은 다 구현했다. 그런데 고민되는 부분들이 있어서 추가작업 예정이다

## 작업하면서 고민되는 부분

- ~~컬러칩이 어두우면 글씨가 안보임(기능 추가 필요)~~<br>\* rgb (130,130,130) 까지는 흰색, 그 이후엔 검정색으로 변하도록 작업
- ~~컬러칩 생성에 대한 사용방법 설명 필요
  (컬러피커 선택 만으로는 컬러칩을 만들 수 없고, <br>상단에 존재하는 컬러피커칩을 누른 뒤 선택색상영역을 눌러야 생성됨)~~ <br>아니면 다른 방법으로 구현을 하자<br>\* 설명문구 박스 추가
- 생성한 컬러칩 순서 원하는대로 바꿀 수 있으면 좋을 것 같다
- 마우스를 따라다니는 색상표시 부분이 object의 svg파일을 만나면 버벅거린다
- 컬러칩 생성시의 실행시간이 길다

## 게임 자료

[ SVG 출처 ] : https://svgsilh.com/ko/

[ SVG CC0 1.0 저작권 자료 ] : https://creativecommons.org/publicdomain/zero/1.0/deed.ko
