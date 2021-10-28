const innerConValue = document.querySelector(".innerCon");
const containerValue = document.querySelector(".container");
const reviewConValue = document.querySelector(".reviewCon");
const imgContainerForReviewValue = document.querySelector(".imgContainerForReview");
const cancelConValue = document.querySelector(".cancelCon");
const reviewTextConValue = document.querySelector(".reviewTextCon");
const movieData = [
    {title: "Copshop(2020)",image: `a.jpg`, about: `The Forgotten Battle (2020)====================IMDb Rating – 7.4/10The Forgotten war ဆိုတဲ့ နာမည်လေးအတိုင်း သမိုင်းတွင်ခဲ့ပေမဲ့ သမိုင်းစာမျက်နှာထက်မှာအကျယ်တဝင့်ဖော်ပြခြင်းမခံခဲ့ရတဲ့ စစ်ပွဲလေးအကြောင်းကိုအခြေတည်ရိုက်ထားတဲ့ဇာတ်ကားလေးပါ`},
    {title: "Warning(2021)",image: `b.jpg`, about: `Dune (2021)==========IMDb Rating – 8.4/10စောင့်​မျှော်​နေသူ​ ​အ​တော်များများရှိ​နေမယ့် DUNE ရုပ်ရှင်ကားကြီးထွက်လာပြီမို့ CMပရိတ်သတ်​တွေအတွက် အမြန်ဆုံးတင်ဆက်​ပေးလိုက်ပါတယ်၊
    သာမန် Sci- fic​တွေထက် အပုံကြီးကျယ်ပြန့်တဲ့ Frank Herbertရဲ့ Duneစာအုပ်​တွဲ​တွေကို မှီငြမ်းရိုက်ကူးထားတဲ့
    ဇာတ်လမ်း၊ ​Timotheé Chalamet, Zendaya, Oscar Issac, တို့အပါအဝင် ကောင်း​ပေ့ဆိုတဲ့ Cast​တွေ၊ Legendarysoundtrack တွေပဲ တီးခတ်တဲ့ Ha`},
    {title: "Sanak(2021)",image: `c.png`, about: `The Forgotten Battle (2020)====================IMDb Rating – 7.4/10The Forgotten war ဆိုတဲ့ နာမည်လေးအတိုင်း သမိုင်းတွင်ခဲ့ပေမဲ့ သမိုင်းစာမျက်နှာထက်မှာအကျယ်တဝင့်ဖော်ပြခြင်းမခံခဲ့ရတဲ့ စစ်ပွဲလေးအကြောင်းကိုအခြေတည်ရိုက်ထားတဲ့ဇာတ်ကားလေးပါ`},
    {title: "Copshop(2020)",image: `a.jpg`, about: `The Forgotten Battle (2020)====================IMDb Rating – 7.4/10The Forgotten war ဆိုတဲ့ နာမည်လေးအတိုင်း သမိုင်းတွင်ခဲ့ပေမဲ့ သမိုင်းစာမျက်နှာထက်မှာအကျယ်တဝင့်ဖော်ပြခြင်းမခံခဲ့ရတဲ့ စစ်ပွဲလေးအကြောင်းကိုအခြေတည်ရိုက်ထားတဲ့ဇာတ်ကားလေးပါ`},
    {title: "The Grand(2021)",image: `d.png`, about: `Dune (2021)==========IMDb Rating – 8.4/10စောင့်​မျှော်​နေသူ​ ​အ​တော်များများရှိ​နေမယ့် DUNE ရုပ်ရှင်ကားကြီးထွက်လာပြီမို့ CMပရိတ်သတ်​တွေအတွက် အမြန်ဆုံးတင်ဆက်​ပေးလိုက်ပါတယ်၊
    သာမန် Sci- fic​တွေထက် အပုံကြီးကျယ်ပြန့်တဲ့ Frank Herbertရဲ့ Duneစာအုပ်​တွဲ​တွေကို မှီငြမ်းရိုက်ကူးထားတဲ့
    ဇာတ်လမ်း၊ ​Timotheé Chalamet, Zendaya, Oscar Issac, တို့အပါအဝင် ကောင်း​ပေ့ဆိုတဲ့ Cast​တွေ၊ Legendarysoundtrack တွေပဲ တီးခတ်တဲ့ Ha`},
    {title: "The Trip(2021)",image: `e.png`, about: `The Forgotten Battle (2020)====================IMDb Rating – 7.4/10The Forgotten war ဆိုတဲ့ နာမည်လေးအတိုင်း သမိုင်းတွင်ခဲ့ပေမဲ့ သမိုင်းစာမျက်နှာထက်မှာအကျယ်တဝင့်ဖော်ပြခြင်းမခံခဲ့ရတဲ့ စစ်ပွဲလေးအကြောင်းကိုအခြေတည်ရိုက်ထားတဲ့ဇာတ်ကားလေးပါ`},
    {title: "Copshop(2020)",image: `a.jpg`, about: `The Forgotten Battle (2020)====================IMDb Rating – 7.4/10The Forgotten war ဆိုတဲ့ နာမည်လေးအတိုင်း သမိုင်းတွင်ခဲ့ပေမဲ့ သမိုင်းစာမျက်နှာထက်မှာအကျယ်တဝင့်ဖော်ပြခြင်းမခံခဲ့ရတဲ့ စစ်ပွဲလေးအကြောင်းကိုအခြေတည်ရိုက်ထားတဲ့ဇာတ်ကားလေးပါ`},
    {title: "Under Wraps(2008)",image: `f.png`, about: `The Forgotten Battle (2020)====================IMDb Rating – 7.4/10The Forgotten war ဆိုတဲ့ နာမည်လေးအတိုင်း သမိုင်းတွင်ခဲ့ပေမဲ့ သမိုင်းစာမျက်နှာထက်မှာအကျယ်တဝင့်ဖော်ပြခြင်းမခံခဲ့ရတဲ့ စစ်ပွဲလေးအကြောင်းကိုအခြေတည်ရိုက်ထားတဲ့ဇာတ်ကားလေးပါ`},
    {title: "The Forgotten(2020)",image: `a.jpg`, about: `Dune (2021)==========IMDb Rating – 8.4/10စောင့်​မျှော်​နေသူ​ ​အ​တော်များများရှိ​နေမယ့် DUNE ရုပ်ရှင်ကားကြီးထွက်လာပြီမို့ CMပရိတ်သတ်​တွေအတွက် အမြန်ဆုံးတင်ဆက်​ပေးလိုက်ပါတယ်၊
    သာမန် Sci- fic​တွေထက် အပုံကြီးကျယ်ပြန့်တဲ့ Frank Herbertရဲ့ Duneစာအုပ်​တွဲ​တွေကို မှီငြမ်းရိုက်ကူးထားတဲ့
    ဇာတ်လမ်း၊ ​Timotheé Chalamet, Zendaya, Oscar Issac, တို့အပါအဝင် ကောင်း​ပေ့ဆိုတဲ့ Cast​တွေ၊ Legendarysoundtrack တွေပဲ တီးခတ်တဲ့ Ha`},
    {title: "Blah Bla(2009)",image: `c.png`, about: `The Forgotten Battle (2020)====================IMDb Rating – 7.4/10The Forgotten war ဆိုတဲ့ နာမည်လေးအတိုင်း သမိုင်းတွင်ခဲ့ပေမဲ့ သမိုင်းစာမျက်နှာထက်မှာအကျယ်တဝင့်ဖော်ပြခြင်းမခံခဲ့ရတဲ့ စစ်ပွဲလေးအကြောင်းကိုအခြေတည်ရိုက်ထားတဲ့ဇာတ်ကားလေးပါ`},
    {title: "Copshop(2020)",image: `a.jpg`, about: `The Forgotten Battle (2020)====================IMDb Rating – 7.4/10The Forgotten war ဆိုတဲ့ နာမည်လေးအတိုင်း သမိုင်းတွင်ခဲ့ပေမဲ့ သမိုင်းစာမျက်နှာထက်မှာအကျယ်တဝင့်ဖော်ပြခြင်းမခံခဲ့ရတဲ့ စစ်ပွဲလေးအကြောင်းကိုအခြေတည်ရိုက်ထားတဲ့ဇာတ်ကားလေးပါ`},
    {title: "Catch me if you can(1999)",image: `a.jpg`, about: `The Forgotten Battle (2020)====================IMDb Rating – 7.4/10The Forgotten war ဆိုတဲ့ နာမည်လေးအတိုင်း သမိုင်းတွင်ခဲ့ပေမဲ့ သမိုင်းစာမျက်နှာထက်မှာအကျယ်တဝင့်ဖော်ပြခြင်းမခံခဲ့ရတဲ့ စစ်ပွဲလေးအကြောင်းကိုအခြေတည်ရိုက်ထားတဲ့ဇာတ်ကားလေးပါ`},
    {title: "Follow me(2020)",image: `e.png`, about: `Dune (2021)==========IMDb Rating – 8.4/10စောင့်​မျှော်​နေသူ​ ​အ​တော်များများရှိ​နေမယ့် DUNE ရုပ်ရှင်ကားကြီးထွက်လာပြီမို့ CMပရိတ်သတ်​တွေအတွက် အမြန်ဆုံးတင်ဆက်​ပေးလိုက်ပါတယ်၊
    သာမန် Sci- fic​တွေထက် အပုံကြီးကျယ်ပြန့်တဲ့ Frank Herbertရဲ့ Duneစာအုပ်​တွဲ​တွေကို မှီငြမ်းရိုက်ကူးထားတဲ့
    ဇာတ်လမ်း၊ ​Timotheé Chalamet, Zendaya, Oscar Issac, တို့အပါအဝင် ကောင်း​ပေ့ဆိုတဲ့ Cast​တွေ၊ Legendarysoundtrack တွေပဲ တီးခတ်တဲ့ Ha`}
];

const show=(event)=>{
    reviewConValue.style.display="block"
    containerValue.style.display="none";
    const clickedSrc = event.target.src;
    const forAbout = event.target.id;
    
    const reviewPhoto = document.createElement("img");
    reviewPhoto.classList.add("reviewPhoto");
    reviewPhoto.src = clickedSrc;
    imgContainerForReviewValue.append(reviewPhoto);
    const clikedAbout = movieData[forAbout].about;
    reviewTextConValue.append(clikedAbout);
};
const cancel=()=>{
    imgContainerForReviewValue.innerHTML="";
    reviewTextConValue.innerHTML="";
    reviewConValue.style.display="none";
    containerValue.style.display="flex";
}

for(let i=0; i<movieData.length; i++){
    const movCard = document.createElement("div");
    movCard.classList.add("movCard");

    const imgCon = document.createElement("div");
    imgCon.classList.add("imgCon");

    const image = document.createElement("img");
    image.id=i;
    image.addEventListener("click",show);
    image.src=movieData[i].image;
    image.classList.add("image");

    imgCon.append(image);

    const movTitle = document.createElement("div");
    movTitle.append(movieData[i].title);
    movTitle.classList.add("movTitle");

    movCard.append(imgCon,movTitle);

    innerConValue.append(movCard);
};
cancelConValue.addEventListener("click",cancel);



