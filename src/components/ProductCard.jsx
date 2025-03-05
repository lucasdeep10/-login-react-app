export default function ProductCard({ product }) {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <img src={product.image} alt={product.title} className="h-40 mx-auto"/>
        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
        <p>${product.price}</p>
      </div>
    );
  }
  