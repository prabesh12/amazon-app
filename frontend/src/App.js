import data from "./datalist";
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazon
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.product.map((products) => {
          return (  <div key={products._id} className="card">
              <a href={`/product/${products._id}`}>
                {/* <!-- image size: 680px x 830px --> */}
                <img className="medium" src={products.image} alt="product" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>{products.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">{products.price}</div>
              </div>
            </div>);
          })}
        </div>
      </main>
      <footer className="row center">ALl right reserved</footer>
    </div>
  );
}

export default App;
