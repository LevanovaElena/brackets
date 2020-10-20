module.exports = function check(str, bracketsConfig) {
  // your solution check('||', [['|', '|']]); // -> true
  if (str === undefined || bracketsConfig === undefined) return false;
  let result = false;
  let stek = [];
  for (i = 0; i < str.length; i++) {
    //анализ скобки

    for (j = 0; j < bracketsConfig.length; j++)//проходим по массивам конфига
    {
      if (bracketsConfig[j].indexOf(str[i]) !== -1) //если конфиг для текщей скобки
      {
        if (bracketsConfig[j][0] === bracketsConfig[j][1])//если одинаковые открывающая и закрывающая
        {
          if (stek[stek.length - 1] === str[i])//уже есть открывающая в стеке
          {
            stek.pop();
            result = true;
          }
          else {
            stek.push(str[i]);
            result = false;
          }
        }
        else //если разные открывающая и закрывающая
        {
          if (bracketsConfig[j][0] === str[i]) //текущая скобка открывающая
          {
            stek.push(str[i]);//заносим в стек
            result = false;
          }
          else if (bracketsConfig[j][1] === str[i]) //текущая закрывающая
          {

            if (stek.pop() === bracketsConfig[j][0]) result = true;//проверяем верхнюю в стеке: если она открывающая-все ок
            else return false;

          }
        }
      }
    }
  }
  return result;
}
