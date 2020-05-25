import axios from 'axios';
const APIURL = 'http://localhost:3001/autocomplete'

const getAutocomplete = query => {
    return axios.get(APIURL, {
        params: {
            value_like: query
        }
    }).then(response => response.data.map(i => i.value))
}

export default { getAutocomplete }