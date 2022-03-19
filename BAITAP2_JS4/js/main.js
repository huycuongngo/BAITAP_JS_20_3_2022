

const FITST_50 = 500;
const NEXT_50 = 650;
const NEXT_100 = 850;
const NEXT_150 = 1100;
const ELSE = 1300;


document.getElementById("txt-btn-kw").addEventListener("click", function () {
  var name = document.getElementById("txt-name").value.toUpperCase();
  console.log(name);

  var soKwDien = document.getElementById("txt-kw").value * 1;
  console.log(soKwDien);

  var tienDien;
  if (soKwDien <= 50) {
    tienDien = soKwDien * 500;
  } else if (soKwDien <= 100) {
    tienDien = 50 * 500 + (soKwDien - 50) * 650;
  } else if ( soKwDien <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKwDien - 100) * 850;
  } else if (soKwDien <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKwDien - 200) * 1100;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwDien - 350) * 1300;
  }

  tienDien = tienDien.toLocaleString();

  document.getElementById("result").innerText = `${name}  su dung  ${soKwDien} KW, so tien: ${tienDien}d`;
});
