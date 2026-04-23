window.addEventListener("load" , ()=>{
    // console.log("완료");
    const pics = document.querySelectorAll(".pic");
    const lightBox = document.querySelector("#lightBox");
    const lightBoxImg = document.querySelector("#lightBox-img");
    const lightBoxTitle = document.querySelector("#lightBox-title");
    pics.forEach((pic)=>{
        // console.log(pic);
        const bicSrc = pic.dataset.src;
        // console.log(bicSrc);
        const bigTitle = pic.dataset.title;
        console.log(bigTitle);
        pic.addEventListener("click", ()=>{
            lightBox.style.display = "flex"
            lightBoxImg.src = bicSrc
            lightBoxTitle.textContent = bigTitle
        });
        });
        // 배경 클릭시 닫기
        lightBox.addEventListener("click" , ()=>{
            lightBox.style.display = "none";
        });
});