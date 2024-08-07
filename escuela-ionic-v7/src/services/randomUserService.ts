// Importa la librería Axios para realizar peticiones HTTP.
//npm install axios
import axios from 'axios';

// Define la URL base para la API que se va a utilizar.
const API_URL = 'https://randomuser.me/api/';

// Define una función asíncrona para obtener una lista de usuarios desde la API.
// Recibe el número de resultados deseados como parámetro.
export const getAllPerson = async (nro_resultados: string): Promise<User[]> => {
    // Realiza una petición GET a la API con el número de resultados especificado.
    // La URL de la petición se construye añadiendo el parámetro de resultados a la URL base.
    const response = await axios.get(`${API_URL}?results=${nro_resultados}`);

    // Extrae los datos de la respuesta y los convierte al tipo User[].
    // La respuesta de la API contiene un objeto con una propiedad "results" que es un array de usuarios.
    return response.data.results as User[];
};
