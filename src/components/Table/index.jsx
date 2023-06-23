import products from './products';
import tableStyle from './Table.module.css';

const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimunFractionDigits: 2
    });

    return formattedPrice;
}

const Table = () => {
    const productsTable = products.map(product => {
        return (
            <tr key={product.id}>
                <td>{`${product.id}`}</td><td>{`${product.name}`}</td>
                <td>{formatPrice(product.price)}</td>
            </tr>
        )
    });

    return (
        <table className={tableStyle.products_table}>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome do produto</th>
                    <th>Preço unitário</th>
                </tr>
            </thead>
            <tbody>
                {productsTable}
            </tbody>
        </table>
    )

};

export default Table;