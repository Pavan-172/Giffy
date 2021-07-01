
var s=document.querySelector('input');
s.addEventListener('input',function(){
  var parent=document.querySelector('#row2');
  parent.innerHTML="";
  var search=this.value;


let myPromise = new Promise(function(myResolve, myReject) {
var request = new XMLHttpRequest();
request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=ekEhw2pU0uZxzOC1iqQB7ncD8rg9scda&q='+search+'&limit=15&offset=0&rating=g&lang=en');
request.onload = function() {
  if (request.status == 200) {
    myResolve(request.response);
  } else {
    myReject("Response rejected");
  }
};
request.send();
});

myPromise.then(function myResolve(val)
{

var giphydata=JSON.parse(val);
var giph_images=giphydata.data;
for(i=0;i<giph_images.length;i++)
{
// console.log(giph_images[i].images);
//console.log(giph_images[i].images.original.height);
//console.log(giph_images[i].images.original.size);
//console.log(giph_images[i].images.original.url);
//console.log(giph_images[i].images.original.width);

var col1=document.createElement("div");
col1.setAttribute('class','col-2 p-1');
var image=document.createElement('img');
image.setAttribute('src',giph_images[i].images.original.url);
image.setAttribute('class',"img-thumbnail");
image.setAttribute('width',giph_images[i].images.original.width);
image.setAttribute('hieght',giph_images[i].images.original.height);
col1.appendChild(image);


parent.appendChild(col1);
}
}); (function myReject(params) {
console.log(params);

})

});