import UserList from "../components/UsersList";

const USERS = [
  {
    id: "u1",
    name: "Marcus",
    image: "https://avatars.githubusercontent.com/u/21961399?v=4",
    places: 3,
  },
];

const Users = () => {
  return <UserList items={USERS} />;
};

export default Users;
