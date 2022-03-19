import { nanoid } from 'nanoid';

const createChats = (i) => ({
 id: nanoid(),
 name: `name${i}`
})

export const CHATS = Array.from({length:5}).map((_, i) => createChats(i));