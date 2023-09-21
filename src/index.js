module.exports = 
  
  function check(str, bracketsConfig) {
    let newStack = [];
    let bracketsPairs = bracketsConfig.reduce(((acc, el) => acc = { ...acc, [el[1]]: el[0]} ), {});
    let equalBracketsPairs = bracketsConfig.reduce(((acc, el) => (el[1] === el[0]) ? acc = { ...acc, [el[1]]: el[0]} : acc), {});

    for (let i = 0; i < str.length; i++){
      if (newStack[newStack.length - 1] === equalBracketsPairs[str[i]] && str[i] === equalBracketsPairs[str[i]]) { 
        newStack.pop();
      } else if (Object.values(bracketsPairs).includes(str[i])){
        newStack.push(str[i]);
      } else {
        if (newStack.length === 0) {
          return false;
        }
        if (newStack[newStack.length - 1] === bracketsPairs[str[i]]) {
          newStack.pop();
        } else {
          return false;
        }
      } 
    }
    return newStack.length === 0;
  }
