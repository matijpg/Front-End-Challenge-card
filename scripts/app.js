let openElt = document.querySelector('.card__social--active');
let iconShare = document.querySelector('.card__share')


const open = () => {

   if(openElt.style.display==='none'){
      openElt.style.display = 'flex';
   }else {
      openElt.style.display='none';
   }
   
}

iconShare.addEventListener('click',open);