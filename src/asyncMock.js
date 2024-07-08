import {React, useEffect, useState} from 'react'

const PRODUCTS=[
	{
		"id":1,
		"category":"notebook",
		"title":"Calus",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " , 
		"img": "https://rukminim1.flixcart.com/image/416/416/jrxtea80/laptop-skin-decal/s/d/t/mcbk-gw11996-printed-destiny-2-skin-top-gadgets-wrap-13-original-imafdkmmqkfvphjh.jpeg?q=70",
		"price":1000,
		"stock":10
	},
{
	"id":2,
	"category":"notebook",
	"title":"Zabala",
	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", 
	"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7J56b6VP8qQpumBO3vYIadmuAkc7aiBxaw&usqp=CAU",
	"price":2000,
	"stock":5
},
{
	"id":3,
	"category":"notebook",
	"title":"Ikora",
	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " , 
	"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrFrieLImoivy6RyT8Uo0E9JJbwXdh9vFbK6VotJUlXwwW8sNDW9jSJK28k-lRpy_LLc&usqp=CAU",
	"price":1000,
	"stock":8
},
{
	"id":4,
	"category":"tablet",
	"title":"Ghaul",
	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", 
	"img": "https://ih1.redbubble.net/image.4905772123.1475/mwo,x540,ipad_2_snap-pad,600x600,f8f8f8.u1.jpg",
	"price":2000,
	"stock":11
},
{
	"id":5,
	"category":"celular",
	"title":"Cayde",
	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", 
	"img": "https://canary.contestimg.wish.com/api/webimage/607c86f9f430bd5e00f0e9be-large.jpg?cache_buster=b3875832bb88d49ddab72075169129e1",
	"price":2000,
	"stock":9
},
{
	"id":6,
	"category":"celular",
	"title":"Rahool",
	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", 
	"img": "https://ae03.alicdn.com/kf/H3badf3430f4b4ce7aa3f91a2a029c50cE.jpg",
	"price":2000,
	"stock":14
},
{
	"id":7,
	"category":"celular",
	"title":"Eramis",
	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", 
	"img": "https://canary.contestimg.wish.com/api/webimage/5f71fa7d58567c5f3a97c97f-large.jpg?cache_buster=38600c5da7a23eecdfa1a230ce21d154",
	"price":2000,
	"stock":11
},
{
	"id":8,
	"category":"celular",
	"title":"Nokris",
	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", 
	"img": "https://canary.contestimg.wish.com/api/webimage/5f9fed8334daceb28ff01ec3-large.jpg?cache_buster=2e749519355f7ce4576853959f5603ce",
	"price":2000,
	"stock":3
},
{
	"id":9,
	"category":"tablet",
	"title":"Atheon",
	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", 
	"img": "https://ih1.redbubble.net/image.4844174462.3370/mwo,x540,ipad_2_snap-pad,600x600,f8f8f8.jpg",
	"price":2000,
	"stock":6
},
{
	"id":10,
	"category":"tablet",
	"title":"Xur",
	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", 
	"img": "https://ih1.redbubble.net/image.4730467754.9824/mwo,x540,ipad_2_snap-pad,600x600,f8f8f8.u1.jpg",
	"price":2000,
	"stock":19
}
]

let SUPPLIERS = [
	{
	  id: 1,
	  name: "Proveedor 1",
	  phone: "123456789",
	  email: "proveedor1@example.com",
	  category: "notebook",
	},
	{
	  id: 2,
	  name: "Proveedor 2",
	  phone: "987654321",
	  email: "proveedor2@example.com",
	  category: "celular",
	},
	{
	  id: 3,
	  name: "Proveedor 3",
	  phone: "456789123",
	  email: "proveedor3@example.com",
	  category: "tablet",
	},
  ];
  
  export const getSuppliers = () => {
	return new Promise((resolve) => {
	  setTimeout(() => resolve(SUPPLIERS), 300);
	});
  };
  
  export const getSupplierById = (supplierId) => {
	return new Promise((resolve) => {
	  setTimeout(() =>
		resolve(SUPPLIERS.find((sup) => sup.id === parseInt(supplierId))), 400);
	});
  };

export const getProduct =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(PRODUCTS))
    },300)
}

export const getProductById =(productId)=>{

    return new Promise((resolve)=>{
        setTimeout(()=>resolve(PRODUCTS.find(prod=>prod.id=== parseInt(productId))))
    },400)
}

export const getProductsByCategory =(category)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(PRODUCTS.filter((prod)=>prod.category===category))
        },500)
    })
}


  export const addSupplier = (supplier) => {
	return new Promise((resolve) => {
	  const newSupplier = { id: SUPPLIERS.length + 1, ...supplier };
	  SUPPLIERS.push(newSupplier);
	  setTimeout(() => resolve(newSupplier), 300);
	});
  };
  
  export const updateSupplier = (id, updatedSupplier) => {
	return new Promise((resolve) => {
	  SUPPLIERS = SUPPLIERS.map((supplier) =>
		supplier.id === id ? { ...supplier, ...updatedSupplier } : supplier
	  );
	  setTimeout(() => resolve({ id, ...updatedSupplier }), 300);
	});
  };
  
  export const deleteSupplier = (id) => {
	return new Promise((resolve) => {
	  SUPPLIERS = SUPPLIERS.filter((supplier) => supplier.id !== id);
	  setTimeout(() => resolve(id), 300);
	});
  };
  

const categories = ["notebook", "celular", "tablet"]

const Container = ({ children }) => (
	<div style={{ width: 1170, margin: "30px auto" }}>{children}</div>
)

export const OptionList = () => {
	const { products, selectValue, changeSelect } = useList(PRODUCTS)

	return (
		<Container>
			<h1>Producto</h1>
			<select value={selectValue} onChange={changeSelect}>
				<option value="all">TODOS</option>
				{categories.map(category => (
					<option value={category}>{category}</option>
				))}
			</select>
			{!products?.length ? (
				<div>Loading...</div>
			) : (
				products.map(prod => (
					<div key={prod.id}>
						{(prod.title)} - {prod.category}
					</div>
				))
			)}
		</Container>
	)
}

export const useList = productList => {
	const [products, setProduct] = useState([])
	const [renderProducts, setRenderProducts] = useState([])
	const [selectValue, setSelectValue] = useState("")

	useEffect(() => {
		const productPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productList)
			}, 2000)
		})
		productPromise.then(result => {
			setProduct(result)
			setRenderProducts(result)
		})
	}, [productList])

	const changeSelect = event => {
		setSelectValue(event.target.value)
		if (event.target.value === "Productos") {
			setRenderProducts(products)
		} else {
			const newProductList = products.filter(
				products => products.category === event.target.value
			)
			setRenderProducts(newProductList)
		}
	}

	return { products: renderProducts, selectValue, changeSelect }
}
