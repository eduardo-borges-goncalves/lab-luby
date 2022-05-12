import axios from "axios"
import Cookies from "js-cookie"

const instance = axios.create({
    baseURL: "https://autoluby.k8s.luby.me", 
})

instance.interceptors.request.use(
    async (config:any) =>  {
        config.url = `${instance.defaults.baseURL}${config.url}`

        const AUTH_TOKEN = Cookies.get('access_token');
        if (AUTH_TOKEN) config.headers['Authorization'] = `bearer ${AUTH_TOKEN}`;
        
        return config
    }, error => Promise.reject(error)
)


export default instance