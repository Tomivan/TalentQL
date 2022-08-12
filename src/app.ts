let N: number = 1
const startApp = () => {
    const url = `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=${N}`
    const response =  fetch(url, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => show(data))
    .catch(error => {
        console.log(error)
    })
};
const previousBtn = document.getElementById("previousBtn") as HTMLButtonElement;
const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;
previousBtn.addEventListener('click', () => {
    if (N > 1) {
        N--;
    } else {
        return;
    }
    console.log(N);
    removeData();
    startApp();
    previousBtn.disabled = true;
    nextBtn.disabled = false;
});

nextBtn.addEventListener('click', () => {
    N++;
    console.log(N);
    removeData();
    startApp();
    nextBtn.disabled = true;
    previousBtn.disabled = false;
});

const show = (response: any) => {
    const result = response.results[0]
    console.log(result)
    if (N > 1) {
        const data = result['2']
        page(data)
    } else {
        const data = result['1']
        page(data)
    }
}

const removeData = () => {
    document.getElementById("data").innerHTML = "";
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