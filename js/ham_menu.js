burger = document.querySelector('.burger')

navlist = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
	navlist.classList.toggle('v-class');
})