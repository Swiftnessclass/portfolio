let contact=document.getElementById('Contact');
let msg=document.getElementById('msg');

const scriptURL = 'https://script.google.com/macros/s/AKfycbyjWSejeVHu_TkOs0Mv08moZGsYygWt2gb_g8KQrPKLFKIsb1pCBaKvR-26kcH3ttd3CQ/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
          msg.innerHTML="message sent successfully!"
          setTimeout(function(){
            msg.innerHTML=""
          },2000)
          form.reset()
        } )
        .catch(error => console.error('Error!', error.message))
    })


const eyeball = () => {
  const eyes = document.querySelectorAll('.eye');
  
  eyes.forEach(function(eye) {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);//getBoundingClientRect()[returns the object with size and poaition]
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);//This line of code calculates the angle (in radians) between the center of an element (like an eye) and the current position of the mouse cursor, using the Math.atan2() function
    let rotation = (radian * (180 / Math.PI)*-1) +270; // Convert radians to degrees
    eye.style.transform = `rotate(${rotation}deg)`; 
  });
};

// Add event listener after the eyeball function is defined
document.querySelector('body').addEventListener('mousemove', eyeball);



let opentab=(tabName)=>{

  for(let tabLink of tabLinks){
    tabLink.classList.remove('active-link');
    event.currentTarget.classList.add('active-link');
  }
  for(let tabContents of tabContent){
    tabContents.classList.remove('active-tab');
   document.getElementById(tabName).classList.add('active-tab');
  }

}
//-----------------------------------------------------------
const coords={x:0,y:0};
const circles=document.querySelectorAll('.circle');

circles.forEach(function(circle){
    circle.x=0;
    circle.y=0;
});

window.addEventListener("mousemove",function(e){
  coords.x=e.clientX;
  coords.y=e.clientY;

  AnimateCircles();
});

    function AnimateCircles(){
circles.forEach(function(circle,index){
    circle.style.left=coords.x - 12+"px";
    circle.style.top=coords.y - 12+"px";
 

});
    }