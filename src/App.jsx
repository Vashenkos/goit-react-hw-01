// import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
// import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./assets/userData.json";
import friends from "./assets/friends.json";
import "./App.css";

function App() {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory />
    </div>
  );
}

export default App;
