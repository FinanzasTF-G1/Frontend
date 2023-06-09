export const CalculatorService = {
    getTotalData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Blue Band',
                description: 'Product Description',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Blue T-Shirt',
                description: 'Product Description',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Bracelet',
                description: 'Product Description',
                image: 'bracelet.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            }
        ];
    },

    getData() {
        return Promise.resolve(this.getTotalData());
    },

    editData2(id, newData) {
        const productsData = this.getTotalData();
        const productIndex = productsData.findIndex((product) => product.id === id);
        let updatedProduct;

        if (productIndex !== -1) {
            // Found the product with the specified ID
            updatedProduct = { ...productsData[productIndex], ...newData };
            productsData[productIndex] = updatedProduct;
        }

        return productsData;
    },

    editData(id, newData) {
        return new Promise((resolve, reject) => {
            const productsData = this.getTotalData();
            const productIndex = productsData.findIndex((product) => product.id === id);

            if (productIndex !== -1) {
                // Found the product with the specified ID
                const updatedProduct = { ...productsData[productIndex], ...newData };
                productsData[productIndex] = updatedProduct;
                resolve(productsData);
            } else {
                reject(new Error(`Product with ID ${id} not found.`));
            }
        });
    }
};