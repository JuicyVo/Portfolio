const body = document.getElementById('body');
const headPiece = document.getElementById('headPiece');
const head = document.querySelector('.head');

document.addEventListener('mousemove', (e)=> {

  // console.log(e)
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const headRect = headPiece.getBoundingClientRect();


  
  const headCenterX = headRect.left + headRect.width / 2;
  const headCenterY = headRect.top + headRect.height / 2;

  // const angle = Math.atan2(mouseY - headCenterY, mouseX - headCenterX) * (180 / Math.PI);
  // headPiece.style.transform = `rotate(${angle}deg)`;
  console.log("headCenter" + headCenterX);
 


  if (mouseX < headCenterX) {
    headPiece.classList.add('flipped');
    const angle = Math.atan2(headCenterY - mouseY, headCenterX - mouseX) * (180 / Math.PI);
    headPiece.style.transform = `rotate(${angle}deg)`;

    
  } else {
    headPiece.classList.remove('flipped');
    const angle = Math.atan2(mouseY - headCenterY, mouseX - headCenterX) * (180 / Math.PI);
    headPiece.style.transform = `rotate(${angle}deg)`;
  }

});