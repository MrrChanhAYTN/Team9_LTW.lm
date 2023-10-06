function openSubList(e){
    var parent = e.parentElement;
    parent.querySelector(".link--sub").classList.toggle("open");
}
function openMenu(){
    document.querySelector(".menuBar__sub").classList.add("open");
}
function closeMenu(){
    document.querySelector(".menuBar__sub").classList.remove("open");
}
function renderUserList(id, gmail, name, pass){
    let childCart = document.createElement("tr");
    childCart.innerHTML = `<tr>
                                <td class="id">${id}</td>
                                <td class="gmailUser">${gmail}</td>
                                <td class="nameUser">${name}</td>
                                <td class="passUser">${pass}</td>
                            </tr>`
    document.querySelector(".container table").append(childCart);
}
// resetBody
function resetbody(){
    document.querySelector(".Order").style.display = "none";
    document.querySelector(".editProduct").style.display = "none";
    document.querySelector(".container table").innerHTML = "";
    document.querySelector(".container .nametable").innerHTML = "";
    document.querySelector(".menuBar__sub").classList.remove("open");
    document.querySelector(".addProduct").style.display = "none";
    document.querySelector(".removeProduct").style.display = "none";
}
// User
function uploadUserList(){
    resetbody();
    document.querySelector(".container table").innerHTML = "";
    var listUser = JSON.parse(localStorage.getItem("ListUser"));
    if(listUser == null){
        document.querySelector(".container .nametable").innerHTML = `<h2>HIỆN TẠI CHƯA CÓ NGƯỜI DÙNG NÀO</h2>`;
        return;
    }
    document.querySelector(".container .nametable").innerHTML = `<h2 style="text-shadow: -2px 4px 4px #2f232a;">BẢNG DANH SÁCH NGƯỜI DÙNG</h2>`;

    let childCart = document.createElement("tr");
    childCart.innerHTML = `<tr>
                                <td class="id">ID</td>
                                <td class="gmailUser">GMAIL</td>
                                <td class="nameUser">NAME</td>
                                <td class="passUser">PASSWORD</td>
                            </tr>`
    document.querySelector(".container table").append(childCart);
    for(var i = 0; i < listUser.length; i++){
        var id = i+1;
        var gmail = listUser[i].email;
        var name = listUser[i].name;
        var pass = listUser[i].pass;
        renderUserList(id, gmail, name, pass);
    }
}

// ADD
function uploadInterfaceAddProduct(){
    resetbody();
    document.querySelector(".addProduct").style.display = "block";
    document.querySelector(".addProduct").style.display = "flex";
}

var inputImage = document.querySelector("#ipFile");
var inputName = document.querySelector("#ipName");
var inputPrice = document.querySelector("#ipPrice");
var inputTitle = document.querySelector("#ipTitle");
var inputType = document.querySelector("#ipType");
var inputAmount = document.querySelector("#ipAmount");
var nameImage;
inputImage.addEventListener('change', function(){
    var reader = new FileReader();
    console.log(document.getElementById("ipFile").value)
    console.log(this.files[0])
    reader.readAsDataURL(this.files[0]);
    nameImage ="image/" + this.files[0].name;
    console.log(nameImage)
    document.getElementById("lableImage").style.backgroundImage = `url(${nameImage})`;
    console.log(document.getElementById("ipFile").value)
})
function checkData(){
    var mark = 0, regExp = /[a-zA-Z]/g;
    if(nameImage == undefined){
        mark = 1;
        document.getElementById("lableImage").style.border = "2px solid red";
    }else{
        document.getElementById("lableImage").style.border = "1px solid black";
    }

    if(inputName.value == ""){
        mark = 1;
        document.getElementById("ipName").style.border = "2px solid red";
    }else{
        document.getElementById("ipName").style.border = "1px solid black";
    }

    if(inputPrice.value == "" || regExp.test(inputPrice.value)){
        mark = 1;
        if(inputPrice.value != ""){
            alert("Giá phải là giá trị bằng số");
        }
        document.getElementById("ipPrice").style.border = "2px solid red";
    }else{
        document.getElementById("ipPrice").style.border = "1px solid black";
    }

    if(inputTitle.value == ""){
        mark = 1;
        document.getElementById("ipTitle").style.border = "2px solid red";
    }else{
        document.getElementById("ipTitle").style.border = "1px solid black";
    }

    if(inputType.value == "" || (inputType.value != "Cake" && inputType.value != "Candy" && inputType.value != "Bread"
       && inputType.value != "Cookie" && inputType.value != "Croissants" && inputType.value != "Lollipop")){
        mark = 1;
        if(inputType.value != ""){
            alert("Vui lòng điền đúng thể loại: Cake, Cookie, Candy, Croissants, Bread, Lollipop!")
        }
        document.getElementById("ipType").style.border = "2px solid red";
    }else{
        document.getElementById("ipType").style.border = "1px solid black";
    }
    if(mark == 1){
        return 1;
    }
    return 0;
}
function save(){
    if(checkData() === 1){
        console.log(checkData())
        return;
    }
    var list = [];
    var image = nameImage;
    var name = inputName.value;
    var price = inputPrice.value;
    var title = inputTitle.value;
    var type = inputType.value;
    var amount = inputAmount.value;
    console.log(image, name, price, title, type)
    var listProduct = JSON.parse(localStorage.getItem("listProduct"));
    if(listProduct != null){
        for(var i = 0; i < listProduct.length; i++){
            list.push({
                id: listProduct[i].id,
                image: listProduct[i].image,
                name: listProduct[i].name,
                price: listProduct[i].price,
                title: listProduct[i].title,
                type: listProduct[i].type,
                amount: listProduct[i].amount
            })
        }
    }
    var id = Number(listProduct[listProduct.length - 1].id + 1);
    list.push({
        id: id,
        image: image,
        name: name,
        price: price,
        title: title,
        type: type,
        amount: amount
    })
    var retVal = confirm("Bạn chắc chắn muốn thêm?");
    if(retVal == true){
        localStorage.setItem("listProduct", JSON.stringify(list));
        alert("Thêm thành công")
        document.querySelector(".demo") != null ? document.querySelector(".demo").remove() : "";
        var input = document.querySelectorAll(".add input");
        document.getElementById("lableImage").style.backgroundImage = "none";
        input.forEach( input => {
            input.value = "";
        })
    }
}
function preview(){
    if(document.querySelector(".demo") != null){
        document.querySelector(".demo").remove();
    }
    if(checkData() == 1){
        return;
    }
    var listProduct = JSON.parse(localStorage.getItem("listProduct"));
    var id = Number(listProduct[listProduct.length - 1].id + 1);
    var childCard = document.createElement("div");
    childCard.classList.add("demo");
    childCard.innerHTML = `<div class="id--type">
                                <div class="id">id: ${id}</div>
                                <div class="type">type: ${inputType.value}</div>
                            </div>
                            <div class="image">
                                <img src=${nameImage} alt="">
                            </div>
                            <div class="inform">
                                <div>Name: ${inputName.value}</div>
                                <div>Price: ${inputPrice.value}$</div>
                            </div>`
    document.querySelector(".addProduct").append(childCard);
}

// remove
function renderProductList(id, image, name, price, amount, type, title){
    var childCard = document.createElement("div");
    childCard.classList.add("productItem");
    childCard.innerHTML = `<div class="id" onclick="removeProduct(this)">
                                ${id}
                            </div>
                            <div class="image" onclick="removeProduct(this)">
                                <img src=${image} alt="">
                            </div>
                            <div class="name" onclick="removeProduct(this)">
                                ${name}
                            </div>
                            <div class="price" onclick="removeProduct(this)">
                                ${price}
                            </div>
                            <div class="amount" onclick="removeProduct(this)">
                                ${amount}
                            </div>
                            <div class="type" onclick="removeProduct(this)">
                                ${type}
                            </div>
                            <div class="title" onclick="removeProduct(this)">
                                ${title}
                            </div>`
    document.querySelector(".tableListProduct").append(childCard);
}  
function removeProduct(e){
    var parentCard = e.parentElement;
    var id = parentCard.querySelector(".id").innerText;
    var list = [];
    var listProduct = JSON.parse(localStorage.getItem("listProduct"));
    var retVal = confirm("Bạn chắc chắn muốn xóa sản phẩm có id: " +id+ "?");
    if(retVal == true){
        parentCard.style.backgroundColor = "gray";
        for(var i = 0; i < listProduct.length; i++){
            if(id != listProduct[i].id){
                list.push({
                    id: listProduct[i].id,
                    image: listProduct[i].image,
                    name: listProduct[i].name,
                    price: listProduct[i].price,
                    amount: listProduct[i].amount,
                    type: listProduct[i].type,
                    title: listProduct[i].title
                })
            }
        }
    }else{
        return;
    }
    localStorage.setItem("listProduct", JSON.stringify(list));
    uploadProductList();
}
function uploadProductList(){
    resetbody();
    document.querySelector(".removeProduct").style.display = "block";
    document.querySelector(".removeProduct").style.display = "flex";
    document.querySelector(".tableListProduct").innerHTML = "";
    var nameTable = document.createElement("h3");
    nameTable.classList.add("nameTable");
    nameTable.innerHTML = "BẢNG DANH SÁCH SẢN PHẨM"
    var titleTable = document.createElement("div");
    titleTable.classList.add("productItem");
    titleTable.innerHTML = `<div>
                                ID
                            </div>
                            <div>
                                Hình ảnh
                                <!-- <img src="image/render1.jpeg" alt=""> -->
                            </div>
                            <div>
                                Tên sản phẩm
                            </div>
                            <div>
                                Giá sản phẩm
                            </div>
                            <div>
                                Số lượng hiện có
                            </div>
                            <div>
                                Thể loại
                            </div>
                            <div>
                                Thông tin
                            </div>`
    document.querySelector(".tableListProduct").append(nameTable); 
    document.querySelector(".tableListProduct").append(titleTable);                          
    var listProduct = JSON.parse(localStorage.getItem("listProduct"));
    if(listProduct != null){
        for(var i = 0; i < listProduct.length; i++){
            var id = listProduct[i].id;
            var image = listProduct[i].image;
            var name = listProduct[i].name;
            var price = listProduct[i].price;
            var amount = listProduct[i].amount;
            var type = listProduct[i].type;
            var title = listProduct[i].title;
            renderProductList(id, image, name, price, amount, type, title);
        }
    }
}
// edit
function uploadInterfaceEdit(){
    resetbody();
    document.querySelector(".editProduct").style.display = "block";
}
function search(){
    var inputID = document.getElementById("ipIdEdit").value;
    var listProduct = JSON.parse(localStorage.getItem("listProduct"));
    var mark = 0;
    if(listProduct != null){
        for(var i = 0; i < listProduct.length; i++){
            if(inputID == listProduct[i].id){
                document.querySelector(".image img").src = listProduct[i].image;
                document.querySelector(".id h4").innerText = listProduct[i].id;
                document.querySelector(".name h4").innerText = listProduct[i].name;
                document.querySelector(".price h4").innerText = listProduct[i].price;
                document.querySelector(".type h4").innerText = listProduct[i].type;
                document.querySelector(".amount h4").innerText = listProduct[i].amount;
                document.querySelector(".title h4").innerText = listProduct[i].title;
                document.querySelector(".afterEdit").style.display = 'block';
                mark = 1;
            }
        }
    }
    if(mark == 0){
        alert("ID bạn vừa nhập không tồn tại")
        document.querySelector(".image img").src = "";
        document.querySelector(".id h4").innerText = "";
        document.querySelector(".name h4").innerText = "";
        document.querySelector(".price h4").innerText = "";
        document.querySelector(".type h4").innerText = "";
        document.querySelector(".amount h4").innerText = "";
        document.querySelector(".title h4").innerText = "";
        document.querySelector(".afterEdit").style.display = 'none';
    }
}

var inputEditImage = document.getElementById("Image");
var inputEditName = document.getElementById("Name");
var inputEditPrice = document.getElementById("Price");
var inputEditType = document.getElementById("Type");
var inputEditAmount = document.getElementById("Amount");
var inputEditTitle = document.getElementById("Title");
var nameEditImage;
inputEditImage.addEventListener('change', function(){
    var reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    nameEditImage ="image/" + this.files[0].name;
})

function edit(){
    var mark = 0, regExp = /[a-zA-Z]/g;
    var inputID = document.getElementById("ipIdEdit").value;
    var listProduct = JSON.parse(localStorage.getItem("listProduct"));
    if(listProduct != null){
        for(var i = 0; i < listProduct.length; i++){
            if(inputID == listProduct[i].id){
                if(nameEditImage != undefined){
                    listProduct[i].image = nameEditImage;
                    mark = 1;
                }else{
                    
                }
                if(inputEditName.value != ""){
                    listProduct[i].name = inputEditName.value;
                    mark = 1;
                }
                if(inputEditPrice.value != ""){
                    if(regExp.test(inputEditPrice.value)){
                        inputEditPrice.style.border = "2px solid red";
                        alert("Giá phải là giá trị bằng số");
                    }else{
                        inputEditPrice.style.border = "1px solid black";
                        listProduct[i].price = inputEditPrice.value +"$";
                        mark = 1;
                    }
                }
                if(inputEditType.value != ""){
                    listProduct[i].type = inputEditType.value;
                    mark = 1;
                }
                if(inputEditAmount.value != ""){
                    if(regExp.test(inputEditAmount.value)){
                        inputEditAmount.style.border = "2px solid red";
                        alert("Số lượng phải là giá trị bằng số");
                    }else{
                        inputEditAmount.style.border = "1px solid black";
                        listProduct[i].amount = inputEditAmount.value;
                        mark = 1;
                    }
                }
                if(inputEditTitle.value != ""){
                    listProduct[i].title = inputEditTitle.value;
                    mark = 1;
                }
            }
        }
    }
    if(nameEditImage == undefined && inputEditName.value == "" && inputEditPrice.value == "" && inputEditAmount.value == "" 
       && inputEditType.value == "" && inputEditTitle.value == ""){
        alert("Chưa có dữ liệu để thay thế")
    }else if(mark == 1){
        localStorage.setItem("listProduct", JSON.stringify(listProduct));
        alert("Thông tin chỉnh sửa thành công!!")
        document.getElementById("Image").value = "";
        document.getElementById("Name").value = "";
        document.getElementById("Price").value = "";
        document.getElementById("Type").value = "";
        document.getElementById("Amount").value = "";
        document.getElementById("Title").value = "";
    }
    search();
}

function RenderListOrder(name, price, amount, time, address, phoneNum){
    var childCard = document.createElement("div");
    childCard.classList.add("OrderItem");
    childCard.innerHTML = `<div class="listProduct">
                                <div class="list">
                                    <div class="time" style="display: none;"><h4>${time}</h4></div>
                                    <div class="address" style="display: none;"><h4>${address}</h4></div>
                                    <div class="phoneNum" style="display: none;"><h4>${phoneNum}</h4></div>
                                    <div class="nameProduct"><h4>${name}</h4></div>
                                    <div class="priceProduct"><h4>${price}</h4></div>
                                    <div class="amountProduct"><h4>${amount}</h4></div>
                                    <div class="btn">
                                        <button onclick="showIF(this)">Xem chi tiết</button>
                                    </div>
                                </div>
                            </div>`
    document.querySelector(".InterfaceOrder").append(childCard);
}
function showIF(e){
    document.querySelector(".showInform").style.display = "block";
    document.querySelector(".showInform").style.display = "flex";
    document.querySelector(".showInform").innerHTML = "";
    var parent = e.parentElement.parentElement;
    var time = parent.querySelector(".time").innerText;
    var address = parent.querySelector(".address").innerText;
    var phoneNum = parent.querySelector(".phoneNum").innerText;
    var name = parent.querySelector(".nameProduct h4").innerText;
    var price = parent.querySelector(".priceProduct h4").innerText;
    var amount = parent.querySelector(".amountProduct h4").innerText;
    var sum = Number(price*amount)
    var childCard = document.createElement("div")
    childCard.classList.add("parent");
    childCard.innerHTML =  `<ti class="ti-close" onclick="closeXCT()">
                
                            </ti>
                            <div class="name">Tên sản phẩm: ${name}</div>
                            <div class="price">Giá sản phẩm: ${price}</div>
                            <div class="amount">Số lượng sản phẩm: ${amount}</div>
                            <div class="time">Thời gian mua: ${time}</div>
                            <div class="address">Địa chỉ khách hàng: ${address}</div>
                            <div class="phoneNum">Số điện thoại: ${phoneNum}</div>
                            <div class="sum">Tổng giá: ${sum}</div>`
                            
    document.querySelector(".showInform").append(childCard);
}
function closeXCT(){
    document.querySelector(".showInform").style.display = "none";
}
function uploadInterfaceOrder(){
    resetbody();
    document.querySelector(".InterfaceOrder").innerHTML = "";
    document.querySelector(".Order").style.display = "block";
    var listOrder = JSON.parse(localStorage.getItem("Order"));
    var listUser = JSON.parse(localStorage.getItem("ListUser"));
    if(listOrder != null){
        for(var j = 0; j < listUser.length; j++){
            var childCard = document.createElement("div");
            childCard.classList.add("rowTitle");
            childCard.innerHTML = `<div class="nameUser">
                                        <h4>${listUser[j].name}</h4>
                                    </div>
                                    <div class="heading">
                                        <div class="nameProduct">Tên sản phẩm</div>
                                        <div class="priceProduct">Giá sản phẩm</div>
                                        <div class="amountProduct">Số lượng sản phẩm</div>
                                        <div class="btn">
                                            Xem chi tiết
                                        </div>
                                    </div>`
                                    document.querySelector(".InterfaceOrder").append(childCard);
            var total = 0;
            for(var i = 0; i < listOrder.length; i++){
                if(listUser[j].name == listOrder[i].nameUser && listUser[j].pass == listOrder[i].passUser){
                    var Sumprice = listOrder[i].priceProduct*listOrder[i].amountProduct;
                    total += Sumprice;
                    RenderListOrder(listOrder[i].nameProduct, listOrder[i].priceProduct, listOrder[i].amountProduct, listOrder[i].time, listOrder[i].address, listOrder[i].phoneNum);
                }
            }
            var childCard = document.createElement("div");
            childCard.innerHTML = `<h3 style="margin-bottom: 10px; color: red;">Tổng giá trị: ${total}</h3>`;
            document.querySelector(".InterfaceOrder").append(childCard);
        }
    }
}