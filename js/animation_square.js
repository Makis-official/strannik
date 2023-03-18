let logo = document.querySelectorAll('#square');
//console.log(logo);
colors = ['0x3C9FA9', '0x477074', '0x5C9499'];
for(let i = 0; i < 10; i++)
{
    function changeBackground(color) {
   logo[i].style.backgroundColor = color;
}

function getRandomColor () {
  var hex = Math.floor(Math.random() * colors[1]);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

// logo[i].addEventListener('mouseenter', () => {
// 	logo[i].classList.remove('trs');
// 	changeBackground(getRandomColor());
//   setTimeout(() => {logo[i].classList.add('trs');},100);
// });

setInterval(() => {
	changeBackground(getRandomColor());
}, 1000);
}

