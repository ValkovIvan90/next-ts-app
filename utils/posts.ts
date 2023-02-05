import axios from 'axios';

export async function fetchAllPost() {
    const result = await axios.get(`${process.env.BASE_URL}posts.json`);
    return result.data;
}
export async function fetchAllComments() {
    const result = await axios.get(`${process.env.BASE_URL}blogs.json`);
    return result.data;
}