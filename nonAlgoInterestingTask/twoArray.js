// Даны 2 отсортированных масива
// Выведи все элементы 1-ого массива, которые не встречаются во 2-ом
// [1,2,3],[2,3,4] => [1]

function filter(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        j++;
      } else {
        // arr1[i] === arr2[j], пропускаем его
        i++;
        j++;
      }
    }
  
    // Добавляем оставшиеся элементы из arr1
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    return result;
  }