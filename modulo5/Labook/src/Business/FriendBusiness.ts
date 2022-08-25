import FriendData from "../Data/FriendData";
import { friend } from "../model/Friend";

export class FriendBusiness {
    
    createFriend = async (friend: friend) => {

        if (!friend.userFollow || !friend.userFollowed) {
            throw new Error("Por gentileza verifique se existe a amizade!")
        }
        const data = new FriendData()
        const friends = await data.newFriend(friend.userFollow, friend.userFollowed)
            
        return friends
        
    }
}