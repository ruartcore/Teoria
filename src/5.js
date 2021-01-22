/**
 * Mock функция, представьте что это кривой старый promissless сторонний сервис возвращающий записи из БД,
 * Доступа к исходному коду этого сервиса у вас нет и исправить его нельзя
 * НЕ МЕНЯЙТЕ ДАННЫЙ МЕТОД
 *
 * @param id {Number} - ID записи
 * @param callback {Function<Error, Object>} - Коллбек функция возвращающая результирующие данные
*/
const getData = (id, callback = () => {}) => {
  if (!id) {
    return callback(new Error('getData: ID not specified'));
  }

  setTimeout(() => {
    const data = {
				    utime: Date.now(),
    };
    callback(null, data);
  }, Math.random() * 1000);
};


function mult(multi, data) {
  const out = [];
  for (const a in multi) {
    out.push({ id: multi[a], data });
  }
  return out; // возвращаем новые данные multiple
}

resultFn = (data) => {
  const out = JSON.parse(data);
  JSON.parse(JSON.stringify(JSON.parse(data).other), (key, value) => {
    if (!(key in out) && key != '') {
      out[key] = value;
    }
  });
  delete out.other;
  console.log(out);
};

/**
 * Ваша функция
 * Перепишите данный метод так
 * что бы в результате выполнения функции в resultFn пришли данные по каждому ID в требуемом формате
 * @param data {Object} - Исходный обьект
 * @result {Promise<Object>} - Полный обьект с данными от сервера
*/

mainFn = (data) => new Promise((resolve) => {
  getData('a', (_items, _data) => {
    resolve(
      {
        id: data.id,
        title: data.title,
        single: { id: data.single, _data },
        multiple: mult(data.multiple, _data),
        other: JSON.parse(JSON.stringify(_data)),
      },
    );
  });
})
;

mainFn({
  id: 78,
  title: 'Some title',
  single: 12345,
  multiple: [56783, 46573, 13251],
}).then((result) => {
  resultFn(JSON.stringify(result));
});
