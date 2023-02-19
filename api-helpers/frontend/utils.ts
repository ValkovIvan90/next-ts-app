import axios from "axios";
import { DEFAULT_API_URI } from "../../contants";

export const getAllBlogData = async () => {
    const res = await axios.get(DEFAULT_API_URI);

    if (res.status !== 200) {
        return new Error("Internal Server Error!");
    }

    return await res.data;
};