
const AREA_A = "A";
const AREA_B = "B";
const AREA_C = "C";
const AREA_X = "X";

const OBJETC_1 = 1;
const OBJETC_2 = 2;
const OBJETC_3 = 3;
const OBJETC_0 = 0;

const tinhDiemKhuVuc = (area) => {
  switch (area) {
    case AREA_A:
      return 2;
    case AREA_B:
      return 1;
    case AREA_C:
      return .5;
    case AREA_X:
      return 0;
    default:
      break;
  }
}

const tinhDiemDoiTuong = (object) => {
  switch (object) {
    case OBJETC_1:
      return 2.5;
    case OBJETC_2:
      return 1.5;
    case OBJETC_3:
      return 1;
    case OBJETC_0:
      return 0;
    default:
      break;
  }
}

document.getElementById("btn-submit").addEventListener("click", function () {
  var diemChuan = document.getElementById("standard-score").value * 1;
  var diem1 = document.getElementById("first-score").value * 1;
  var diem2 = document.getElementById("second-score").value * 1;
  var diem3 = document.getElementById("third-score").value * 1;

  console.log(diemChuan, diem1, diem2, diem3);

  var area = document.getElementById("txt-area").value;
  console.log(area);
  var diemKhuVuc = tinhDiemKhuVuc(area);
  console.log(diemKhuVuc);

  var object = document.getElementById("txt-object").value * 1;
  console.log(object);
  var diemDoiTuong = tinhDiemDoiTuong(object);
  console.log("diemdoituong", diemDoiTuong);

  var tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
  console.log(tongDiem);
  if (tongDiem >= diemChuan && (diem1 * diem2 * diem3) != 0) {
    document.getElementById("total").innerText = tongDiem;
    document.getElementById("result").innerText = "Pass"
  } else {
    document.getElementById("total").innerText = tongDiem;
    document.getElementById("result").innerText = "Fail"
  }
});