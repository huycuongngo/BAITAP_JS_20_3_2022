
const TS_60 = .05;
const TS_60_120 = .1;
const TS_120_216 = .15;
const TS_216_384 = .2;
const TS_384_624 = .25;
const TS_624_960 = .3;
const TS_960 = .35;


document.getElementById("btn-submit").addEventListener("click", function () {
  var name = document.getElementById("txt-name").value.toUpperCase();
  console.log(name);

  var money = document.getElementById("txt-money").value * 1;
  console.log(money);

  var persons = document.getElementById("txt-person").value * 1;
  console.log(persons);

  var ThuNhapChiuThue = money - 4 - persons * 1.6;
  console.log(ThuNhapChiuThue);

  var ThuNhapTinhThue;
  if (ThuNhapChiuThue <= 60) {
    ThuNhapTinhThue = ThuNhapChiuThue * TS_60;
  } else if (ThuNhapChiuThue <= 120) {
    ThuNhapTinhThue = 60 * TS_60 + (ThuNhapChiuThue - 60) * TS_60_120;
  } else if (ThuNhapChiuThue <= 216) {
    ThuNhapTinhThue = 60 * TS_60 + 60 * TS_60_120 + (ThuNhapChiuThue - 120) * TS_120_216;
  } else if (ThuNhapChiuThue <= 384) {
    ThuNhapTinhThue = 60 * TS_60 + 60 * TS_60_120 + 96 * TS_120_216 + (ThuNhapChiuThue - 216) * TS_216_384;
  } else if (ThuNhapChiuThue <= 624) {
    ThuNhapTinhThue = 60 * TS_60 + 60 * TS_60_120 + 96 * TS_120_216 + 168 * TS_216_384 + (ThuNhapChiuThue - 384) * TS_384_624;
  } else if (ThuNhapChiuThue <= 960) {
    ThuNhapTinhThue = 60 * TS_60 + 60 * TS_60_120 + 96 * TS_120_216 + 168 * TS_216_384 + 240 * TS_384_624 + (ThuNhapChiuThue - 624) * TS_624_960;
  } else {
    ThuNhapTinhThue = 60 * TS_60 + 60 * TS_60_120 + 96 * TS_120_216 + 168 * TS_216_384 + 240 * TS_384_624 + 336 * TS_624_960 + (ThuNhapChiuThue - 960) * TS_960;
  }

  document.getElementById("result").innerText = `${name} phai nop so tien: ${ThuNhapTinhThue}tr`;
});