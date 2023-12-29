const adder = (newUser: any) => {
  let usersStr = localStorage.getItem("user");
  if (typeof usersStr === "string") {
    let users = JSON.parse(usersStr);
    for (let user of users) {
      if (newUser.gmail === user.gmail || newUser.login === user.login) {
        return;
      }
    }
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users));
  }
};
export default adder;
