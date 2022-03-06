var arr = [
   {name:"Samandar",price:500},
   {name:"Axmad",price:900},
   {name:"Sattor",price:800},
   {name:"Ali",price:300},
]

function maxPrice (obj) {
   var max = 0
   for (var i in arr ) {
      if (arr [i].price > arr[max].price) {
         max= i
      }
   }

   console.log(arr[max].name);
}


maxPrice(arr)