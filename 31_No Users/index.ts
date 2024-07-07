let usernames: string[] = ["Anam", "Marium", "Amna"];
usernames = []

if (usernames.length === 0) {
  console.log("We need to find some users!");
}
else{
    usernames.forEach((username) => {
        console.log(`Hello ${username}, How are you?`);
      });    
}
