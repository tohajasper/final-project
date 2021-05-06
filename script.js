function toggle(){
    document.getElementById('navbar').classList.toggle('active')
    document.getElementById('tglMenu').classList.toggle('cancel')
    document.getElementById('shadow').classList.toggle('shadowed')
}

let foodData=[
    { price: '15.000', img: `https://cdn-3.tstatic.net/jualbeli/img/njajal/2017/12/Terjawab--Inilah-Alasan-Rahasia-dari-Pertanyaan--Mengapa-Mie-Goreng-di-Warung-Selalu-Terasa-Lebih-Lezat.-No-6-Tak-Semua-Orang-Bisa--master-107049471.jpg`, name: 'Indomie Goreng' },
    { price: '150.000', img: `./img/lambchop.jpg`, name: 'Lamb Chop' },    
    { price: '50.000', img: `./img/egg.jpg`, name: 'Egg Benedict' },
    { price: '800.000', img: `./img/steak.jpg`, name: 'Steak Wagyu A5' },
    { price: '10.000', img: `./img/nasi.jpg`, name: 'Nasi Putih' },
]

let drinkData=[
    { price: '10.000', img: `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-water-in-drinking-glass-on-wooden-table-royalty-free-image-1592838592.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=640:*`, name: 'Air Mineral' },
    { price: '15.000', img: `https://images.squarespace-cdn.com/content/v1/55bfb182e4b0d40fc717da51/1602525405828-8T72GWM741CV7S8Q1DHT/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/B+-+Earl+Grey+Lavender+%28cup%29.JPG?format=1000w`, name: 'Earl Grey' },
    { price: '20.000', img: `https://www.unicornsinthekitchen.com/wp-content/uploads/2018/06/Strawberry-Milkshake-3-700px.jpg`, name: 'Strawberry MilkShake' },
    { price: '15.000', img: `https://i.pinimg.com/originals/33/4d/a7/334da791a8e7df928905484fdab19262.jpg`, name: 'Coca-Cola' },
]

function upload (data){
    const container = document.getElementById("container")
    container.innerHTML = ""
    for (let i = 0; i < data.length; i++) {

        const item = document.createElement("span")
        item.setAttribute('class','itembox')
        item.innerHTML = `
        <img src="${data[i].img}" height=200>
        <h4>${data[i].name}</h5>
        <p>Price : Rp. ${data[i].price}</p>`

        container.appendChild(item)
    }
}

let val
function mains(){
  upload(foodData)
  val++
}
function drinks(){
  upload(drinkData)
  val++
}

if(!val){
    const kosong = document.getElementById("container")
    kosong.innerHTML = `
    <p>Silahkan pilih category menu</p>`
}
