// hard coding my string
let preamble = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."

// util function to render to the DOM
const renderToDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};
renderToDOM("#preamble-string", preamble)

// change everything to lowercase so we can only focus on the letters not the casing and removes punctuation and empty spaces AND split on the empty spaces so we can filter through the words as an array not just a str
preamble = preamble.toLocaleLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/)
//forgot to use split to iterate through words as an arr, kept throwing preamble.filter not a function, console.log to triple check all lowercase, no punct, and in an arr
console.log(preamble)

const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "starts-with-t") {

     //filter through the array and find all the strings that start with t and return the length
     const startsWithT = preamble.filter((str) => str.startsWith("t"));
     
     // display count and words
    return renderToDOM("#result-for-t", `Word Count: ${startsWithT.length} <br/> Words Found: ${startsWithT.join(", ")}`);
  }
  
  if (buttonId === "ends-with-e") {

    //filter through the array and find all the strings that ends with E and return the length
    const endsWithE = preamble.filter((str) => str.endsWith("e"));

    //count and words
    return renderToDOM("#result-for-e", `Word Count: ${endsWithE.length} <br/> Words Found: ${endsWithE.join(", ")}`);
  }
    if (buttonId === "starts-with-t-and-ends-with-e") {

     //filter through the array and find all the strings that start with t end with e and return the length
     const startsWithTAndEndsWithE = preamble.filter((str) => str.startsWith("t") && str.endsWith("e"));
     
     // count and words
    return renderToDOM("#result-for-t-and-e", `Word Count: ${startsWithTAndEndsWithE.length} <br/> Words Found: ${startsWithTAndEndsWithE.join(", ")}`);
  }

};

const buttonClicks = () => {

  //event listener for all button clicks
  var buttons = document.querySelectorAll("button");
  for( const button of buttons){
     button.addEventListener("click", handleButtonClick);
  }
};

const startApp = () => {
  //intialize button events
  buttonClicks();
};

startApp();




