const memo = (fn) => {
    let savedArgs = null;
    let result = null;
    return function(...arg) {
          const shouldShowSaved = savedArgs ? arg.every((val, i) => val === savedArgs[i] ) : false;
  
           if(!shouldShowSaved) {
              savedArgs = arg;
              result = fn(...arg);
           }
           return result;
      
    }
  }
  
  //   USAGE

//   const func = (arg1, arg2) => {
//     return arg1 + arg2
//   }
  
//   const memoed = memo(func);
  
//   console.log(memoed(1, 2));
//   // 3, func is called
  
//   console.log(memoed(1, 2)); 
//   // 3 is returned right away without calling func
  
//   console.log(memoed(1, 3));
//   // 4, new arguments, so func is called