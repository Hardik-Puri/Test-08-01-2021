// Utility function to indent html tags given as input in 1 line
function indent(arr) {
     let str = ' ';
     var c = 0;
     console.log(arr[0]);
     for (let i = 1; i < arr.length; i++) {

          if (arr[i - 1].search("/") < 0 && arr[i].search("/") < 0) {
               c = c + arr[i].length;
               for (let i = 0; i < c; i++)
                    process.stdout.write(str);
               console.log(arr[i]);
          }

          else if (arr[i - 1].search("/") < 0 && arr[i].search("/") >= 0) {
               for (let i = 0; i < c; i++)
                    process.stdout.write(str);
               console.log(arr[i]);
          }


          else if (arr[i - 1].search("/") >= 0 && arr[i].search("/") < 0) {
               for (let i = 0; i < c; i++)
                    process.stdout.write(str);
               console.log(arr[i]);
          }

          else if (arr[i - 1].search("/") >= 0 && arr[i].search("/") >= 0) {
               c = c - arr[i].length + 1;
               for (let i = 0; i < c; i++)
                    process.stdout.write(str);
               console.log(arr[i]);
          }

          else {
               c = c + arr[i + 1];
               for (let i = 0; i < c; i++)
                    process.stdout.write(str);
               console.log(arr[i]);
          }

     }

}

var str = "<html><head><title></title></head><body><div><h1></h1></div></body></html>";


var temp, temp2;
var arr = [], i = 0;
while (i < str.length) {
     temp = str.search("<");
     temp2 = str.search(">");
     arr[i] = str.slice(temp, temp2 + 1);
     str = str.slice(temp2 + 1);
     if (str == "</html>")
          arr[i + 1] = str;
     //  temp = temp2;
     //  temp2 = null;  
     i++;
}

indent(arr);

console.log(arr);