// const sentence = function
// for (const char of sentence) {
//   console.log(char);
// }

const sentence = "Hello there from lighthouse labs\n";

const printOneByOne = function(sentence){
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    },i * 1000);
  }
};

printOneByOne(sentence);