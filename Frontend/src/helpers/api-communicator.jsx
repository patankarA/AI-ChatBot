import axios from "axios";

export const SignupUser = async (name,email,password) => {
    const res = axios.post("/user/signup",{name, email, password});

    if((await res).status != 200){
        throw new Error("Unable to Signup");
    }
    const data = (await res).data;
    return data;
}

export const loginUser = async (email, password) => {
    const res = axios.post("/user/login",{email, password});
    // console.log((await res).status);
    //issue for login is wait for some time use (await res).status
    if((await res).status != 200){
        throw new Error("Unable to login");
    }
    const data = (await res).data;
    return data;
}

export const checkAuthStatus = async () => {
    const res = axios.get("/user/auth-status");
    
    if((await res).status != 200){
        throw new Error("Unable to authenticate");
    }

    const data = (await res).data;
    return data;
}

export const sendChatRequest = async (message) => {
    const res = axios.post("/chat/new", { message });
    
    if((await res).status != 200){
        throw new Error("Unable to send chat");
    }
    const data = (await res).data;
    return data;
}

export const logoutUser = async () => {
    const res = await axios.get("/user/logout");
    if ((await res).status !== 200) {
      throw new Error("Unable to delete chats");
    }
    const data = (await res).data;
    return data;
  };