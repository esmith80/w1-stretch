const args = process.argv.slice(2, process.argv.length);

for (let i = 0; i < args.length; i++) {
  let tempWord = args[i];
  args[i] = "";
  for (let j = tempWord.length - 1; j >= 0; j--) {
    args[i] = args[i] + tempWord.charAt(j);
  }
}
console.log(args);
  
