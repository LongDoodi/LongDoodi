// ===================================================
// ตัวแปรหลัก
// ===================================================

const gameLink = document.getElementById("gameLink");
const canvas = document.getElementById("canvasImage");
const ctx = canvas.getContext("2d");

let currentImage = "images/default.jpg";



// ===================================================
// เปลี่ยนรูปตามตัวเลือก
// ===================================================

gameLink.addEventListener("change", function () {

    let selected = this.options[this.selectedIndex];

    let image = selected.getAttribute("data-image");


    if(image){

        currentImage = image;

    }else{

        currentImage = "images/default.jpg";

    }


    drawImage();

});





// ===================================================
// วาดรูปปกติ
// ===================================================

function drawImage(){


    let img = new Image();


    img.onload = function(){


        canvas.width = img.width;

        canvas.height = img.height;


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.drawImage(
            img,
            0,
            0,
            canvas.width,
            canvas.height
        );


    };


    img.src = currentImage;

}



// โหลดรูปแรก

drawImage();






// ===================================================
// ปุ่มบันทึก
// ===================================================

function saveData(){


    let user = document.getElementById("username").value;

    let pass = document.getElementById("password").value;


    let game = document.getElementById("gameLink");


    let link = game.value;

    let name = game.options[game.selectedIndex].text;



    // ===================================================
    // วาดข้อความลงรูป
    // ===================================================

    let img = new Image();


    img.onload = function(){


        canvas.width = img.width;

        canvas.height = img.height;



        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );



        // วาดรูป

        ctx.drawImage(
            img,
            0,
            0,
            canvas.width,
            canvas.height
        );




        // เลือกรูปที่กำลังใช้งาน

        let selected = game.options[game.selectedIndex];



        // ตำแหน่ง USER

        let userX = Number(selected.dataset.userX) || 100;

        let userY = Number(selected.dataset.userY) || 295;



        // ตำแหน่ง PASSWORD

        let passX = Number(selected.dataset.passX) || 100;

        let passY = Number(selected.dataset.passY) || 375;





        // ตั้งค่าข้อความ

        ctx.fillStyle = "#ff0000";

        ctx.font = "bold 20px Arial";





        // เขียน USER

        ctx.fillText(
            user || "-",
            userX,
            userY
        );




        // เขียน PASSWORD

        ctx.fillText(
            pass || "-",
            passX,
            passY
        );



    };



    img.src = currentImage;







    // ===================================================
    // แสดงผลด้านล่าง
    // ===================================================


    let result = document.getElementById("result");


    result.style.display = "block";


    result.innerHTML = `


    <b>USER :</b> ${user || "-"}

    <br>


    <b>PASS :</b> ${pass || "-"}


    <br><br>


    <b>ทางเข้าเล่น</b>

    <br>


    ${
        link
        ?
        `<a href="${link}" target="_blank">
        ${link}
        </a>`
        :
        "กรุณาเลือกทางเข้าเล่น"
    }



    <br><br>


    <b>แนะนำให้เข้าเล่นผ่าน</b>

    <br>


    Google Chrome หรือ Safari

<br>
    <br>

    เพื่อความรวดเร็ว เสถียร 
    
    <br>
    
    และภาพที่คมชัดขณะเข้าเล่น

    `;



}