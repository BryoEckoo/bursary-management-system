import axios from 'axios';
// import router from '../router';

const state = {

};

const getters = {

};

const actions = {
//login action
async login({
    commit
},) {
    commit('auth_request');
    let res = await axios.post('/http://localhost:4000/users/login')
    if(res.data.success){
        const token = res.data.token;
        const user = res.data.user;
        //store the token into the localStorage
        localStorage.setItem('token', token);
        //set the axios defaults
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token, user);
    }
    return res;
}
};

const mutations = {
auth_request(state){
    state.status = 'loading'
},
auth_success(state, token, user){
    state.token = token
    state.user = user
    state.status = 'success'
}
};

export default {
    state,
    actions,
    mutations,
    getters
};
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
// import axios from 'axios';

// const Api = axios.create({
//   baseURL: 'http://localhost:5000/user/',
// });

// export default {
//     loadUserCollection(credentials) {
//     return Api.post('register', credentials);
//   },
// };
