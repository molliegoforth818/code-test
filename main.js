// // hard coding my string
// let preamble = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
const historicDocs = {
  preamble:
    "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.",

  gettysburg:
    "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war.",

  ihad: "Let us not wallow in the valley of despair, I say to you today, my friends.So even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. I have a dream that one day this nation will rise up and live out the true meaning of its creed: We hold these truths to be self-evident, that all men are created equal.",
};

// util function to render to the DOM
const renderToDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};
// renderToDOM("#preamble-string", preamble) no longer needed after docs addition

// // change everything to lowercase so we can only focus on the letters not the casing and removes punctuation and empty spaces AND split on the empty spaces so we can filter through the words as an array not just a str
// preamble = preamble.toLocaleLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/)
// //forgot to use split to iterate through words as an arr, kept throwing preamble.filter not a function, console.log to triple check all lowercase, no punct, and in an arr
// console.log(preamble)

// change everything to lowercase so we can only focus on the letters not the casing and removes punctuation and empty spaces AND split on the empty spaces so we can filter through the words as an array not just a str
const stripDocs = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/);

let justWords = stripDocs(historicDocs.preamble);

//animation for word count
const countAnimation = (count) => {
  const container = document.getElementById("animation-container");
  const numberAnimation = document.createElement("div");
  numberAnimation.classList.add("count-animation");
  numberAnimation.textContent = `+${count}`;
  container.appendChild(numberAnimation);
  //clear animation
  setTimeout(() => numberAnimation.remove(), 1300);
};
//handlers for button clicks
const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "starts-with-t") {
    //filter through the array and find all the strings that start with t and return the length
    const startsWithT = justWords.filter((str) => str.startsWith("t"));
    countAnimation(startsWithT.length);
    // display count and words
    return renderToDOM(
      "#result-for-t",
      `Word Count: ${startsWithT.length} <br/> Words Found: ${startsWithT.join(
        ", "
      )}`
    );
  }

  if (buttonId === "ends-with-e") {
    //filter through the array and find all the strings that ends with E and return the length
    const endsWithE = justWords.filter((str) => str.endsWith("e"));
    countAnimation(endsWithE.length);
    //count and words
    return renderToDOM(
      "#result-for-e",
      `Word Count: ${endsWithE.length} <br/> Words Found: ${endsWithE.join(
        ", "
      )}`
    );
  }
  if (buttonId === "starts-with-t-and-ends-with-e") {
    //filter through the array and find all the strings that start with t end with e and return the length
    const startsWithTAndEndsWithE = justWords.filter(
      (str) => str.startsWith("t") && str.endsWith("e")
    );
    countAnimation(startsWithTAndEndsWithE.length);
    // count and words
    return renderToDOM(
      "#result-for-t-and-e",
      `Word Count: ${
        startsWithTAndEndsWithE.length
      } <br/> Words Found: ${startsWithTAndEndsWithE.join(", ")}`
    );
  }
};

const buttonClicks = () => {
  //event listener for all button clicks
  var buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener("click", handleButtonClick);
  }
};

const switchDocs = () => {
  const selector = document.getElementById("text-selector");
    selector.addEventListener("change", function () {
      //getting the value of the selection clicked
      const key = this.value;
      // change historical doc displayed
      //left the # off this id took me 5ever to figure that out
      renderToDOM("#preamble-string", historicDocs[key]);
      //strip away punctuation, empty spaces, and casing on the dynamic doc selection
      justWords = stripDocs(historicDocs[key]);
      //clear selections
      document.getElementById("result-for-t").innerHTML = "";
      document.getElementById("result-for-e").innerHTML = "";
      document.getElementById("result-for-t-and-e").innerHTML = "";
    });
    //setting the default val on page load
    selector.dispatchEvent(new Event("change"));
};

const startApp = () => {
  //intialize button events and selections
  buttonClicks();
  switchDocs();
};

startApp();
