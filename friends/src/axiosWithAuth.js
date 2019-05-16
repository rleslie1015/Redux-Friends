import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("logInToken");
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}