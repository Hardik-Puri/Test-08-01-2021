function count_oc(str) {

   arr = str.split("");
   let c = 0, temp;

   for (let i = 0; i < arr.length; i++) {  // Checking First element

      if (arr[i] != null) {

         if (/^[a-zA-Z0-9]*$/.test(arr[i]) == false)
            arr[i] = null;

         else if (!isNaN(arr[i] * 1))
            c = c + 1;

         else if (arr[i] == arr[i].toUpperCase())
            c = c + 2;

         else if (arr[i] == arr[i].toLowerCase())
            c = c + 1;

      }
      for (let j = i + 1; j < arr.length; j++) {

         // Checking and traversing whole array with elemnet at i position
         if (arr[i] != null && arr[j] != null) {
            if (arr[i].toUpperCase() == arr[j].toUpperCase()) {

               temp = arr[j];
               if (!isNaN(temp * 1))
                  c = c + 1;

               else if (temp == temp.toUpperCase())
                  c = c + 2;

               else if (temp == temp.toLowerCase())
                  c = c + 1;

               arr[j] = null;

            }
         }
      }

      if (arr[i] != null) {
         console.log(arr[i].toLowerCase() + " = " + c);
      }
      c = 0;
   }
}

let str = "Hardik>Puri.Oal@GMAIL.COM 12345689999000";
count_oc(str);