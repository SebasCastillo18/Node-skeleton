const Conversations = require("../models/conversations.models");

const Users = require("../models/users.models");

const createConversation = async (conversationObj) => {
    const userGuest = await Users.findOne(conversationObj.guestId);

    if (!userGuest) return false;

    const newConversations = await Conversations.create({
        id: UUID.v4(),
        name: conversationObj.name,
        profileImage: conversationObj.profileImage,
        isGroup: conversationObj.isGroup,
    });

    await Participants.create({
        id: UUID.v4(),
        userId: conversationObj.ownerId,
        conversationId: newConversations.id,
        isAdmin: true,
    });

    await Participants.create({
        id: uuid.v4(),
        userId: conversationObj.guestId,
        conversationId: newConversations.id,
        isAdmin: false
    })

    return newConversations
}

createConversation({

})

.then(console.log)
.catch(console.log)
