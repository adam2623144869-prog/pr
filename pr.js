function Showproduct(){
    let name = document.getElementById("pr-t").value
    let price = Number(document.getElementById("pr-p").value)
    let finalprice = price - 10
    let category
    let bgc = document.getElementById("img-i")
    let img = document.getElementById("imgf")
    if(name == "" || price == ""){
        alert("Please Fill All Fields")
    }

    if(price > 100){
        category = "Premium product"
    }
    else if(price <= 100){
        category = "Budget product"
    }

    img.setAttribute("src" , "img/sneaker.jpg")
    bgc.style.backgroundColor = "red"

    
    document.getElementById("messege").innerHTML =
        `<h2>${name}</h2>
        <p>Original price ${price}</p>
        <p>After Discount ${finalprice}</p>
        <p>${category}</p>
        `

}