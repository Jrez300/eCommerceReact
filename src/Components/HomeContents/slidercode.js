

var slideIndex = 0; //defining the index as 0

export default () => (
 
function Carousel() { //creating the function that will make images changes 

  // grabs all the documents/images called mySlides and naming it x
  var x = document.getElementsByClassName("mySlides");
  var i; //variable we are using to help run function, will be defined later
  for (i = 0; i < x.length; i++) {  //variable i is defined as 0 to begin; is 'i' less than the amount of slides in "mySlides"; add 1 to variable i

    x[i].style.display = "none"; //the display property is changed to none to hide all elements of mySlides
  }

  slideIndex++; //slideIndex increases count by 1, initially declared as 0

  //RUN CONDITIONAL STATEMENT 
  if (slideIndex > x.length)  {
    slideIndex = 1} //if the slideIndex is larger than amount of slides in mySlides (4 slides), slideIndex turns into 1 

  x[slideIndex-1].style.display = "block"; // mySlides[new slideIndex - 1] display block, meaning this is the current image showing. If the statement above is true, slideIndex turns into 1, mySlide[1-1] equals 0, restarts image back at index 0.
  setTimeout(Carousel, 5000); // Change image every 7 seconds
}


)
