// ============
// 1-masala:
/*  Rasm galereyasini yaratish
    Vazifa: Sahifada bir nechta bo‘sh kvadratlar (div) bo‘lsin. Har bir kvadrat ustiga "Rasm qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi rasm (img elementi) kvadratning ichiga qo‘shilsin. Kvadrat ichida avvaldan rasm bo‘lsa, o‘sha rasmni o‘chirib, yangisini qo‘shsin.
        Ishlatiladigan mavzular: createElement, append, removeChild, classList.toggle. 
*/
const blocks = document.querySelectorAll(".block");
const images = [
  "https://icons.iconarchive.com/icons/faychen521/kitchen/128/filetype-image-png-icon.png",
  "https://icons.iconarchive.com/icons/hopstarter/scrap/128/Picture-PNG-icon.png",
  "https://icons.iconarchive.com/icons/george-ui/ancient-legend/128/Filetype-PNG-icon.png",
  "https://icons.iconarchive.com/icons/franksouza183/fs/128/Mimetypes-png-icon.png",
  "https://icons.iconarchive.com/icons/ampeross/qetto/128/png-icon.png",
  "https://icons.iconarchive.com/icons/graphicloads/folded/128/png-page-folded-icon.png",
  "https://icons.iconarchive.com/icons/treetog/junior/128/document-picture-png-icon.png",
  "https://icons.iconarchive.com/icons/graphicloads/folded/128/png-page-folded-icon.png",
  "https://icons.iconarchive.com/icons/gakuseisean/aire/128/PNG-File-icon.png",
  "https://icons.iconarchive.com/icons/robsonbillponte/sinem/128/File-PNG-icon.png",
];
blocks.forEach((block) => {
  const btnsCreateImg = document.createElement("button");
  btnsCreateImg.innerHTML = "create";
  block.appendChild(btnsCreateImg);
  const img = document.createElement("img");
  block.appendChild(img);
  btnsCreateImg &&
    btnsCreateImg.addEventListener("click", function () {
      let randomImg = Math.trunc(Math.random() * 10);
      img.setAttribute("src", `${images[randomImg]}`);
    });
});
// ============
// 2-masala:
/* Uy elementlarini topish
Vazifa: HTML sahifasida daraxt shaklidagi tuzilma (ul, li) berilgan bo‘lsin. Foydalanuvchi har bir element ustiga bosganda, o‘sha elementning:
Ota elementi (parentNode),
Oldingi qoshni elementi (previousSibling),
Keyingi qoshni elementi (nextSibling),
Ichidagi barcha bolalari (childNodes) chiqarilsin (matn yoki alert orqali).
Ishlatiladigan mavzular: parentNode, siblings, childNodes.
*/
const branches = document.querySelectorAll("li");

branches.forEach((branch) => {
  branch &&
    branch.addEventListener("click", function (event) {
      event.stopPropagation();
      const otaElement = branch.parentNode.nodeName;
      const Oldingi = branch.previousElementSibling;
      const Kiyingi = branch.nextElementSibling;
      const bolalari = Array.from(branch.childNodes)
        .map((node) => node.nodeName)
        .join(", ");
      alert(`
                Ota elementi: ${otaElement}
                Oldingi qoshni elemnti: ${Oldingi}
                Kiyingi qoshni elementi: ${Kiyingi}
                Ichidagi barcha bolalari: ${bolalari}
            `);
    });
});

// ============
// 3-masala:
/* Sahifadagi elementlarni almashish
Vazifa: Sahifada ikkita kvadrat (div) bo‘lsin. Har bir kvadrat ichida matn yozilgan bo‘lsin. Foydalanuvchi tugma bosganda, ushbu kvadratlarning o‘z ichidagi matnlari almashib qolsin */
const firstLetter = document.querySelector(".first");
const secodnLetter = document.querySelector(".second");
const swapBtn = document.querySelector(".swapBtn");

swapBtn &&
  swapBtn.addEventListener("click", function () {
    const textFirst = firstLetter.textContent;
    const textSecond = secodnLetter.textContent;
    firstLetter.innerHTML = textSecond;
    secodnLetter.innerHTML = textFirst;
  });
// ============
// 4-masala:
/*Qizil tugmalar" o‘yini
Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har safar foydalanuvchi sahifaga kirganda, tugmalardan biriga avtomatik ravishda "qizil" klassi qo‘shiladi. Foydalanuvchi boshqa tugmalarni bosganda, yangi tugmaga "qizil" klassi o‘tadi, avvalgisi esa "qizil" klassini yo‘qotadi.
Ishlatiladigan mavzular: classList.add, classList.remove, classList.contains.
*/
const btnGame = document.querySelectorAll(".btnGame");
let counter = 0;
let randomBtn = Math.trunc(Math.random() * 5);
btnGame[randomBtn].classList.add("startBtnGame");
btnGame.forEach((btn) => {
  btn &&
    btn.addEventListener("click", function () {
      document.querySelector(".startBtnGame").classList.remove("startBtnGame");
      btn.classList.add("startBtnGame");
    });
});
// ============
// 5-masala:
//
const div = document.getElementById("5-masala");
const addParagraph = document.querySelector(".btn");

addParagraph &&
  addParagraph.addEventListener("click", function () {
    const pargraph = document.createElement("p");
    pargraph.innerHTML = "salom";
    div.append(pargraph);
  });
// ============
// 6-masala:
/*Vazifa: Sahifada bir nechta rangli kvadratlar bo‘lsin. Har bir kvadratning tagida "Chapga qo‘shish" va "O‘ngga qo‘shish" tugmalari joylashtiriladi. Tugma bosilganda kvadratning chap yoki o‘ng tomoniga yangi kvadrat qo‘shilsin.
Ishlatiladigan mavzular: createElement, before, after, classList.add. */
const container = document.querySelector(".container");
const boxes = document.querySelector(".boxes");
const buttons = document.querySelector(".buttons");

const buttonLeft = document.createElement("button");
buttonLeft.textContent = "left";
buttons.appendChild(buttonLeft);

const buttonRight = document.createElement("button");
buttonRight.textContent = "right";
buttons.appendChild(buttonRight);

const firstBox = document.createElement("div");
boxes.appendChild(firstBox);
firstBox.classList.add("blockStyle");

buttonLeft.addEventListener("click", function () {
  const secondBox = document.createElement("div");
  secondBox.classList.add("blockStyle");
  secondBox.classList.add("startBtnGame");
  firstBox.before(secondBox);
});

buttonRight.addEventListener("click", function () {
  const thirdBox = document.createElement("div");
  thirdBox.classList.add("blockStyle");
  thirdBox.classList.add("green");
  firstBox.after(thirdBox);
});
// ============
// 7-masala:
/* 
Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har bir tugmaning yonida "Yashirish" tugmasi bo‘lsin. "Yashirish" tugmasi bosilganda asosiy tugma yashirinadi. Sahifaning pastida "Yashirilgan tugmalarni ko‘rsatish" tugmasi bo‘lib, u barcha yashirilgan tugmalarni qayta ko‘rsatadi.*/
const firstButtons = document.querySelectorAll(".mainBtn");
const secondButtons = document.querySelectorAll(".hideBtn");
const openAll = document.querySelector(".openAll");
let firstCounter = 0;
let secondCounter = 0;
firstButtons.forEach((button) => {
  button.setAttribute("count", `${firstCounter++}`);
});

secondButtons.forEach((button) => {
  button.setAttribute("count", `${secondCounter++}`);
});
secondButtons.forEach((button) => {
  button.addEventListener("click", function () {
    for (let i = 0; i < firstButtons.length; i++) {
      if (
        button.getAttribute("count") === firstButtons[i].getAttribute("count")
      ) {
        firstButtons[button.getAttribute("count")].classList.add("displayNone");
      }
    }
  });
});

openAll &&
  openAll.addEventListener("click", function () {
    firstButtons.forEach((button) => {
      if (button.classList.contains("displayNone")) {
        button.classList.remove("displayNone");
      }
    });
  });
// ============
// 8-masala:
/*Vazifa: Sahifada bir nechta matnli elementlar (p) va "Kesish" tugmasi bo‘lsin. Foydalanuvchi biror matnni tanlab, uning yonidagi "Kesish" tugmasini bossa, o‘sha matn kesilib, boshqa bir bo‘sh joyga (kvadrat) o‘tkazilsin.
Ishlatiladigan mavzular: removeChild, appendChild. */

// ============
// 9-masala:
//

// ============
// 10-masala:
//

// ============
// 11-masala:
//

// ============
// 12-masala:
//

// ============
// 13-masala:
//

// ============
// 14-masala:
//

// ============
// 15-masala:
//

// ============
// 16-masala:
//

// ============
// 17-masala:
//

// ============
// 18-masala:
//

// ============
// 19-masala:
//

// ============
// 20-masala:
//

// ============
// 21-masala:
//

// ============
// 22-masala:
//

// ============
// 23-masala:
//

// ============
// 24-masala:
//

// ============
// 25-masala:
//

// ============
// 26-masala:
//

// ============
// 27-masala:
//

// ============
// 28-masala:
//

// ============
// 29-masala:
//

// ============
// 30-masala:
//

// ============
// 31-masala:
//

// ============
// 32-masala:
//

// ============
// 33-masala:
//

// ============
// 34-masala:
//

// ============
// 35-masala:
//

// ============
// 36-masala:
//

// ============
// 37-masala:
//

// ============
// 38-masala:
//

// ============
// 39-masala:
//

// ============
// 40-masala:
//

// ============
// 41-masala:
//

// ============
// 42-masala:
//

// ============
// 43-masala:
//

// ============
// 44-masala:
//

// ============
// 45-masala:
//

// ============
// 46-masala:
//

// ============
// 47-masala:
//

// ============
// 48-masala:
//

// ============
// 49-masala:
//

// ============
// 50-masala:
//

// ============
// 51-masala:
//

// ============
// 52-masala:
//

// ============
// 53-masala:
//

// ============
// 54-masala:
//

// ============
// 55-masala:
//

// ============
// 56-masala:
//

// ============
// 57-masala:
//

// ============
// 58-masala:
//

// ============
// 59-masala:
//

// ============
// 60-masala:
