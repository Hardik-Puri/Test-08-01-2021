 function strin_conv(a) {
    
    var arr = a.split("");

    // First 2 conditions
    for(var j=0; j<arr.length; j++){
        arr[j] = parseInt(arr[j]);
        if(j%2 == 0){
          if (arr[j] == 0)
            arr[j] = null;
        }
        
        if(j%2!=0){
            if(arr[j] == 2)
            arr[j] = 0;
        }
    }
    
    var arr2 = arr.join('');
    arr2 = arr2.split("");
    
    
    // 3rd condition Reducing Zeros
    for(var i=1; i<arr2.length; i++){
        
        if(arr2[i] == "0" && arr2[i-1] == "0")
        arr2[i-1] = null; 

    }

    
    // 4th Condition Human readable format
    var rlen = 0;
    for(var x = 0;x<arr2.length; x++){
        if(x>0 && x % 3 == 0)
        rlen = rlen + 1 ;
    }     //rlen stores number of commas we need to include
    
     len = arr2.length + rlen;  // Length of nerw string including commas
     var arr3 = [];
     var c = 1;
     var x = 1;

    for(let z = 0;z<len;z++){

        if(x%4==0 && x>1)
            arr3[z] = "," ;        
        else{
          arr3[z] = arr2[arr2.length-c];
          c = c+1;
        }

        x = x+1;
    }

   arr3.reverse();
   arr3 = arr3.join("");
   
   console.log(arr3);

} 
        
 var str = "00064833255500543076233434343400";
 strin_conv(str);


