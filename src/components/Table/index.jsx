import products from './products';
import tableStyle from './Table.module.css';

const Table = () => {
    const productsTable = products.map(product => {
        return (
            <tr key={product.id}>
                <td>{`${product.id}`}</td><td>{`${product.name}`}</td>
                <td>{`R$${product.price.toFixed(2).replace('.', ',')}`}</td>
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