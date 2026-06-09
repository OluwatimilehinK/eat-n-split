import { useState, useEffect } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [addFriendFormData, setAddFriendFormData] = useState({
    name: "",
    image: "",
    balance: 0
  })
  // const [storedFriends, setStoredFriends] = useState([])
  const [storedFriends, setStoredFriends] = useState(() => {
  const saved = localStorage.getItem("friends");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("friends", JSON.stringify(storedFriends));
}, [storedFriends]);

  const handleAddFriend = (e) => {
    e.preventDefault();
    const newFriend = {
      id: crypto.randomUUID(),
      name: addFriendFormData.name,
      image: addFriendFormData.image || `https://i.pravatar.cc/48?u=${addFriendFormData.name}`,
      balance: addFriendFormData.balance
    }
      setStoredFriends((prevFriends) => [...prevFriends, newFriend]);
    
      setAddFriendFormData({
        name: "",
        image: "",
        balance: 0
      })
    console.log(newFriend)
  }

  const handleSplitBill = (value) => {
  setStoredFriends((friends) =>
    friends.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + value }
        : friend
    )
  );
  setSelectedFriend(null);
};


  return (
    <div className="app">
      <div className="sidebar">
        <FriendList onSelectFriend={setSelectedFriend} friends={storedFriends} />
        {showAddFriend && <FormAddFriend onSubmit={handleAddFriend} formData={addFriendFormData} setFormData={setAddFriendFormData} />}
        <Button onClick={() => setShowAddFriend(!showAddFriend)}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;