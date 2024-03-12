"use client"

const ProductPrice = ({ price }) => {
  return (
    <div>
        <button onClick={() => alert(price)}>Check Price</button>
    </div>
  )
}

export default ProductPrice