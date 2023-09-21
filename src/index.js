module.exports = 
  
  function check(str, bracketsConfig) {
    let newStack = [];
    let pairsOfBrackets = bracketsConfig.reduce(((accumulator, element) => accumulator = { ...accumulator, [element[1]]: element[0]} ), {});
    let equalPairsOfBrackets = bracketsConfig.reduce(((accumulator, element) => (element[1] === element[0]) ? accumulator = { ...accumulator, [element[1]]: element[0]} : accumulator), {});

    for (let i = 0; i < str.length; i++){
      if (newStack[newStack.length - 1] === equalPairsOfBrackets[str[i]] && str[i] === equalPairsOfBrackets[str[i]]) { 
        newStack.pop();
      } else if (Object.values(pairsOfBrackets).includes(str[i])){
        newStack.push(str[i]);
      } else {
        if (newStack.length === 0) {
          return false;
        }
        if (newStack[newStack.length - 1] === pairsOfBrackets[str[i]]) {
          newStack.pop();
        } else {
          return false;
        }
      } 
    }
    return newStack.length === 0;
  }
