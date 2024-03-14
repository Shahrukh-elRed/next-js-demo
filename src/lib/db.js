const { connectionusername, password } = process.env
export const connectionString = "mongodb+srv://" + connectionusername + ":" + password + "@cluster0.llzrj4o.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"
