import Button from "./Button";

const Friend = ({ friend, onSelectFriend }) => {
  if (friend.balance === 0) {
    return (
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        <p>you and {friend.name} are even</p>
        <Button onClick={() => onSelectFriend(friend)}>Select</Button>
      </li>
    );
  }

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      ) : (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      <Button onClick={() => onSelectFriend(friend)}>Select</Button>
    </li>
  );
};

export default Friend;
