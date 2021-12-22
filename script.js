
let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];

let index = 0;

arrObj.forEach(function (){
        $("img").attr("src", arrObj[index].avatar);
        $("#info").text(arrObj[index].person + arrObj[index].age);
});

$("#precedent").click(function (){
    $("img").attr("src", arrObj[index].avatar);
    $("#info").text(arrObj[index].person + arrObj[index].age);
    index--;
});

$("#next").click(function (){
    $("img").attr("src", arrObj[index].avatar);
    $("#info").text(arrObj[index].person + arrObj[index].age);
    index++;
});

//list for Mark
let image = document.createElement('img');

    $('#div').append(image);
    $($("#dumbass").get()).attr("src", arrObj[1].avatar);
    $('.list').html(arrObj[index].person +" " + arrObj[index].age);

    //list for Bill
let image1 = document.createElement('img');

$('#div2').append(image1);
$($("#guguss").get()).attr("src", arrObj[index].avatar);
$('.list1').html(arrObj[1].person +" " + arrObj[1].age);

//list for Spencer
let image2 = document.createElement('img');

$('#div3').append(image2);
$($("#blaireau").get()).attr("src", arrObj[2].avatar);
$('.list2').html(arrObj[2].person +" " + arrObj[2].age);