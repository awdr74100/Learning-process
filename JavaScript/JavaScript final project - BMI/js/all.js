// 宣告DOM Element
var body = document.body;
var inputHeight = document.querySelector(".js-inputHei");
var inputWeight = document.querySelector(".js-inputWei");
var btn = document.querySelector(".js-btn");
var btnRetuen = document.querySelector(".js-btnReturn");
var btnClear = document.querySelector(".js-btnClear")
var list = document.querySelector(".js-list");

// 宣告陣列存取
var data = JSON.parse(localStorage.getItem("listData")) || [];

// 載入時自動更新列表
updateList();

// 監聽物件
body.addEventListener("keydown",keyEnent,false);
btn.addEventListener("click", addItem, false);
btnRetuen.addEventListener("click", replay, false);
btnClear.addEventListener("click", clear, false);
list.addEventListener("click", removeItem, false);

// 鍵盤出發事件
function keyEnent(e){
    e.stopPropagation();
    if(e.key !== "Enter"){
        return;
    }
    addItem();
}

// 增加列表項目
function addItem(e) {
    var heightValue = inputHeight.value;
    var weightValue = inputWeight.value;
    if (heightValue == "" || weightValue == "") {
        alert("項目不得為空");
        return;
    } else if (heightValue <= 0 || weightValue <= 0) {
        alert("請輸入正確數值");
        inputHeight.value = "";
        inputWeight.value = "";
        return;
    }
    btn.classList.remove("result__btn--active");
    var bmiValue = (parseFloat(weightValue) / ((parseFloat(heightValue) / 100) * (parseFloat(heightValue) / 100))).toFixed(2);
    var intBMI = parseFloat(bmiValue);
    var status = bmiStatus(intBMI);
    var bmiInfo = status.bmiStatus;
    var borderInfo = status.borderStatus;
    var dateValue = getDate();
    var object = {
        height: heightValue,
        weight: weightValue,
        bmi: bmiValue,
        bmiStatus: bmiInfo,
        borderStatus: borderInfo,
        date: dateValue,
    }
    data.push(object);
    updateList();
    localStorage.setItem("listData", JSON.stringify(data));
    changeButton();
}

// 移除列表項目
function removeItem(e) {
    if (e.target.nodeName !== "I") {
        return;
    }
    var item = e.target.dataset.index;
    data.splice(item, 1);
    updateList();
    localStorage.setItem("listData", JSON.stringify(data));
}

// 移除所有列表項目
function clear(e) {
    data = [];
    localStorage.removeItem("listData");
    updateList();
}

// 獲取當下時間
function getDate(e) {
    var today = new Date();
    var getDate = ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) + "-" + ((today.getDate() < 10 ? "0" : "") + today.getDate()) + "-" + today.getFullYear();
    return getDate;
}

// 計算BMI區間、border狀態
function bmiStatus(intBMI) {
    var bmiStatus;
    var borderStatus;
    if (intBMI < 18.5) {
        bmiStatus = "過輕";
        borderStatus = "xs"
        return {
            "bmiStatus": bmiStatus,
            "borderStatus": borderStatus
        };
    } else if (intBMI < 24) {
        bmiStatus = "理想";
        borderStatus = "s";
        return {
            "bmiStatus": bmiStatus,
            "borderStatus": borderStatus
        };
    } else if (intBMI < 27) {
        bmiStatus = "過重";
        borderStatus = "m"
        return {
            "bmiStatus": bmiStatus,
            "borderStatus": borderStatus
        };
    } else if (intBMI < 30) {
        bmiStatus = "輕度肥胖";
        borderStatus = "l"
        return {
            "bmiStatus": bmiStatus,
            "borderStatus": borderStatus
        };
    } else if (intBMI < 35) {
        bmiStatus = "中度肥胖";
        borderStatus = "xl"
        return {
            "bmiStatus": bmiStatus,
            "borderStatus": borderStatus
        };
    } else if (intBMI >= 35) {
        bmiStatus = "重度肥胖";
        borderStatus = "2xl"
        return {
            "bmiStatus": bmiStatus,
            "borderStatus": borderStatus
        };
    }
}

// 更新列表項目
function updateList(e) {
    var str = "";
    var dataLen = data.length;
    for (var i = 0; i < dataLen; i++) {
        str += `<li class="list__item list__item--${data[i].borderStatus}">
        <span class="msg">${data[i].bmiStatus}</span>
        <p class="msg--Bmi">BMI</p><span class="msg--BmiValue">${data[i].bmi}</span>
        <p class="msg--Weight">weight</p><span class="msg--WeightValue">${data[i].weight}</span>
        <p>kg</p><p class="msg--Height">height</p>
        <span class="msg--HeightValue">${data[i].height}</span><p>cm</p><span class="msg--Date">${data[i].date}
        </span><div class="msg--remove"><i class="fas fa-times" data-index="${i}"></i></div>`
    }
    list.innerHTML = str;
}

// 更新按鈕外觀
function changeButton(e) {
    var btnValue = document.querySelector(".js-btnValue");
    var btnStr = document.querySelector(".js-btnStr");
    var btnMsg = document.querySelector(".js-btnMsg");
    var dataLen = data.length;
    var btnPrimary;
    switch (data[dataLen - 1].borderStatus) {
        case "xs":
            btnPrimary = "#86D73F";
            break;
        case "s":
            btnPrimary = "#31BAF9";
            break;
        case "m":
            btnPrimary = "#ffea2d";
            break;
        case "l":
            btnPrimary = "#FF982D";
            break;
        case "xl":
            btnPrimary = "#FF6C03";
            break;
        case "2xl":
            btnPrimary = "#FF1200";
    }
    // 變更按鈕數值
    btnValue.style.display = "block"
    btnValue.style.color = btnPrimary;
    btnValue.textContent = data[dataLen - 1].bmi;
    // 變更文字顏色
    btnStr.style.fontSize = "14px";
    btnStr.style.color = btnPrimary;
    btnStr.textContent = "BMI"
    // 變更邊框顏色
    btn.style.backgroundColor = "#424242";
    btn.style.border = "6px solid " + btnPrimary;
    // 變更返回按鈕
    btnRetuen.style.display = "block";
    btnRetuen.style.backgroundColor = btnPrimary;
    // 變更按鈕標題
    btnMsg.style.display = "block";
    btnMsg.style.color = btnPrimary;
    btnMsg.textContent = data[dataLen - 1].bmiStatus;
    btn.removeEventListener("click", addItem, false);
    body.removeEventListener("keydown",keyEnent,false);
}

// 返回增加事件監聽
function replay(e) {
    btn.classList.add("result__btn--active");
    e.stopPropagation();
    replayButton();
    btn.addEventListener("click", addItem, false);
    body.addEventListener("keydown",keyEnent,false);
}

// 還原按鈕外觀
function replayButton() {
    var btnValue = document.querySelector(".js-btnValue");
    var btnStr = document.querySelector(".js-btnStr");
    var btnMsg = document.querySelector(".js-btnMsg");
    // 清空按鈕輸入值
    inputHeight.value = "";
    inputWeight.value = "";
    // 變更按鈕數值
    btnValue.style.display = "none"
    // 變更文字顏色
    btnStr.style.fontSize = "24px";
    btnStr.style.color = "#424242";
    btnStr.textContent = "看結果";
    // 變更邊框顏色
    btn.style.backgroundColor = "#FFD366";
    btn.style.border = "none";
    // 變更返回按鈕
    btnRetuen.style.display = "none";
    // 變更按鈕標題
    btnMsg.style.display = "none";
}