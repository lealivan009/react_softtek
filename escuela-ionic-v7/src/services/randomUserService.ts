//npm install axios
import axios from 'axios';

const API_URL = 'https://randomuser.me/api/'

export const getAllPerson = async (nro_resultados: string): Promise<User[]> => {
    const response = await axios.get(`${API_URL}?results=${nro_resultados}`);
    return response.data.results as User[];
};
