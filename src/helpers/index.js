import { nanoid } from "nanoid";

export const compareById = (targetId) => (item) => item.id === targetId;

export const createMessage = (author, text) => ({
  author,
  text,
  id: nanoid(),
});

export const chat = {
  id: nanoid(),
  name: "open_chat",
};

const createChats = (i) => ({
  id: nanoid(),
  name: "open_chat",
});

export const CHATS = Array.from({ length: 5 }).map((_, i) => createChats(i));

export const newId = nanoid();
