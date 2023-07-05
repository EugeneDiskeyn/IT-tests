function adder(newUser: object) {
  let usersStr = localStorage.getItem("user");
  if (typeof usersStr === "string") {
    let users = JSON.parse(usersStr);
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users));
  }
}
export default adder;
