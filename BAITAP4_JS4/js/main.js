const HOA_DON_ND = 4.5;
const DICH_VU_ND = 20.5;
const KENH_ND = 7.5;

const HOA_DON_DN = 15;
const DICH_VU_DN = 75;
const KENH_DN = 50;


const handleChange = () => {
  var loaiKhachHang = document.getElementById("txt-loai-khach-hang").value;

  if (loaiKhachHang == "nhadan") {
    document.getElementById("txt-ket-noi").disabled = true;
    document.getElementById("txt-ket-noi").value = "";
  } else {
    document.getElementById("txt-ket-noi").disabled = false;
  }
}


document.getElementById("btn-submit").addEventListener("click", () => {
  var soKetNoi = document.getElementById("txt-ket-noi").value * 1;
  console.log(soKetNoi);

  var soKenhCaoCap = document.getElementById("txt-kenh-cao-cap").value * 1;
  console.log(soKenhCaoCap);

  var tongtien;

  var loaiKhachHang = document.getElementById("txt-loai-khach-hang").value;
  console.log(loaiKhachHang);

  if (loaiKhachHang == "doanhnghiep") {
    if (soKetNoi <= 10) {
      tongtien = HOA_DON_DN + DICH_VU_DN + KENH_DN * soKenhCaoCap;

    } else {
      tongtien = HOA_DON_DN + DICH_VU_DN + 5 * (soKetNoi-10) + KENH_DN * soKenhCaoCap;

    }
    document.getElementById("result").innerText = `${tongtien}$`;
  } else {
    tongtien = HOA_DON_ND + DICH_VU_ND + KENH_ND * soKenhCaoCap;
    document.getElementById("result").innerText = `${tongtien}$`;
  }
});
