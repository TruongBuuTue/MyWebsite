// Tên file: bai01.js

function daoNguocChuoi(chuoi) {
  // Sử dụng phương thức split để chia chuỗi thành mảng các ký tự
  // Sau đó sử dụng phương thức reverse để đảo ngược mảng
  // Cuối cùng sử dụng phương thức join để nối các ký tự thành chuỗi
  return chuoi.split('').reverse().join('');
}

// Ví dụ sử dụng
console.log(daoNguocChuoi("hello")); // Kết quả: "olleh"
console.log(daoNguocChuoi("abcde")); // Kết quả: "edcba"
console.log(daoNguocChuoi("12345")); // Kết quả: "54321"
