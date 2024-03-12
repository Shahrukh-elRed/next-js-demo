import ProductPrice from "./productprice";

const serverProductList = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}

const ServerProduct = async () => {
    let products = await serverProductList();

    return (
        <div>
            <h1>Product List fetched using Server Component</h1>
            {
                products.map((item) => 
                    <div key={item.id}>
                        <h3>Name : {item.title}</h3>
                        <ProductPrice price={item.price}/>
                    </div>
                )
            }
        </div>
    )
}

export default ServerProduct