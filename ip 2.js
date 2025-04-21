let arr = [1, [1, 2, 3, 4], [5, 6, "yash", 8]];

function checkTarget(target) {
  for (let index = 0; index < arr.length; index++) {
    for (let z = 0; z < arr[index].length; z++) {
      const element = arr[index][z];
      if (element == target) {
        console.log("Element found at index: ", index, z);
      }
    }
  }
}