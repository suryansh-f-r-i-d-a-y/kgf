import React from 'react'
import './PriceCard.css'

const PriceCard = ({img , price}) => {
  return (
    <>
      <div className="pricing-card">
        <div className="card-image">
          <img
            src={img}
            alt="Cashew nuts in white bowl"
            className="plan-image"
          />
        </div>
        <div className="card-content">
          <h3 className="plan-title">Basic Plan</h3>
          <p className="plan-description">
            Ideal for individuals or small teams starting out.
          </p>
          <div className="price">{price}</div>
        </div>
      </div>
    </>
  )
}

export default PriceCard