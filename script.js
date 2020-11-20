//SOLUTION 1
snail = function(array) {
    let result=[];
    let tempArray = array;

    while(tempArray.length > 0){
        //pushes the top array
        tempArray[0].forEach(item => {
            result.push(item);
        });

        if(tempArray.length>1){
            //pushes the right side and the bottom (in reverse) array
            for(let i=1; i < tempArray.length; i++){
                if(i<tempArray.length-1){
                    let rowLength = tempArray[i].length;
                    result.push(tempArray[i][rowLength-1]);
                }
                else{
                    tempArray[tempArray.length-1].reverse().forEach(item => {
                        result.push(item);
                    })
                }
            };

            //pushes the remaining left side, top and bottom have been pushed already
            for(i=tempArray.length-2; i>0; i--){
                result.push(tempArray[i][0]);
                // console.log(result);
            }

            //trim the arrays
            tempArray.splice(0,1); //remove in spot 0 and only remove 1 item
            tempArray.pop(); //removes what is left at the last location
            tempArray.forEach(item => {
                item.splice(0,1);
                item.pop();
            })
        }
        else{
            tempArray.pop();
        }

        // tempArray.length=0;
    }


    console.log(result);
    return result;
}

snail([[1,2,3], 
       [4,5,6], 
       [7,8,9]]);
snail([[1,2,3,4,5],
       [6,7,8,9,10],
      [11,12,13,14,15],
      [16,17,18,19,20],
      [21,22,23,24,25]]);
      snail([[1,2,3,4,5,6],
           [7,8,9,10,11,12],
          [13,14,15,16,17,18],
          [19,20,21,22,23,24],
          [25,26,27,28,29,30],
          [31,32,33,34,35,36]]);