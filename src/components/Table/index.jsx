import products from './products';
import './Table.module.css';

const Table = () => {
    const productsTable = products.map(product => {
        return (
            <tr key={product.id}>
                <td>{`${product.id}`}</td><td>{`${product.name}`}</td>
                <td>{`${product.price}`}</td>
            </tr>
        )
    });

    return (
        <table>
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