var link = document.querySelector('.feedback-link');
var popup = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal-close');

var loginName = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]');

var form = popup.querySelector('form');

var storage = localStorage.getItem("login");

//конструкция для проверки возможности работы с localStorage

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("loginName");
} catch (err) {
	isStorageSupport = false;
}


link.addEventListener("click", function (event) {
	event.preventDefault();	

	popup.classList.add('modal-visible');
	
	if(storage) {
		loginName.value = storage;
		email.focus();
	} else {				
		loginName.focus();
	}	
});

close.addEventListener("click", function (event) {
	event.preventDefault();	

	popup.classList.remove('modal-visible');
	popup.classList.remove("modal-error");	
});

form.addEventListener("submit", function(event) {	

	if(!loginName.value || !email.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
      	popup.classList.add("modal-error");
	} else {
		if(isStorageSupport) {
			localStorage.setItem("name", loginName.value);
		}
	}
});

window.addEventListener("keydown", function(event){
	if(event.keyCode === 27) {
		
		if (popup.classList.contains('modal-visible')) {
			event.preventDefault();

			popup.classList.remove('modal-visible');
			popup.classList.remove("modal-error");
		}
	}
});