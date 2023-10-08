//foreach : lọc qua mỗi hàng tử trong mảnhg rồi trả ra từng giá trị của nó
//find : tìm ra giá trị thỏa mãn đk mà mình return ra sẽ trả ra giá trị đầu tiên
//some : trả về kiểu boolean nếu true thì dúng với đk cho và ngược lại
//every : đi xét tất cả các phần tử nếu đúng hết thì trả về (true) có 1 cái sai sẽ lập tức trả về false luôn.
//filter: trả về các phần tử thỏa mãn đk
//map : tạo ra 1 mảng mới
// bai 1
const numbers = [1, 2, 3, 4, 5, 6];
const sumEven = numbers.map((item) => {
  return item > 1;
});
//console.log(sumEven);
//bai2
const strings = ["hello", "", "world", "!"];
const combinedString = strings.map((item) => {
  return item;
});
console.log(combinedString);
