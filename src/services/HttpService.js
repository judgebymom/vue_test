import axios from 'axios'

let baseURL='http://localhost:8080'
let axiosConfig={
    baseURL,
    timeout:10000
}

let instanceTap =axios.create(axiosConfig)

export default{
    getAxios:instanceTap
    // getCancelToken: axios.CancelToken
}

