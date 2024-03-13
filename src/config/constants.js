export const API_BASE_URL = process.env.NODE_ENV === "development" ?
    "https://dev.example.com" 
    :
    "https://prod.example.com"