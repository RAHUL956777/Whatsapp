import axios from "axios";

const url = `http://localhost:8000`;

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("Error while addUser api", error.message);
  }
};

export const getUsers = async () => {
  try {
    let responce = await axios.get(`${url}/users`);
    console.log(responce);
    return responce.data;
  } catch (error) {
    console.log("Error while calling getUsers api", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation api", error.message);
  }
};

export const getConversation = async (data) => {
  try {
    let responce = await axios.post(`${url}/conversation/get`, data);
    return responce.data;
  } catch (error) {
    console.log("Error while calling getConversation api", error.message);
  }
};
