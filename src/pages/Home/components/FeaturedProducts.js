import React, { useEffect, useState } from "react";
import { ProductCard } from "../../../components/Elements/ProductCard";

export const FeaturedProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await fetch("https://localhost:3001/featured_products");
//         if (!response.ok) {
//           throw new Error("Failed to fetch");
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchProducts();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   } else {
//     console.log(error)
//   }

//   return (
//     <section className="my-20">
//       <h1 className="p-4">Featured Products</h1>
//       <div className="flex flex-wrap justify-center lg:flex-row">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// };


// import { useEffect, useState } from "react"
// import { ProductCard } from "../../../components/Elements/ProductCard"

// export const FeaturedProducts = () => {
  const [ products, setProducts] = useState([]);

    useEffect(()=> {
      async function fetchProducts(){
        const response = await fetch("http://localhost:3001/featured_products");
        const data = await response.json()
        setProducts(data);
      }
      fetchProducts();
    }, []);

  return (
    <section className="my-20">
        <h1 className="p-4">sfb</h1>
        <div className="flex flex-wrap justify-center lg:flex-row">

          { products.map((product)=> (
            <ProductCard key={product.id} product={product} />
          )) }

        </div>
    </section>
  )
}

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://localhost:8000/featured_products");
//       if (!response.ok) {
//         throw new Error("Failed to fetch featured products");
//       }
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       // Handle error state if needed
//     }
//   };

//   fetchProducts();
// }, []);

// return (
//   <section className="my-20">
//     <h1 className="">Featured Products</h1>
//     <div className="flex flex-wrap justify-center lg:flex-row">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//     <ProductCard />
//   </section>
// );
// };