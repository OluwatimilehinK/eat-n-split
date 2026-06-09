// import { initialFriends } from "../App"
import Friend from "./Friend"

const FriendList = ({ onSelectFriend, friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend 
          key={friend.id} 
          friend={friend} 
          onSelectFriend={onSelectFriend} 
        />
      ))}
    </ul>
  )
}

export default FriendList