import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export async function fetchAll() {

    const result = await axios.get(BASE_URL);
    console.log(result.data);

    return result.data;
}