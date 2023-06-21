const sentence = "hello there from lighthouse labs";

const delay = 50; // Delay between each character (in milliseconds)

const animateSentence = function(sentence) {
  let delayTime = 0;

  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delayTime);
    delayTime += delay;
  }

  // Add a newline character at the end
  setTimeout(() => {
    process.stdout.write("\n");
  }, delayTime);
};

animateSentence(sentence);
