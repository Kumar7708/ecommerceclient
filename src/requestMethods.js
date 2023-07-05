import axios  from "axios";

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWJlMjljYzYyNGFkOGU3M2Y4ZDM3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODEzMzU1NiwiZXhwIjoxNjg4MzkyNzU2fQ.ZpwrH6aDT9vEdEAb8GbL9we20Gt2JlumpcPSW4Qcuvs"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: TOKEN},
})
