const conversationControllers = require("./conversations.controllers");

const postNewConversation = (req, res) => {
    const { guestId, name, profileImage, isGroup } = req.body;
    const ownerId = req.user.id;
    conversationControllers
        .createConversation({ ...conversationObj, ownerId })
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Guest ID not exists" });
            }

            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json({ err: err.message });
        });
};
