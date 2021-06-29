import axios from "axios";

export const subscriptionsDAL = async () => {
    const data = await axios.get('https://localhost:8080/initData')
    return data
}