const provinces = [
    "กระบี่", "กรุงเทพมหานคร", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", "ขอนแก่น", "จันทบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท",
    "ชัยภูมิ", "ชุมพร", "เชียงราย", "เชียงใหม่", "ตรัง", "ตราด", "ตาก", "นครนายก", "นครปฐม", "นครพนม", "นครราชสีมา", "นครศรีธรรมราช",
    "นครสวรรค์", "นนทบุรี", "นราธิวาส", "น่าน", "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์", "ปราจีนบุรี", "ปัตตานี",
    "พระนครศรีอยุธยา", "พังงา", "พัทลุง", "พิจิตร", "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์", "แพร่", "พะเยา", "ภูเก็ต", "มหาสารคาม",
    "มุกดาหาร", "แม่ฮ่องสอน", "ยโสธร", "ยะลา", "ร้อยเอ็ด", "ระนอง", "ระยอง", "ราชบุรี", "ลพบุรี", "ลำปาง", "ลำพูน", "เลย",
    "ศรีสะเกษ", "สกลนคร", "สงขลา", "สมุทรปราการ", "สมุทรสงคราม", "สมุทรสาคร", "สระแก้ว", "สระบุรี", "สิงห์บุรี", "สุโขทัย",
    "สุพรรณบุรี", "สุราษฎร์ธานี", "สุรินทร์", "หนองคาย", "หนองบัวลำภู", "อ่างทอง", "อำนาจเจริญ", "อุดรธานี", "อุตรดิตถ์",
    "อุทัยธานี", "อุบลราชธานี"
];

const provinceSelect = document.getElementById("province");
provinces.forEach(province => {
    let option = document.createElement("option");
    option.value = province;
    option.textContent = province;
    provinceSelect.appendChild(option);
});

document.querySelector('form').addEventListener('submit', function(event) {
   
    event.preventDefault();

    const fields = [
        'firstname', 'lastname', 'house_no', 'subdistrict', 'district', 'province', 'postcode', 'email', 'password', 'confirm_password'
    ];

    for (let field of fields) {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            alert(`กรุณากรอกข้อมูลในช่อง ${input.previousElementSibling.textContent.trim()}`);
            return; 
        }
    }

    const houseNo = document.getElementById('house_no');
    if (!houseNo.value.match(/^[0-9\/]+$/)) {
        alert('บ้านเลขที่ต้องประกอบด้วยตัวเลขและ / เท่านั้น');
        return;
    }

    const postcode = document.getElementById('postcode');
    if (!postcode.value.match(/^\d{5}$/)) {
        alert('รหัสไปรษณีย์ต้องประกอบด้วยตัวเลข 5 หลัก');
        return;
    }

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    if (password.value !== confirmPassword.value) {
        alert('รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน');
        return;
    }

    alert('ข้อมูลถูกต้อง กำลังส่งฟอร์ม...');
    window.location.href = '../main/main.html';
});

