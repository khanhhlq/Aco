module.exports = (client) => {
    console.log("Bot đã sẵn sàng hoạt động ✅")
    client.user.setPresence(
        {
            activities: [{ 
                name: 'Chào cc nhé 🐞',
                type: 'STREAMING'
            }], 
            status: "dnd" 
        }
    )
}