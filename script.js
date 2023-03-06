let pointCounter = 0;

// تمام حروف نقطه دار را برحسب تعداد نقاط در یک آرایه میگذاریم
singleDots = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
doubleDots = ["ت", "ق"];
tripleDots = ["پ", "ث", "چ", "ژ", "ش"];
midLetterDots = ["ی"]; // حرف ی وقتی آخر یک کلمه باشه نقطه نداره اما اگه اول یا وسط باشه دوتا نقطه داره

// انتخاب المان ها
const input = document.querySelector("#input");
const numberOfPoints = document.querySelector("#count");

// ساخت تابع شمارش تعداد نقاط
const CounterPoints = (text) => {
  // تبدیل متن ورودی کاربر به آرایه => هرکدام از حروف یکی از عضوهای آرایه میشن
  let textArray = text.split("");

  for (let i = 0; i < textArray.length; i++) {
    const character = textArray[i];

    // اینجا چک میکنیم که کاراکتر ما عضو کدام یکی از آرایه های بالا هستش
    if (singleDots.includes(character)) {
      pointCounter++;
    } else if (doubleDots.includes(character)) {
      pointCounter += 2;
    } else if (tripleDots.includes(character)) {
      pointCounter += 3;
    }
    // برای اینکه ی نقطه داشته باشه نباید آخر جمله باشه. آخرین حرف جمله هم میشه آخرین عضو آرایمون
    // پس میگیم اگه حرف ی آخرین عضو آرایه نبود برو شرط زیریشو چک کن
    else if (midLetterDots.includes(character) && i !== textArray.length - 1) {
      // ممکنه آخرین حرف جمله ی باشه ولی کاربر بعد از اون ی فاصله بزاره. پس اینجا چک میکنیم که کاراکتر بعد فاصله نباشه
      if (textArray[i + 1] !== " ") {
        pointCounter += 2;
      }
    }
  }
};

input.addEventListener("input", function () {
  pointCounter = 0;

  // متن ورودی داخل اینپوتمون رو میفرستیم به تابع
  CounterPoints(input.value);

  // نشان دادن تعداد نتیجه
  numberOfPoints.innerHTML = pointCounter;
});
