import { useEffect, useState } from 'react';
import products from './products';
import tableStyle from './Table.module.css';

const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formattedPrice;
}

const Table = () => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const prices = products.map(product => product.price);
        const totalPrice = prices.reduce((sum, price) => {
            return sum + price;
        });

        setTotal(totalPrice);
    }, []);

    const productsTable = products.map(product => {
        return (
            <tr key={product.id}>
                <td>{`${product.id}`}</td>
                <td>{`${product.name}`}</td>
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
                <tr>
                    <td colSpan="2"><b>Total</b></td>
                    <td><b>{formatPrice(total)}</b></td>
                </tr>
            </tbody>
        </table>
    )
};

export default Table;