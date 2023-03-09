import axios from 'axios';
// https://ou6jqqyza5.execute-api.eu-west-3.amazonaws.com/dev
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
