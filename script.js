function toggle(){
    document.getElementById('navbar').classList.toggle('active')
    document.getElementById('tglMenu').classList.toggle('cancel')
    document.getElementById('shadow').classList.toggle('shadowed')
}

let foodData=[
    { price: 15000, img: `https://cdn-3.tstatic.net/jualbeli/img/njajal/2017/12/Terjawab--Inilah-Alasan-Rahasia-dari-Pertanyaan--Mengapa-Mie-Goreng-di-Warung-Selalu-Terasa-Lebih-Lezat.-No-6-Tak-Semua-Orang-Bisa--master-107049471.jpg`, name: 'Indomie Goreng' },
    { price: 15000, img: `./img/lambchop.jpg`, name: 'Lamb Chop' },    
    { price: 50000, img: `./img/egg.jpg`, name: 'Egg Benedict' },
    { price: 800000, img: `./img/steak.jpg`, name: 'Steak Wagyu A5' },
    { price: 10000, img: `./img/nasi.jpg`, name: 'Nasi Putih' },
]

let drinkData=[
    { price: 10000, img: `./img/nasi.jpg`, name: 'Air Mineral' },
    { price: 15000, img: `./img/nasi.jpg`, name: 'Earl Grey' },
    { price: 20000, img: `./img/nasi.jpg`, name: 'Strawberry MilkShake' },
    { price: 15000, img: `./img/nasi.jpg`, name: 'Coca-Cola' },
]

function upload (data){
    const container = document.getElementByClass("container")
    container.innerHTML = ""
    for (let i = 0; i < data.length; i++) {

        const item = document.createElement("span")
        item.idName = "itembox"
        item.innerHTML = `
        <img src="${data[i].img}" height=200>
        <h4>${data[i].name}</h5>
        <p>Price : Rp. ${data[i].price}</p>`

        container.appendChild(item)
    }
}
upload(foodData)