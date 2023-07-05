function getter() {
  let f_users: any = localStorage.getItem("user");
  return JSON.parse(f_users);
}
export default getter;
