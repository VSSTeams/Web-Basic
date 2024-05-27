// Search functionality
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchData = [
  { name: "Giá vé khách lẻ", link: "../giave/giavekhachle.html" },
  { name: "Giá vé phương tiện", link: "../giave/giavephuongtien.html" },
  { name: "Giá vé dịch vụ", link: "../giave/giavedichvu.html" },
  { name: "Tàu Vượt Thác", link: "../trochoi/tauvuotthac.html" },
  { name: "Bắn Súng", link: "../trochoi/bansung.html" },
  { name: "Vòng Quay Thần Tốc", link: "../trochoi/vongquaythantoc.html" },
  { name: "Lâu Đài Kinh Dị", link: "../trochoi/laudaikinhdi.html" },
  { name: "Lâu Đài Kì Thú", link: "../trochoi/laudaikithu.html" },
  { name: "Rồng Lượn", link: "../trochoi/rongluon.html" },
  { name: "Siêu Nhân Robot", link: "../trochoi/sieunhan.html" },
  { name: "Spinning Coaster", link: "../trochoi/SpinningCoaster.html" },
  { name: "Băng Đăng", link: "../trochoi/bangdang.html" },
  { name: "Đạp Vịt", link: "../trochoi/dapvit.html" },
  { name: "Đua Xe", link: "../trochoi/duaxe.html" },
  { name: "Xem Phim", link: "../trochoi/xemphim.html" },
  { name: "Vườn Nhật Bản", link: "../canhdep/vuonnhatban.html" },
  { name: "Vườn xương rồng", link: "../canhdep/xuongrong.html" },
  { name: "Đảo Lan Rừng", link: "../canhdep/lanrung.html" },
  { name: "Sân Khấu", link: "../sankhau/sankhau.html" },
  { name: "Sự kiện đã tổ chức", link: "../sukien/sukiendtc.html" },
  { name: "Sự kiện sáp tổ chức", link: "../sukien/sukienstc.html" },
 
];

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";
  if (query) {
    const results = searchData.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    results.forEach((result) => {
      const div = document.createElement("div");
      div.innerHTML = `<a href="${result.link}" class="block p-2 hover:bg-gray-200">${result.name}</a>`;
      searchResults.appendChild(div);
    });
    searchResults.style.display = "block";
  } else {
    searchResults.style.display = "none";
  }
});
