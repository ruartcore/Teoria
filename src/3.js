const str = 'Flexbe. Frontend. Test. 1234567890.';

const func = (str) => (
  (str.length >= 1) // если не дошли до конца
   ? (!(str[0].charCodeAt(0) % 3)) //  проверяем кратность
   ? 1 + func(str.slice(1)) // передаем новую строку с подсчетом
   : 0 + func(str.slice(1)) // если не кратно
   : 0 // если дошли до конца
);
console.log(func(str));
