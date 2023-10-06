var User = JSON.parse(localStorage.getItem("currentUser"));
var nameUser, passUser;
if(User != null){
    nameUser = User.name;
    passUser = User.pass;
}
var listPayment = [];
window.onload = function(){
    var listProductAdded = JSON.parse(localStorage.getItem("InformUser"));
    if(listProductAdded != null){
        for(var i = 0; i < listProductAdded.length; i++){
            if(nameUser == listProductAdded[i].nameuser && passUser == listProductAdded[i].passuser){
                var id = listProductAdded[i].idproduct;
                var image = listProductAdded[i].imageproduct;
                var name = listProductAdded[i].nameproduct;
                var price = listProductAdded[i].priceproduct;
                var amount = listProductAdded[i].amountproduct;
                renderPageProductAdded(id, image, name, price, amount);
            }
        }
    }
}
function renderPageProductAdded(id, image, name, price, amount){
    var parentCart = document.querySelector(".listProductAdded table");
    var childCart = document.createElement("tr");
    childCart.innerHTML = `<tr>
                                <td>
                                    <input id="checkSelected" onclick="checkSelected()" type="checkbox">
                                </td>
                                <td>
                                    <h3 class="id" style="display: none;">${id}</h3>
                                    <img class="image" src=${image} alt="">
                                </td>
                                <td>
                                    <h3 class="name">${name}</h3>
                                </td>
                                <td>
                                    <span class="price">${price}</span>
                                </td>
                                <td>
                                    <ti class="ti-minus" onclick="minusAmountProduct(this)"></ti>
                                    <span class="amount">${amount}</span>
                                    <ti class="ti-plus" onclick="plusAmountProduct(this)"></ti>
                                </td>
                                <td>
                                    <ti class="ti-trash" onclick="removeItem(this)"></ti>
                                </td>
                            </tr>`
    parentCart.append(childCart);
}
function checkSelected(){
    updateTotalPayment();
}
function updateTotalPayment(){
    var sum = 0;
    var listCheckBox = document.querySelectorAll("#checkSelected");
    listCheckBox.forEach(e => {
        var parentItem = e.parentElement.parentElement;
        var price = parentItem.querySelector(".price").innerText;
        var price = price;
        amount = parentItem.querySelector(".amount").innerText;
        if(e.checked == true){
            sum += price*amount;
        }
    })
    document.getElementById("totalPayment").innerText = sum + "$";
}
function removeItem(e){
    var parentItem = e.parentElement.parentElement;
    parentItem.remove();
    updateTotalPayment();
    saveLocal();
}
function minusAmountProduct(e){
    parentE = e.parentElement;
    var amount = parentE.querySelector(".amount");
    var nowAmount = amount.innerText;
    if(Number(nowAmount) <= 1){
        return;
    }
    var newAmount = Number(nowAmount) - Number(1);
    amount.innerText = newAmount;
    updateTotalPayment();
    saveLocal();
}
function plusAmountProduct(e){
    parentE = e.parentElement;
    var amount = parentE.querySelector(".amount");
    var nowAmount = amount.innerText;
    var newAmount = Number(nowAmount) + Number(1);
    amount.innerText = Number(newAmount);
    updateTotalPayment();
    saveLocal();
}
function saveLocal(){
    const parentEs = document.querySelectorAll(".listProductAdded table tr");
    var nameProduct, imageProduct, priceProduct, amountProduct;
    listProductCart = [];
    var listSaved = JSON.parse(localStorage.getItem("InformUser"));
    if(listSaved != null){
        listSaved.forEach(e => {
            if(e.nameuser != null)
            if(e.nameuser != nameUser || e.passuser != passUser){
                listProductCart.push({
                    nameuser: e.nameuser,
                    passuser: e.passuser,
                    idproduct: e.idproduct,
                    nameproduct:  e.nameproduct,
                    priceproduct: e.priceproduct,
                    imageproduct: e.imageproduct,
                    amountproduct: e.amountproduct
                })
            }
        })
    }
    var mark = 0;
    parentEs.forEach(parentE => {
        if(mark != 0){
            idProduct = parentE.querySelector(".id").innerText;
            nameProduct = parentE.querySelector(".name").innerText;
            priceProduct = parentE.querySelector(".price").innerText;
            imageProduct = parentE.querySelector("img").src;
            amountProduct = parentE.querySelector(".amount").innerText;
            listProductCart.push({
                nameuser: nameUser,
                passuser: passUser,
                idproduct: idProduct,
                nameproduct:  nameProduct,
                priceproduct: priceProduct,
                imageproduct: imageProduct,
                amountproduct: amountProduct
            })
        }
        mark++;
    })
    localStorage.setItem("InformUser", JSON.stringify(listProductCart));
}

function openAD(){
    document.querySelector(".IF-sub").classList.remove("close");
}
function exit(){
    document.querySelector(".IF-sub").classList.add("close");
}
 
var address, phoneNum;
function closeAD(){
    address = document.getElementById("address").value;
    phoneNum = document.getElementById("phoneNum").value;
    if(address == "" && phoneNum == ""){
        alert("Vui lòng nhập địa chỉ và số điện thoại");
        return;
    }else if(address == ""){
        alert("Vui lòng nhập địa chỉ");
        return;
    }else if(phoneNum == ""){
        alert("Vui lòng số điện thoại");
        return;
    }
    document.querySelector(".IF-sub").classList.add("close");
    setTimeout(getConfirmation(address, phoneNum), 500);
}

function getConfirmation(address, phoneNum){
    listPayment = [];
    var totalPayment = document.getElementById("totalPayment").innerText;
    if(totalPayment <= 0){
        alert("Bạn chưa chọn sản phẩm");
        return;
    }
    if(User == null){
        window.location = "http://127.0.0.1:5500/login.html";
        return;
    }
    var retVal = confirm("Bạn chắc chắn muốn mua?");
    if( retVal == true ){
        document.getElementById("totalPayment").innerText = "0$";
        var listCheckBox = document.querySelectorAll("#checkSelected");
        var Order = JSON.parse(localStorage.getItem("Order"));
        var d = new Date();
        var timeNow = d.getSeconds() +":"+ d.getMinutes() +":"+ d.getHours() +"  "+ d.getDate() +"/"+ Number(d.getMonth()+1) +"/"+ d.getFullYear();
        if(Order != null){
            for(var i = 0; i < Order.length; i++){
                listPayment.push({
                    time: Order[i].time,
                    address: Order[i].address,
                    phoneNum: Order[i].phoneNum,
                    nameUser: Order[i].nameUser,
                    passUser: Order[i].passUser,
                    idProduct: Order[i].idProduct,
                    imageProduct: Order[i].imageProduct,
                    nameProduct: Order[i].nameProduct,
                    priceProduct: Order[i].priceProduct,
                    amountProduct: Order[i].amountProduct
                })
            }
        }
        listCheckBox.forEach(e => {
            if(e.checked == true){
                var parentItem = e.parentElement.parentElement;
                var id = parentItem.querySelector(".id").innerText;
                var image = parentItem.querySelector(".image").src;
                var price = parentItem.querySelector(".price").innerText;
                var name = parentItem.querySelector(".name").innerText;
                var amount = parentItem.querySelector(".amount").innerText;
                listPayment.push({
                    time: timeNow,
                    address: address,
                    phoneNum: phoneNum,
                    nameUser: nameUser,
                    passUser: passUser,
                    idProduct: id,
                    imageProduct: image,
                    nameProduct: name,
                    priceProduct: price,
                    amountProduct: amount, 
                })
            }
        })
        listCheckBox.forEach(e => {
            e.checked = false;
        })
        localStorage.setItem("Order", JSON.stringify(listPayment));
        document.getElementById("address").value = "";
        document.getElementById("phoneNum").value = "";
        return true;
    }else{
       return false;
    }
 }