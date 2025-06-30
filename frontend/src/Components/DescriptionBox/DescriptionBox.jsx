import React from "react";
import './DescriptionBox.css'
const DescriptionBox = () =>{
    return (
        <div className="descriptionbox">
          <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
             <div className="description-nav-box fade">Reviews (122)</div>
          </div>
          <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform where businesses sell products or services to customers over the internet. It acts as a virtual storefront, allowing buyers to browse, select, and purchase items without needing to visit a physical store.
                In essence, an e-commerce website facilitates online transactions between buyers and sellers.</p>

                <p>
                    An e-commerce website typically displays :Product image,Product name/title,Price ,Quick “Add to Cart” or “Buy Now” button,Ratings,Filter & sort options (by price, popularity, etc.).Each product usually has it's own dedicated page with relative information.

                </p>
          </div>
        </div>
    )
}

export default DescriptionBox