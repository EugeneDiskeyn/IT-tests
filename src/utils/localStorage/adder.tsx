const adder = (newUser: any) => {
  let usersStr = localStorage.getItem("user");
  if (typeof usersStr === "string") {
    let users = JSON.parse(usersStr);
    for (let i = 0; i < users.length; i++) {
      if (
        newUser.gmail === users[i].gmail ||
        newUser.login === users[i].login
      ) {
        return;
      }
    }
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users));
  }
};
export default adder;
