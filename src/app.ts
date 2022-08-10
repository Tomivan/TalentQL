const startApp = () => {
    const url = "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84";
    const response =  fetch(url, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => show(data))
    .catch(error => {
        console.log(error)
    })
};

const show = (response: any) => {
    const result = response.results[0]
    console.log(result)
    const data1 = result['1']
    const data2 = result['2']
    page(data1)
}

const page = (data) => {
    for (let val of data) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        td1.innerHTML = val.row
        td2.innerHTML = val.gender
        td3.innerHTML = val.age
        tr.append(td1, td2, td3)

        document.getElementById("data").append(tr);
    }
}
document.addEventListener('DOMContentLoaded', startApp);