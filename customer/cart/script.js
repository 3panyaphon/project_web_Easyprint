function toggleQR(show) {
    document.getElementById("qrSection").style.display = show ? "block" : "none";
}

function checkPayment() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked'); // ตรวจสอบการเลือกวิธีชำระเงิน
    const qrPaymentSelected = paymentMethod && paymentMethod.value === 'qr'; // ตรวจสอบว่าเลือก QR Code หรือไม่
    const fileInput = document.querySelector('.qr-section input[type="file"]');
    
    // หากยังไม่ได้เลือกวิธีชำระเงิน
    if (!paymentMethod) {
        alert("กรุณาเลือกวิธีการชำระเงิน");
        return false;
    }

    // หากเลือก QR และไม่ได้อัปโหลดไฟล์
    if (qrPaymentSelected && !fileInput.files.length) {
        alert("กรุณาอัปโหลดหลักฐานการชำระเงิน");
        return false;
    }

    // หากผ่านเงื่อนไขทั้งหมดให้แสดงป็อปอัพคอนเฟิร์ม
    const confirmAction = confirm("คุณต้องการยืนยันคำสั่งซื้อหรือไม่?");
    if (confirmAction) {
        // เมื่อยืนยันให้เปลี่ยนหน้าไปที่หน้าอื่น
        window.location.href = "../order/order1.html"; // เปลี่ยนเป็น URL ที่ต้องการ
    }
    return confirmAction;
}

document.querySelector('.btn-confirm').addEventListener('click', function(event) {
    if (!checkPayment()) {
        event.preventDefault();  // ยกเลิกการส่งฟอร์มถ้ายังไม่ผ่านเงื่อนไข
    }
});
