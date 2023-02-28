// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi';
import admin from "firebase-admin";
import { adminDb } from '../../firebaseAdmin';


type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const { prompt, chatId, model, session } = req.body;
    if(!prompt){
        res.status(400).json({answer: "Please provide a prompt"});
        return;
    }

    if(!chatId){
        res.status(400).json({ answer: "Please provide a valid chat ID"})
        return;
  }


   // Retrieve previous messages
  // const messages: string[] = await adminDb.collection('users')
  //   .doc(session?.user?.email)
  //   .collection('chats')
  //   .doc(chatId)
  //   .collection('messages')
  //   .orderBy('createdAt', 'desc')
  //   .limit(100) // change the limit to the number of previous messages to include in the context
  //   .get()
  //   .then(querySnapshot => {
  //     const messages:string[] = [];
  //     querySnapshot.forEach(doc => {
  //       messages.push(doc.data().text);
  //     });
  //     return messages.reverse();
  //   });

  

  // Build context from previous messages
  // const context = messages.join('\n');

  // Chat Query
  const response = await query(prompt, chatId, model)

  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: 'https://links.papareact.com/89k'
    },
  };

  await adminDb.collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message)

    res.status(200).json({ answer: message.text })
}
