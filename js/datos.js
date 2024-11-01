const viajesExisten = localStorage.getItem("viajes")
const viajesExistenJSON = JSON.parse(viajesExisten)
const viajesPorDefecto = [
    {
        categoria: "tours",
        imagen: "https://tse2.mm.bing.net/th?id=OIP.Ud565zLuz841qXiyecpQdwHaEK&pid=Api&P=0&h=180",
        nombre: "TOUR CENTRO",
        precio: 7000,
    },
    {
        categoria: "tours",
        imagen: "https://tse4.mm.bing.net/th?id=OIP.c8pfHUMAwdnbG0r7IAr_2AHaE8&pid=Api&P=0&h=180",
        nombre: "TOUR VALLE GRANDE",
        precio: 15000,
    },
    {
        categoria: "tours",
        imagen: "https://tse1.mm.bing.net/th?id=OIP.Iss59fXM0Hp25tJ1tWTJQAHaFj&pid=Api&P=0&h=180",
        nombre: "TOUR NIHUIL",
        precio: 10000,
    },
    {
        categoria: "tours",
        imagen: "https://tse4.mm.bing.net/th?id=OIP.wYRKvL7KXAHJkoY7qO-oQwHaFf&pid=Api&P=0&h=180",
        nombre: "TOUR LOS REYUNOS",
        precio: 10000,
    },
    {
        categoria: "tours",
        imagen: "https://tse1.mm.bing.net/th?id=OIP.OvGtCa1Q8xE130mZjsG9HAHaE8&pid=Api&P=0&h=180",
        nombre: "TOUR FAMILIAR X4",
        precio: 65000,
    },
];

let viajesBD;

if(viajesExisten){
    viajesBD = viajesExistenJSON
}else{
    viajesBD =viajesPorDefecto
    let viajesBDJSON = JSON.stringify(viajesBD)
    localStorage.setItem("viajes",viajesBDJSON)
}