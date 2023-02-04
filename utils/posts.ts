import axios from 'axios';

export async function fetchAllPost() {
    const result = await axios.get(`${process.env.BASE_URL}posts.json`);
    return result.data;
}