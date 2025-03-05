document.addEventListener("DOMContentLoaded", function () {
    const pickupOption = document.getElementById("pickup");
    const deliveryOption = document.getElementById("delivery");
    const shippingContainer = document.getElementById("shipping-container");

    function toggleShippingContainer() {
        if (deliveryOption.checked) {
            shippingContainer.style.display = "block";
        } else {
            shippingContainer.style.display = "none";
            document.querySelector(".box-edit-address").style.display = "none"; // ซ่อนกล่องแก้ไขที่อยู่
        }
    }

    pickupOption.addEventListener("change", toggleShippingContainer);
    deliveryOption.addEventListener("change", toggleShippingContainer);

    const editAddressLink = document.querySelector(".edit-address");
    const boxEditAddress = document.querySelector(".box-edit-address");

    editAddressLink.addEventListener("click", function (event) {
        event.preventDefault();

        // เช็คก่อนว่าผู้ใช้เลือก "จัดส่งถึงที่" หรือยัง
        if (!deliveryOption.checked) {
            alert("กรุณาเลือก 'จัดส่งถึงที่' ก่อนแก้ไขที่อยู่!");
            return;
        }

        boxEditAddress.style.display = (boxEditAddress.style.display === "block") ? "none" : "block";
    });

    // ตรวจสอบหลักฐานการชำระเงินและการเลือกจัดส่ง
    document.querySelector('.btn-confirm').addEventListener('click', function (event) {
        const paymentProof = document.querySelector('.qr-section input[type="file"]').files.length;
        const deliveryMethod = document.querySelector('input[name="delivery"]:checked');

        if (paymentProof === 0 && !deliveryMethod) {
            alert("กรุณาอัปโหลดหลักฐานการชำระเงินและเลือกวิธีการจัดส่ง!");
            event.preventDefault();
        } else if (paymentProof === 0) {
            alert("กรุณาอัปโหลดหลักฐานการชำระเงิน!");
            event.preventDefault();
        } else if (!deliveryMethod) {
            alert("กรุณาเลือกวิธีการจัดส่ง!");
            event.preventDefault();
        }
    });
});

