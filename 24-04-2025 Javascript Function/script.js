const greet = (name) => {
    const message = "Hello! " + name ;
    return message;
  }
  
  console.log(greet("Shraddha"));
  

  const evenodd = (num1) => {
    if (num1 % 2 == 0) {
      console.log("number is even");
    } else {
      console.log("number is odd");
    }
  };
  
  evenodd(5); 

  const register = (username, password) => {
    const correctUsername = "test";
    const correctPassword = "test123";
  
    if (username === correctUsername && password === correctPassword) {
      console.log("Login successful");
    } else if (username !== correctUsername && password !== correctPassword) {
      console.log("Both username and password are incorrect");
    } else if (username !== correctUsername) {
      console.log("Username is incorrect");
    } else {
      console.log("Password is incorrect");
    }
  };
  
  register("test", "test123");     
  register("wrong", "test123");     
  register("test", "wrongpass");    
  register("wrong", "wrongpass");   
  
  