import React, { useState } from 'react';
import './ProductPage.css';
import Body from './Body.jsx';
import data from '../FE_0B/assets/product.json';
import img1 from '../FE_0B/assets/image-product-1.jpg';
import img2 from '../FE_0B/assets/image-product-2.jpg';
import img3 from '../FE_0B/assets/image-product-3.jpg';
import img4 from '../FE_0B/assets/image-product-4.jpg';
import thumb1 from '../FE_0B/assets/image-product-1-thumbnail.jpg';
import thumb2 from '../FE_0B/assets/image-product-2-thumbnail.jpg';
import thumb3 from '../FE_0B/assets/image-product-3-thumbnail.jpg';
import thumb4 from '../FE_0B/assets/image-product-4-thumbnail.jpg';

export default function ProductPage({ onAddToCart }) {
  const { title, description, price, isOnSale, saleOff } = data.product;
  const [idx, setIdx] = useState(0);
  const [light, setLight] = useState(false);

  const imgs = [img1, img2, img3, img4];
  const ths = [thumb1, thumb2, thumb3, thumb4];

  const next = () => setIdx(i => (i + 1) % imgs.length);
  const prev = () => setIdx(i => (i - 1 + imgs.length) % imgs.length);

  const final = isOnSale
    ? (price * (1 - saleOff / 100)).toFixed(2)
    : price.toFixed(2);

  return (
    <div className="product-page-container container">
      {/* Gallery */}
      <div className="gallery">
        {light && (
          <div className="lightbox" onClick={() => setLight(false)}>
            <button className="close-lightbox">&times;</button>
            <img src={imgs[idx]} className="lightbox-img" />
            <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev() }}>&larr;</button>
            <button className="lightbox-next" onClick={e => { e.stopPropagation(); next() }}>&rarr;</button>
          </div>
        )}
        <img src={imgs[idx]} className="main-img" onClick={() => setLight(true)} />
        <div className="thumb-row">
          {ths.map((s, i) =>
            <img
              key={i} src={s}
              className={`thumb ${i === idx ? 'active' : ''}`}
              onClick={() => setIdx(i)}
            />
          )}
        </div>
      </div>

      {/* Details */}
      <div className="details">
        <h2 className="company">PERSEVERE</h2>
        <h1 className="title">{title}</h1>
        <p className="desc">{description}</p>
        <div className="pricing">
          <span className="current-price">${final}</span>
          {isOnSale && (
            <>
              <span className="badge">{saleOff}%</span>
              <span className="orig-price">${price.toFixed(2)}</span>
            </>
          )}
        </div>
        <Body onAddToCart={qty => onAddToCart(
          { name: title, price: parseFloat(final), thumbnail: ths[idx] },
          qty
        )} />
      </div>
    </div>
  );
}
