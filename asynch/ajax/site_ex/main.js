window.addEventListener("load", () => {
  const wrap = document.querySelector("#wrap");
  const tabBtn = document.querySelectorAll(".tab-btn");
  // 서비 요청 객체 생성
  const xhr = new XMLHttpRequest();
  // console.log(xhr);
  // json요청
  xhr.open("GET", "data.json", true);
  // 데이터 도착
  xhr.onload = function () {
    // console.log(xhr);
    // 요청 성공
    if (xhr.status === 200) {
      // 문자열 => 객체 변환
      const data = JSON.parse(xhr.responseText);
      // console.log(data);
      // 상품 출력 함수
      function renderProduct(items) {
        // console.log(items);
        // 기존 내용 제거 (초기화)
        wrap.innerHTML = "";
        // items 하나씩 꺼낸다.(배열 반복)
        items.forEach((item) => {
          // console.log(item);
          // 숫자로 변환
          const price = Number(item.price);
          // console.log(price);
          const sale = Number(item.sale);
          // console.log(price, sale);
          // 할인 가격 계산
          const discountPrice = price - (price * sale) / 100;
          // console.log(discountPrice);
          wrap.innerHTML += `
            <div class="card">
        <!-- 할인 뱃지 -->
        <span class="sale-badge"> ${sale}% OFF </span>
        <!-- 이미지 -->
        <div class="img-box">
         <img src="${item.img}" alt="${item.alt}" />
        </div>
        <div class="text"></div>
        <!-- 상품명 -->
        <h2>${item.title}</h2>
        <!-- 설명 -->
        <p class="desc">${item.desc}</p>
        <!-- 가격 -->
        <div class="price-box">
          <!-- 정가 -->
          <p class="origin-price">${price.toLocaleString()}원</p>
          <!-- 할인 가격 -->
          <p class="sale-price">${discountPrice.toLocaleString()}원</p>
        </div>
        <!-- 버튼 -->
         <button class="buy-btn">구매하기</button>
      </div>
            `;
        });
      }
      // 처음 로드될 때 출력
      renderProduct(data);
      // 탭 버튼 클릭시
      tabBtn.forEach((btn) => {
        // console.log(btn);
        btn.addEventListener("click", function () {
          // console.log(this);
          // active 제거
          tabBtn.forEach(function (item) {
            item.classList.remove("active");
          });
          console.log(this);
          
          // 클릭한 버튼 active 추가
          this.classList.add("active");
          // data-tab 값 가져오기
          const btnTab = this.dataset.tab;
            console.log(btnTab);
          // 전체
          if (btnTab === "all") {
            renderProduct(data);
          } else {
            const filterData = data.filter((item) => item.category === btnTab);
            console.log(filterData);
            // 필터링된 상품만 출력
            renderProduct(filterData);
          }
        });
      });
    }
  };
  // 데이터 보내기
  xhr.send();
});
