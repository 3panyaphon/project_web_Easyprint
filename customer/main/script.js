document.addEventListener('DOMContentLoaded', function() {
    // ดึงค่า select ที่เลือก
    const filterSelect = document.getElementById('filterSelect');
   
    // ดึงทุกกล่องร้านค้าที่ขึ้นต้นด้วย "shop-box"
    const shopBoxes = document.querySelectorAll('[class^="shop-box"]');
   
    // ดึงกล่องค้นหาชื่อร้าน
    const searchInput = document.getElementById('searchInput');
   
    // ฟังก์ชันสำหรับกรองร้านค้า
    function filterShops() {
        const filterValue = filterSelect.value; // ค่าเลือกจาก select
        const searchQuery = searchInput.value.toLowerCase(); // ค่าค้นหาจาก input
       
        // สำหรับทุกกล่องร้าน
        shopBoxes.forEach(shop => {
            const shopType = shop.getAttribute('data-type'); // ค่า data-type ของร้าน
            const shopName = shop.querySelector('.shop-name').textContent.toLowerCase(); // ชื่อร้าน
           
            // เช็คว่าคำค้นหามีตรงกับชื่อร้านไหม
            const matchesSearch = shopName.includes(searchQuery);
           
            // ถ้าเลือก "แสดงทั้งหมด" หรือร้านค้าตรงกับ filter
            if ((filterValue === 'all' || shopType.includes(filterValue)) && matchesSearch) {
                shop.style.display = 'flex';  // ใช้ flex เพื่อให้ layout ไม่เพี้ยน
            } else {
                shop.style.display = 'none';
            }
        });
    }
   
    // เรียกใช้ฟังก์ชันเมื่อเลือกค่าใน select
    filterSelect.addEventListener('change', filterShops);
   
    // เรียกใช้ฟังก์ชันเมื่อมีการพิมพ์ในช่องค้นหา
    searchInput.addEventListener('input', filterShops);
   
    // เรียกใช้ฟังก์ชันตอนเริ่มต้นเพื่อกรองร้านค้าเมื่อโหลด
    filterShops();
});
document.getElementById('currentLocation').addEventListener('click', openPopup);
 
function openPopup() {
    // เปิด popup โดยเพิ่มคลาส show
    document.getElementById('addressPopup').classList.add('show');
}
 
function closePopup() {
    // ปิด popup โดยลบคลาส show
    document.getElementById('addressPopup').classList.remove('show');
}