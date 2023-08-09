const Card = ({products}) => {
    return (
        <div>
            {
                products.map(product => {
                    return(
                        <div key={product.id}>
                            <img src={product.image} alt="" />
                            <h1>{product.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;