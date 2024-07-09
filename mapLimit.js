async function mapLimit(arr, limit, fn) {
  let arr_index = 0;
  const result = [];

  while (arr_index < arr.length) {
    let limit_ind = 0;
    while (limit_ind < limit && arr_index < arr.length) {
      result[arr_index] = await processItem(arr, arr_index, fn);
      arr_index++;
      limit_ind++;
    }
  }

  return result;
}

async function processItem(arr, index, fn) {
  console.log("added item ", index);
  const data = await new Promise((res) => res(fn(arr[index])));
  return data;
}

async function main() {
  const result = await mapLimit([1, 2, 3, 4, 5], 5, async (item) => 2 * item);
  console.log(result);
}

main();
