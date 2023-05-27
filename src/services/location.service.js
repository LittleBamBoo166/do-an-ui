import axios from "axios";

const API_URL = "http://localhost:5000/relief-app/v1/contents";
// const provinces = [
//   {
//     "code": "89",
//     "id": "60eaaa6f1173335842c35663",
//     "name": "An Giang",
//     "nameWithType": "Tỉnh An Giang"
//   },
//   {
//     "code": "77",
//     "id": "60eaaa6f1173335842c3565b",
//     "name": "Bà Rịa - Vũng Tàu",
//     "nameWithType": "Tỉnh Bà Rịa - Vũng Tàu"
//   },
//   {
//     "code": "95",
//     "id": "60eaaa6f1173335842c35668",
//     "name": "Bạc Liêu",
//     "nameWithType": "Tỉnh Bạc Liêu"
//   },
//   {
//     "code": "24",
//     "id": "60eaaa6f1173335842c35639",
//     "name": "Bắc Giang",
//     "nameWithType": "Tỉnh Bắc Giang"
//   },
//   {
//     "code": "06",
//     "id": "60eaaa6f1173335842c3562e",
//     "name": "Bắc Kạn",
//     "nameWithType": "Tỉnh Bắc Kạn"
//   },
//   {
//     "code": "27",
//     "id": "60eaaa6f1173335842c3563c",
//     "name": "Bắc Ninh",
//     "nameWithType": "Tỉnh Bắc Ninh"
//   },
//   {
//     "code": "83",
//     "id": "60eaaa6f1173335842c3565f",
//     "name": "Bến Tre",
//     "nameWithType": "Tỉnh Bến Tre"
//   },
//   {
//     "code": "74",
//     "id": "60eaaa6f1173335842c35659",
//     "name": "Bình Dương",
//     "nameWithType": "Tỉnh Bình Dương"
//   },
//   {
//     "code": "52",
//     "id": "60eaaa6f1173335842c3564d",
//     "name": "Bình Định",
//     "nameWithType": "Tỉnh Bình Định"
//   },
//   {
//     "code": "70",
//     "id": "60eaaa6f1173335842c35657",
//     "name": "Bình Phước",
//     "nameWithType": "Tỉnh Bình Phước"
//   },
//   {
//     "code": "60",
//     "id": "60eaaa6f1173335842c35651",
//     "name": "Bình Thuận",
//     "nameWithType": "Tỉnh Bình Thuận"
//   },
//   {
//     "code": "96",
//     "id": "60eaaa6f1173335842c35669",
//     "name": "Cà Mau",
//     "nameWithType": "Tỉnh Cà Mau"
//   },
//   {
//     "code": "04",
//     "id": "60eaaa6f1173335842c3562d",
//     "name": "Cao Bằng",
//     "nameWithType": "Tỉnh Cao Bằng"
//   },
//   {
//     "code": "92",
//     "id": "60eaaa6f1173335842c35665",
//     "name": "Cần Thơ",
//     "nameWithType": "Thành phố Cần Thơ"
//   },
//   {
//     "code": "48",
//     "id": "60eaaa6f1173335842c3564a",
//     "name": "Đà Nẵng",
//     "nameWithType": "Thành phố Đà Nẵng"
//   },
//   {
//     "code": "66",
//     "id": "60eaaa6f1173335842c35654",
//     "name": "Đắk Lắk",
//     "nameWithType": "Tỉnh Đắk Lắk"
//   },
//   {
//     "code": "67",
//     "id": "60eaaa6f1173335842c35655",
//     "name": "Đắk Nông",
//     "nameWithType": "Tỉnh Đắk Nông"
//   },
//   {
//     "code": "11",
//     "id": "60eaaa6f1173335842c35631",
//     "name": "Điện Biên",
//     "nameWithType": "Tỉnh Điện Biên"
//   },
//   {
//     "code": "75",
//     "id": "60eaaa6f1173335842c3565a",
//     "name": "Đồng Nai",
//     "nameWithType": "Tỉnh Đồng Nai"
//   },
//   {
//     "code": "87",
//     "id": "60eaaa6f1173335842c35662",
//     "name": "Đồng Tháp",
//     "nameWithType": "Tỉnh Đồng Tháp"
//   },
//   {
//     "code": "64",
//     "id": "60eaaa6f1173335842c35653",
//     "name": "Gia Lai",
//     "nameWithType": "Tỉnh Gia Lai"
//   },
//   {
//     "code": "02",
//     "id": "60eaaa6f1173335842c3562c",
//     "name": "Hà Giang",
//     "nameWithType": "Tỉnh Hà Giang"
//   },
//   {
//     "code": "35",
//     "id": "60eaaa6f1173335842c35641",
//     "name": "Hà Nam",
//     "nameWithType": "Tỉnh Hà Nam"
//   },
//   {
//     "code": "01",
//     "id": "60eaaa6f1173335842c3562b",
//     "name": "Hà Nội",
//     "nameWithType": "Thành phố Hà Nội"
//   },
//   {
//     "code": "42",
//     "id": "60eaaa6f1173335842c35646",
//     "name": "Hà Tĩnh",
//     "nameWithType": "Tỉnh Hà Tĩnh"
//   },
//   {
//     "code": "30",
//     "id": "60eaaa6f1173335842c3563d",
//     "name": "Hải Dương",
//     "nameWithType": "Tỉnh Hải Dương"
//   },
//   {
//     "code": "31",
//     "id": "60eaaa6f1173335842c3563e",
//     "name": "Hải Phòng",
//     "nameWithType": "Thành phố Hải Phòng"
//   },
//   {
//     "code": "93",
//     "id": "60eaaa6f1173335842c35666",
//     "name": "Hậu Giang",
//     "nameWithType": "Tỉnh Hậu Giang"
//   },
//   {
//     "code": "17",
//     "id": "60eaaa6f1173335842c35635",
//     "name": "Hoà Bình",
//     "nameWithType": "Tỉnh Hoà Bình"
//   },
//   {
//     "code": "79",
//     "id": "60eaaa6f1173335842c3565c",
//     "name": "Hồ Chí Minh",
//     "nameWithType": "Thành phố Hồ Chí Minh"
//   },
//   {
//     "code": "33",
//     "id": "60eaaa6f1173335842c3563f",
//     "name": "Hưng Yên",
//     "nameWithType": "Tỉnh Hưng Yên"
//   },
//   {
//     "code": "56",
//     "id": "60eaaa6f1173335842c3564f",
//     "name": "Khánh Hòa",
//     "nameWithType": "Tỉnh Khánh Hòa"
//   },
//   {
//     "code": "91",
//     "id": "60eaaa6f1173335842c35664",
//     "name": "Kiên Giang",
//     "nameWithType": "Tỉnh Kiên Giang"
//   },
//   {
//     "code": "62",
//     "id": "60eaaa6f1173335842c35652",
//     "name": "Kon Tum",
//     "nameWithType": "Tỉnh Kon Tum"
//   },
//   {
//     "code": "12",
//     "id": "60eaaa6f1173335842c35632",
//     "name": "Lai Châu",
//     "nameWithType": "Tỉnh Lai Châu"
//   },
//   {
//     "code": "20",
//     "id": "60eaaa6f1173335842c35637",
//     "name": "Lạng Sơn",
//     "nameWithType": "Tỉnh Lạng Sơn"
//   },
//   {
//     "code": "10",
//     "id": "60eaaa6f1173335842c35630",
//     "name": "Lào Cai",
//     "nameWithType": "Tỉnh Lào Cai"
//   },
//   {
//     "code": "68",
//     "id": "60eaaa6f1173335842c35656",
//     "name": "Lâm Đồng",
//     "nameWithType": "Tỉnh Lâm Đồng"
//   },
//   {
//     "code": "80",
//     "id": "60eaaa6f1173335842c3565d",
//     "name": "Long An",
//     "nameWithType": "Tỉnh Long An"
//   },
//   {
//     "code": "36",
//     "id": "60eaaa6f1173335842c35642",
//     "name": "Nam Định",
//     "nameWithType": "Tỉnh Nam Định"
//   },
//   {
//     "code": "40",
//     "id": "60eaaa6f1173335842c35645",
//     "name": "Nghệ An",
//     "nameWithType": "Tỉnh Nghệ An"
//   },
//   {
//     "code": "37",
//     "id": "60eaaa6f1173335842c35643",
//     "name": "Ninh Bình",
//     "nameWithType": "Tỉnh Ninh Bình"
//   },
//   {
//     "code": "58",
//     "id": "60eaaa6f1173335842c35650",
//     "name": "Ninh Thuận",
//     "nameWithType": "Tỉnh Ninh Thuận"
//   },
//   {
//     "code": "25",
//     "id": "60eaaa6f1173335842c3563a",
//     "name": "Phú Thọ",
//     "nameWithType": "Tỉnh Phú Thọ"
//   },
//   {
//     "code": "54",
//     "id": "60eaaa6f1173335842c3564e",
//     "name": "Phú Yên",
//     "nameWithType": "Tỉnh Phú Yên"
//   },
//   {
//     "code": "44",
//     "id": "60eaaa6f1173335842c35647",
//     "name": "Quảng Bình",
//     "nameWithType": "Tỉnh Quảng Bình"
//   },
//   {
//     "code": "49",
//     "id": "60eaaa6f1173335842c3564b",
//     "name": "Quảng Nam",
//     "nameWithType": "Tỉnh Quảng Nam"
//   },
//   {
//     "code": "51",
//     "id": "60eaaa6f1173335842c3564c",
//     "name": "Quảng Ngãi",
//     "nameWithType": "Tỉnh Quảng Ngãi"
//   },
//   {
//     "code": "22",
//     "id": "60eaaa6f1173335842c35638",
//     "name": "Quảng Ninh",
//     "nameWithType": "Tỉnh Quảng Ninh"
//   },
//   {
//     "code": "45",
//     "id": "60eaaa6f1173335842c35648",
//     "name": "Quảng Trị",
//     "nameWithType": "Tỉnh Quảng Trị"
//   },
//   {
//     "code": "94",
//     "id": "60eaaa6f1173335842c35667",
//     "name": "Sóc Trăng",
//     "nameWithType": "Tỉnh Sóc Trăng"
//   },
//   {
//     "code": "14",
//     "id": "60eaaa6f1173335842c35633",
//     "name": "Sơn La",
//     "nameWithType": "Tỉnh Sơn La"
//   },
//   {
//     "code": "72",
//     "id": "60eaaa6f1173335842c35658",
//     "name": "Tây Ninh",
//     "nameWithType": "Tỉnh Tây Ninh"
//   },
//   {
//     "code": "34",
//     "id": "60eaaa6f1173335842c35640",
//     "name": "Thái Bình",
//     "nameWithType": "Tỉnh Thái Bình"
//   },
//   {
//     "code": "19",
//     "id": "60eaaa6f1173335842c35636",
//     "name": "Thái Nguyên",
//     "nameWithType": "Tỉnh Thái Nguyên"
//   },
//   {
//     "code": "38",
//     "id": "60eaaa6f1173335842c35644",
//     "name": "Thanh Hóa",
//     "nameWithType": "Tỉnh Thanh Hóa"
//   },
//   {
//     "code": "46",
//     "id": "60eaaa6f1173335842c35649",
//     "name": "Thừa Thiên Huế",
//     "nameWithType": "Tỉnh Thừa Thiên Huế"
//   },
//   {
//     "code": "82",
//     "id": "60eaaa6f1173335842c3565e",
//     "name": "Tiền Giang",
//     "nameWithType": "Tỉnh Tiền Giang"
//   },
//   {
//     "code": "84",
//     "id": "60eaaa6f1173335842c35660",
//     "name": "Trà Vinh",
//     "nameWithType": "Tỉnh Trà Vinh"
//   },
//   {
//     "code": "08",
//     "id": "60eaaa6f1173335842c3562f",
//     "name": "Tuyên Quang",
//     "nameWithType": "Tỉnh Tuyên Quang"
//   },
//   {
//     "code": "86",
//     "id": "60eaaa6f1173335842c35661",
//     "name": "Vĩnh Long",
//     "nameWithType": "Tỉnh Vĩnh Long"
//   },
//   {
//     "code": "26",
//     "id": "60eaaa6f1173335842c3563b",
//     "name": "Vĩnh Phúc",
//     "nameWithType": "Tỉnh Vĩnh Phúc"
//   },
//   {
//     "code": "15",
//     "id": "60eaaa6f1173335842c35634",
//     "name": "Yên Bái",
//     "nameWithType": "Tỉnh Yên Bái"
//   }
// ]

class LocationService {
  getAllProvinces() {
    return axios.get(`${API_URL}/provinces`).then(response => {
      if (response.data.success == true) {
        localStorage.setItem("province", JSON.stringify(response.data.data.provinces));
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  getAllDistricts() {
    return axios.get(`${API_URL}/districts`).then(response => {
      if (response.data.success == true) {
        localStorage.setItem("district", JSON.stringify(response.data.data.districts));
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  getAllWards() {
    return axios.get(`${API_URL}/wards`).then(response => {
      if (response.data.success == true) {
        localStorage.setItem("ward", JSON.stringify(response.data.data.wards));
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}

export default new LocationService();