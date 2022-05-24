var json = [{
    "Name" : "Divya", 
    "Qualification"   : "MCA",
    "Phone" : "9393939393",
    "Mail": "sdivya979@gmail.com"
},
{
    "Name" : "Vignesh", 
    "Qualification"   : "BE",
    "Phone" : "9494949494",
    "Mail": "vicky1234@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.Name);
    console.log(obj.Qualification);
    console.log(obj.Phone);
    console.log(obj.Mail);

}
//for Each
json.forEach(function(obj) { 
    console.log(obj.Name); 
    console.log(obj.Qualification);
    console.log(obj.Phone);
    console.log(obj.Mail);

});

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].Name);
  console.log(json[key].Qualification);
  console.log(json[key].Phone);
  console.log(json[key].Mail);
}
}
//for Of
let text ="";
for (let x of json[key].Name) {
 text += x; 

}
 console.log(text);
