var startApp = function () {
    var url = "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84";
    var response = fetch(url, {
        method: "GET"
    })
        .then(function (res) { return res.json(); })
        .then(function (data) { return show(data); })["catch"](function (error) {
        console.log(error);
    });
    // console.log(response)
    // // show(response)
};
var show = function (response) {
    var result = response.results[0];
    console.log(result);
    var data1 = result['1'];
    var data2 = result['2'];
    for (var _i = 0, data1_1 = data1; _i < data1_1.length; _i++) {
        var val = data1_1[_i];
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
    for (var _a = 0, data2_1 = data2; _a < data2_1.length; _a++) {
        var val = data2_1[_a];
        var tab = "\n        <tr>\n        <td>".concat(val.row, "</td>\n        <td>").concat(val.gender, "</td>\n        <td>").concat(val.age, "</td>\n        </tr>");
        console.log(val);
        document.getElementById("data").append(tab);
    }
};
document.addEventListener('DOMContentLoaded', startApp);
