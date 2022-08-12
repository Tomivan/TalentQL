var N = 1;
var startApp = function () {
    var url = "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=".concat(N);
    var response = fetch(url, {
        method: "GET"
    })
        .then(function (res) { return res.json(); })
        .then(function (data) { return show(data); })["catch"](function (error) {
        console.log(error);
    });
};
var previousBtn = document.getElementById("previousBtn");
var nextBtn = document.getElementById("nextBtn");
previousBtn.addEventListener('click', function () {
    if (N > 1) {
        N--;
    }
    else {
        return;
    }
    console.log(N);
    removeData();
    startApp();
    previousBtn.disabled = true;
    nextBtn.disabled = false;
});
nextBtn.addEventListener('click', function () {
    N++;
    console.log(N);
    removeData();
    startApp();
    nextBtn.disabled = true;
    previousBtn.disabled = false;
});
var show = function (response) {
    var result = response.results[0];
    console.log(result);
    if (N > 1) {
        var data = result['2'];
        page(data);
    }
    else {
        var data = result['1'];
        page(data);
    }
};
var removeData = function () {
    document.getElementById("data").innerHTML = "";
};
var page = function (data) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var val = data_1[_i];
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        td1.innerHTML = val.row;
        td2.innerHTML = val.gender;
        td3.innerHTML = val.age;
        tr.append(td1, td2, td3);
        document.getElementById("data").append(tr);
    }
};
document.addEventListener('DOMContentLoaded', startApp);
