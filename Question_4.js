function check(str, arr, j) {
    arr2 = str.split('');

    if (arr2[0].toLowerCase() == "a" && arr2[arr2.length - 1].toLowerCase() == "d")
        arr[j] = "mango";


    if (str.search("o") >= 0 || str.search("u") >= 0) {
        if (arr[j] == "mango")
            arr[j] = "MANGO";

        else
            arr[j] = str.toUpperCase();
    }
    else if (str.search(/i/i) >= 0 && str.search(/f/i) >= 0) {
        arr2[0] = arr2[0].toUpperCase();
        arr[j] = arr2.join('');
    }
}

let str = "iF and And AND ano anu Iouf IF if aifod aifud";
arr = str.split(' ');
for (let i = 0; i < arr.length; i++)
    check(arr[i], arr, i);

console.log(arr.join(' '));