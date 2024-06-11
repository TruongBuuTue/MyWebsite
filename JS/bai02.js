
// Hàm tính số Fibonacci sử dụng phương pháp lặp
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Ví dụ sử dụng
console.log(fibonacci(5));  // Kết quả: 5
console.log(fibonacci(10)); // Kết quả: 55
console.log(fibonacci(0));  // Kết quả: 0
console.log(fibonacci(1));  // Kết quả: 1
console.log(fibonacci(20)); // Kết quả: 6765
