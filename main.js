// LESSON 33, JS -5, TASK 1

// let lang = prompt("Введите KY или RU: ");

// if (lang === "KY"){
//     document.write("Саламатсызбы!");
// } else if (lang === "RU"){
//     document.write("Здравствуте!");
// }


// LESSON 33, JS -5, TASK 2
// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let stroke = "abcde";
// let stroke = "bacde";

// if ( stroke[0] === "a") {
//     document.write("Yes!");
// } else {
//     document.write("No!");
// }

// LESSON 33, JS -5, TASK 3
// Дано число с цифрами, например, 12345. Проверьте, что первая цифра числа 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num = prompt("Enter 4 digits any number:")

// if (num[0] == 1 || num[0] == 2 || num[0] == 3){
//     alert("yes!");
// } else {
//     alert("No!");
// }

// LESSON 33, JS -5, TASK 4

// Определяем и выводим на экран информацию о том, четное введенное число или нечетное

// let num = prompt("Введите любое число:");

// if (num % 2 == 0) {
//     alert("Это четное число!");
// } else {
//     alert("Это нечетное число!");
// }

// // LESSON 33, JS -5, TASK 5

// Пользователь вводит название месяца исходя из введенного названия месяца нужно вывести сообщение с названием времени года. 

// let mounth  = prompt("Введите любое название месяца:");

// if (mounth == "декабрь" || mounth == "январь" || mounth == "февраль") {
//     alert("Это зимний месяц!");

// } else if (mounth == "март" || mounth == "апрель" || mounth == "май") {
//     alert("Это весенний месяц!");

// } else if (mounth == "июнь" || mounth == "июль" || mounth == "август") {
//     alert("Это летний месяц!");

// } else if (mounth == "сентябрь" || mounth == "октябрь" || mounth == "ноябрь") {
//     alert("Это осений месяц!");
// }

//  LESSON 33, JS -5, TASK 6


// let zodiak = prompt("В каком году вы родились?");
// let cycle = 12;

// if (zodiak % cycle === 0){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Обезьяна");
// }else if (zodiak % cycle === 1){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Петух");
// }else if (zodiak % cycle === 2){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Собака");
// }else if (zodiak % cycle === 3){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Свинья");
// }else if (zodiak % cycle === 4){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Крыса");
// }else if (zodiak % cycle === 5){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Бык");
// }else if (zodiak % cycle === 6){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Тигр");
// }else if (zodiak % cycle === 7){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Кролик");
// }else if (zodiak % cycle === 8){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Дракон");
// }else if (zodiak % cycle === 9){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Змея");
// }else if (zodiak % cycle === 10){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Лощадь");
// }else if (zodiak % cycle === 11){
//     document.write("Ваш знак зодиака по китайскому гороскопу: Коза");
// }else{
//     alert("Error");
// }