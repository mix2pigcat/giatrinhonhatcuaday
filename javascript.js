let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2= [7, 12, 6, 9, 20, 56, 89]
let arr3= []
let arr4= [0, 0, 0, 0, 0, 0]
let min1 = minArray(arr1);
let min2 = minArray(arr2);
let min3 = minArray(arr3);
let min4 = minArray(arr4);
alert(min1);
alert(min2);
alert(min3);
alert(min4);
function minArray(arr){
    let min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}