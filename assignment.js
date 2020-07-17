// <!--feetToMile section-->

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(105656)
console.log(result)

//<!-- woodCalculator section-->

function woodCalculator(chair, table, bed){
    var chairWood=chair*1
    var tableWood=table*3
    var bedWood=bed*5 
    
    var totalWood=chairWood+tableWood+bedWood;
    return totalWood;
}
   var totalWoodNeed=woodCalculator(15,5,6)
   console.log(totalWoodNeed)


// <!--brickCalculator section-->
function brickCalculator(numberOfFloor) {
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    if (numberOfFloor > 20) {
        numberOfBricks = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) + ((numberOfFloor - 20) * 10 * 1000);
}
    else if (numberOfFloor > 10) {
        numberOfBricks = (firstTenFloor * 15 * 1000) + ((numberOfFloor - 10) * 12 * 1000);
}
    else if (numberOfFloor > 0) {
        numberOfBricks = (numberOfFloor * 15 * 1000);
}
    else {
        console.log("Number of floor should be > 0");
}
    return numberOfBricks;
}
var totalBreakCount = brickCalculator(50);
console.log("Total Bricks required Should be:", totalBreakCount);

//  <!--tinyFriends section-->
function tinyFriend(names){
    var mostTiny=names[0];
    for(var i = 0; i < names.length; i++){
    var currentTiny = names[i];


    if(currentTiny.length< mostTiny.length){
        mostTiny=currentTiny;
}
   
}
return mostTiny;  
}
var tinyFriendName=tinyFriend(["sakib","apu","pu","rafi","sahida"])
console.log(tinyFriendName);