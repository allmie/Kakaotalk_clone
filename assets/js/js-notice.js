let keywordArray = ["Tips", "나우", "나우"];
let shortCtnArray = [
  "'컴알못'도 문제 없어요~ 단축키 총정리",
  "멜론에서 클래식 공연 보고 가세요",
  "톡으로 QR 체인지 하세요",
];
setInterval(() => {
  let selectKey = keywordArray.shift();
  let selectShortCtn = shortCtnArray.shift();

  keywordArray.push(selectKey);
  shortCtnArray.push(selectShortCtn);

  const keyword = document.getElementsByClassName(
    "kt__main__notice-column-keyword"
  );
  const shortCtn = document.getElementsByClassName(
    "kt__main__notice-column-short-content"
  );

  keyword[0].innerHTML = selectKey;
  shortCtn[0].innerHTML = selectShortCtn;
}, 4000);
