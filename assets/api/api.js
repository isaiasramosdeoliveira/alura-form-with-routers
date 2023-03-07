export default async function connectionAPI(status) {
    const list = await fetch("http://localhost:3000/messages")
    const messages = await list.json()
    return messages;
}