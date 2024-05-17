

// phần thông tin cá nhân
const validationMessage = document.getElementById('validationMessage');
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const thongtinEl = document.querySelectorAll('.thongtin');
const btnDisplay = document.querySelector('.btdisplay');
const emailInput= document.querySelector('.emailInput');
const pEl= document.querySelector('.fw-normal');
const displayEl = document.querySelector('.display');
const textEmail = document.querySelector('.textemail');
// const inputValue = emailInput.value.trim();
let inputValue = '';

emailInput.addEventListener('input', function(event) {
    inputValue = event.target.value.trim(); // Lưu giá trị nhập vào và loại bỏ khoảng trắng ở đầu và cuối
});


// console.log("ec",textEmail.textContent)
thongtinEl.forEach(element => {
    // Thêm class "hide" vào  phần tử
    element.classList.add('hide')
    // console.log(element)
});
// console.log(a)

const fdisplay = () =>{
    if(`Email: ${inputValue}` === `${textEmail.textContent}`){
        thongtinEl.forEach(element => {
            // Thêm class "hide" vào  phần tử
            element.classList.remove('hide')
            console.log(element)
        });
        btnDisplay.classList.add('hide');
        emailInput.classList.add('hide');
        pEl.classList.add('hide')
    }else{
        console.log( textEmail.textContent)
        console.log(` ${inputValue}`)
    }
}
btnDisplay.addEventListener('click', fdisplay)

// Thêm sự kiện click cho nút Submit
btnDisplay.addEventListener('click', function() {
     inputValue // Lấy giá trị nhập vào và loại bỏ khoảng trắng ở đầu và cuối
    if (regex.test(inputValue)) {
        validationMessage.textContent = ''; // Hiển thị thông báo nếu email hợp lệ
        // validationMessage.style.color = 'green';
    } else {
        validationMessage.textContent = 'Email không hợp lệ'; // Hiển thị thông báo nếu email không hợp lệ
        validationMessage.style.color = 'red';
    }
});


// phần kinh nghiệm, kỹ năng ...
const displayExp = document.querySelectorAll('.displayExp');
const btnviewKn= document.querySelector('.viewmoreKn');
const btnviewHv = document.querySelector('.viewmoreHv');
const btnviewHd = document.querySelector('.viewmoreHd');
const btnviewSt = document.querySelector('.viewmoreSt');
const btnviewNn = document.querySelector('.viewmoreNn');
const btnviewKyn = document.querySelector('.viewmoreKyn');

const btnlessKn= document.querySelector('.viewlessKn');
const btnlessHv = document.querySelector('.viewlessHv');
const btnlessHd = document.querySelector('.viewlessHd');
const btnlessSt = document.querySelector('.viewlessSt');
const btnlessNn = document.querySelector('.viewlessNn');
const btnlessKyn = document.querySelector('.viewlessKyn');

const viewKinhnghiem = document.querySelector('.displayKinhnghiem');
const viewHocvan = document.querySelector('.displayHocvan');
const viewHoatdong = document.querySelector('.displayHoatdong');
const viewSothich = document.querySelector('.displaySothich');
const viewNgonngu = document.querySelector('.displayNgonngu');
const viewKynang = document.querySelector('.displayKynang');
displayExp.forEach(element => {
    element.classList.add('hide')
}); 

const fviewMoreKinhngiem = () =>{
    // Thêm class "hide" vào  phần tử nếu kh có và xóa nếu có
        viewKinhnghiem.classList.toggle('hide');
        btnviewKn.classList.toggle('hide');
        btnlessKn.classList.toggle('hide');
        
}
const fviewMoreHocvan = () =>{
    viewHocvan.classList.toggle('hide')
    btnviewHv.classList.toggle('hide');
    btnlessHv.classList.toggle('hide');
}
const fviewMoreHoatdong = () =>{
    viewHoatdong.classList.toggle('hide')
    btnviewHd.classList.toggle('hide');
    btnlessHd.classList.toggle('hide');
}
const fviewMoreSothich = () =>{
    viewSothich.classList.toggle('hide')
    btnviewSt.classList.toggle('hide');
    btnlessSt.classList.toggle('hide');
}
const fviewMoreNgonngu = () =>{
    viewNgonngu.classList.toggle('hide')
    btnviewNn.classList.toggle('hide');
    btnlessNn.classList.toggle('hide');
}
const fviewMoreKynang = () =>{
    viewKynang.classList.toggle('hide')
    btnviewKyn.classList.toggle('hide');
    btnlessKyn.classList.toggle('hide');
}
// xử lý xự kiện click
btnviewKn.addEventListener('click', fviewMoreKinhngiem);
btnviewHv.addEventListener('click', fviewMoreHocvan);
btnviewHd.addEventListener('click', fviewMoreHoatdong);
btnviewSt.addEventListener('click', fviewMoreSothich);
btnviewNn.addEventListener('click', fviewMoreNgonngu);
btnviewKyn.addEventListener('click', fviewMoreKynang);

btnlessKn.addEventListener('click', fviewMoreKinhngiem);
btnlessHv.addEventListener('click', fviewMoreHocvan);
btnlessHd.addEventListener('click', fviewMoreHoatdong);
btnlessSt.addEventListener('click', fviewMoreSothich);
btnlessNn.addEventListener('click', fviewMoreNgonngu);
btnlessKyn.addEventListener('click', fviewMoreKynang);

