import connectionAPI from "../../api/api.js";
import User from "../models/User.js";

export default async function loadMessages(state, dice) {
    try {
        if (state === true) {
            User.createMessages(dice);
        }else{
            const messages = await connectionAPI()
            User.createMessages(messages);
        }
    } catch (err) {
        throw new Error(err)
    }
}
loadMessages();

