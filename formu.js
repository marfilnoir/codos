var inputs = document.getElementsByClassName('formu__input');
for (var e=0; e<inputs.length; e++) {inputs[e].addEventListener('keyup', function()
{if(this.value.length>=1) {this.nextElementSibling.classList.add('sequeda');}
else {this.nextElementSibling.classList.remove('sequeda');}
});
}