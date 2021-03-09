function compare(object_1, object_2) {

    for (let i in object_1) {

        if (i, object_2[i] != undefined) {

            if (object_1[i] != object_2[i]) {
                if (i == 'topping')
                    break;

                else
                    console.log(i + ": " + object_1[i] + " Changed to " + object_2[i]);
                // console.log(" ");
            }
        }
        if (object_2[i] == undefined) {
            if (i == 'batters')
                console.log(i + ": Has been deleted");

            else
                console.log(i + ": " + object_1[i] + " Has been deleted");
            // console.log(" ");
        }
    }
}

var object_1 = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters": {
        "batter": [
            { "id": "1001", "type": "Regular" },
            { "id": "1002", "type": "Chocolate" },
            { "id": "1003", "type": "Blueberry" },
            { "id": "1004", "type": "Devil's Food" }
        ]
    },
    "topping": [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
    ]
}

var object_2 = {
    "id": "00368",
    "type": "salad",
    "name": "Fruit Salad",
    "veggies": [
        { "id": "a", "type": "Tomato" },
        { "id": "b", "type": "Potato" }
    ],
    "topping": [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5007", "type": "Mayonnaise" },
    ]
}

console.log("");
console.log("Object 2 has been updated as follows:-");
compare(object_1, object_2);
let c = 0, len;

// Compare and prints Veggies
for (let i in object_1.batters) {
    for (let j in object_2) {
        if (i != j && Array.isArray(object_2[j]) == true && c < 1) {
            console.log("");
            console.log(j + " Has been added to object 2 its value are :- ");
            len = object_2[j].length;
            var arr = object_2[j];
            for (let z = 0; z < len; z++) {
                console.log(arr[z]); // Prints in object format

                // Uncomment to print individually like :- id: a   type: Tomato
                //  for(x in arr[z]){
                //      console.log(x + " : " + arr[z][x]);
                //  }

                c = c + 1;
            }
        }
    }
}

console.log("");
console.log("Comparing topping in both objects we get Object 2 has been updated as follows:-");
let str = "Has been deleted";
for (let i in object_1.topping) {
    if (object_2.topping[i] != null){
       
        compare(object_1.topping[i], object_2.topping[i]);
    
    }
    else {
        console.log("");
       console.log(object_1.topping[i]);
       console.log(str);
    }
}