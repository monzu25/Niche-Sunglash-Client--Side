import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth'
import useFirebase from './useFirebase';
const useCart = () => {
    const { user } = useFirebase();
    const { uid } = user;
    const [selectedProduct, setSelectedProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart/${uid}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setSelectedProduct([]);
                }
            })
    }, []);

    const addToCart = (product, history) => {
        const isAvailable = selectedProduct.find(selected => selected._id === product._id);
        delete product._id;
        product.uid = uid;
        product.status = 'pending'

        if (isAvailable) {
            alert('Already added this item on cart.');
        }

        else {
            fetch(`http://localhost:5000/cart/add`, {
                method: 'POST',
                'content-type': 'application/json',
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const newProductList = { ...selectedProduct, product };
                        setSelectedProduct(newProductList);
                    }
                })
            history.replace('/thankyou');
        }
    }

    return {
        selectedProduct,
        addToCart,
        setSelectedProduct
    }

}

export default useCart;