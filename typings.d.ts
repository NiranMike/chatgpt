interface Message {
    text: string;
    createdAt: admin.firestore.Timestore,
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}