
import './ProductCard.css';

// Reusable Product Card Component
function ProductCard(props) {
    return (
        <div className="card">

            <img src={props.image} alt={props.title} />

            <h2>{props.title}</h2>

            <p>{props.description}</p>

            <button>Buy Now</button>

        </div>
    );
}

// Main Component
function App() {
    return (
        <div className="container">

            <h1>Our Products</h1>

            <div className="product-list">

                <ProductCard
                    image="https://placehold.co/300x200?text=Laptop"
                    title="Laptop"
                    description="A powerful laptop for work and study."
                />

                <ProductCard
                    image="https://placehold.co/300x200?text=Mobile"
                    title="Mobile Phone"
                    description="A modern smartphone with great features."
                />

                <ProductCard
                    image="https://placehold.co/300x200?text=Headphones"
                    title="Headphones"
                    description="Enjoy music with high quality sound."
                />

            </div>
        </div>
    );
}

export default App;
