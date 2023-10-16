//import Api from '@/services/Api'
/*import axios from 'axios';
const url = 'http://localhost:5000/user/';

class AuthenticateService {
    static insertUser(text) {
        return axios.post(url, {
            text
        });
    }
}*/

//export default AuthenticateService;

/*import axios from 'axios'

export default () =>{
    return axios.create({
        baseURL:'http://localhost:3000/'
    })
}


export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}*/
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:5000/user/',
});

export default {
    loadUserCollection(credentials) {
    return Api.post('register', credentials);
  },
};
