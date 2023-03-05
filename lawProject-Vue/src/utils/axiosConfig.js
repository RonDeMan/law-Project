import axios from 'axios';
const baseURL = process.env.NODE_ENV === "development"
? "http://localhost:4000/"
: "http://lawproject.ben-israel.com/"

const app = axios.create({
  baseURL,
  withCredentials: true,
})

app.interceptors.response.use(
response => (response), 
error => (Promise.reject(error.response.data.err))
)

export default app;
