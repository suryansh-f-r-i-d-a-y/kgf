import React from 'react'
import Navbar from '../components/Navbar'
import './Landing.css'
import { useState } from 'react'
import Footer from '../components/Footer'
import PriceCard from '../components/PriceCard'
import GalleryImange from '../components/GalleryImage'

const Landing = () => {

  const galleryImages = [
    {
      id: 1,
      src: "https://i.pinimg.com/1200x/c6/e7/f0/c6e7f0a18faa5a1829146e00a4b9f125.jpg",
      alt: "Close-up view of fresh almonds with natural texture"
    },
    {
      id: 2,
      src: "https://i.pinimg.com/1200x/75/ad/ec/75adecce68ee83de89bbb6edb1149b55.jpg",
      alt: "Colorful quinoa salad bowl with vegetables and nuts"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/32/af/7c/32af7c2a06b3f4934daefdcaf9c6aa48.jpg",
      alt: "Bare winter tree against cloudy sky"
    },
    {
      id: 4,
      src: "https://i.pinimg.com/736x/e7/35/1e/e7351e9f16c61ba86b73e9a479bde967.jpg",
      alt: "Delicate dandelion seeds ready to float in the wind"
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/47/27/f1/4727f154e0c9787395ad9355f9647d03.jpg",
      alt: "Fresh pomegranate cut open showing ruby red seeds"
    }
  ];

  const PriceCardImages = [
    {
      img: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 500

    }, {
      img: "https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 600

    }, {
      img: "https://i.pinimg.com/736x/11/9c/d9/119cd922a7f70172ea520137843d461d.jpg",
      price: 800
    }
  ]

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };


  return (
    <>
      <Navbar />
      <section className="business-section" id='home'>
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="text-content">
              <h1 className="main-heading">
                <span className="business-text">Premium Dry Fruits</span>
                <span className="business-text">Pure Taste</span>
                <span className="business-text">Trusted Quality.</span>
              </h1>
              <p className="description">
                Handpicked, nutrient-rich dry fruits sourced from the finest orchards to nourish your body and delight your senses.
              </p>
              <button className="explore-button">
                Explore
              </button>
            </div>

            <div className="image-section">
              <div className="image-container">
                <img
                  src="https://i.pinimg.com/736x/29/60/a4/2960a4737170810e5a6a7b5217514722.jpg"
                  alt="Bowl of mixed dry fruits including pistachios, almonds, and cashews"
                  className="dry-fruits-image"
                />
                <div className="decorative-dots">
                  {Array.from({ length: 20 }, (_, index) => (
                    <div key={index} className="dot"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sction2 */}


      <section className="about-section" id='about'>
        <div className="container">
          <div className="header-section">
            <h1 className="main-title">About Us</h1>
            <p className="intro-text">
              At KGF, we are passionate about bringing you the finest dry fruits, carefully selected from trusted growers. Our commitment to quality ensures that every product is fresh, nutritious, and full of natural flavor. We believe in promoting healthy living while offering premium, wholesome snacks that you can enjoy every day with confidence and peace of mind.
            </p>
          </div>

          <div className="content-grid">

            <div className="left-column">
              <div className="image-stack">
                <img
                  src="https://i.pinimg.com/1200x/dd/30/9f/dd309f94cbf27ce8fd01ecea67e2b40b.jpg"
                  alt="Variety of spices and dried ingredients"
                  className="main-image"
                />
                {/* <img
                  src="https://i.pinimg.com/736x/43/c8/45/43c8458bf0b61c46c6bc6ed028aa9106.jpg"
                  alt="Dried orange slices and cinnamon sticks"
                  className="secondary-image"
                /> */}
              </div>
            </div>


            <div className="right-column">
              <div className="who-we-are">
                <h2>Who We Are</h2>
                <p>
                  A proud India-based dry fruits seller dedicated to offering premium, fresh, and nutrient-rich products.
                </p>
                <p>
                  Sourcing the best quality dry fruits from trusted growers across the country to ensure purity and taste.
                </p>
                <p>
                  Committed to promoting healthy lifestyles by providing wholesome, natural snacks for every household.
                </p>
              </div>
            </div>
          </div>


          <div className="bottom-section">

            <div className="values-section">
              <h2>What We Value</h2>
              <div className="stats-list">
                <div className="stat-item">
                  <div className="stat-number">12</div>
                  <span className="stat-label">Specialists</span>
                </div>
                <div className="stat-item">
                  <div className="stat-number">220+</div>
                  <span className="stat-label">Satisfied customers</span>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <span className="stat-label">Quality Assured</span>
                </div>
              </div>
            </div>


            <div className="bottom-images">
              <img
                src="https://i.pinimg.com/1200x/7a/b6/f1/7ab6f19af57edd1919f44413c4045e29.jpg"
                alt="Colorful spices and nuts display"
                className="bottom-image-main"
              />
              <div className="side-image-container">
                <img
                  src="https://i.pinimg.com/1200x/ec/b5/ec/ecb5ec9cafb113497937f3b1cc61925a.jpg"
                  alt="Dried apricots in crystal bowl"
                  className="side-image"
                />
                <div className="decorative-dots">
                  {Array.from({ length: 12 }, (_, index) => (
                    <div key={index} className="dot"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-3 */}

      <section className="offer-section">
        <div className="container">

          <div className="offer-header-content">
            <h1 className="offer-title">Our Offer</h1>
            <p className="offer-subtitle">
              Discover flexible, reliable, and professional solutions tailored to your needs.
            </p>
          </div>

          <div className="content-wrapper">

            <div className="solution-block custom-solutions">
              <div className="image-container">
                <img
                  src="https://i.pinimg.com/736x/f4/76/f8/f476f8b28099ebdf8b0a860a0abcbe85.jpg"
                  alt="Fresh cranberries hanging on branch"
                  className="solution-image"
                />
                <div className="circle-decoration circle-right"></div>
              </div>
              <div className="offer-text-content">
                <h2>Wholesale Offering</h2>
                <p>
                  We supply premium dry fruits in bulk with assured quality, competitive pricing, and timely delivery. Perfect for retailers, distributors, and businesses looking for reliable sourcing.
                </p>
              </div>
            </div>

            <div className="solution-block proven-results">
              <div className="offer-text-content">
                <h2>Custom Request Based</h2>
                <p>
                  We cater to unique needs with tailored dry fruit assortments, packaging, and quantities—perfectly designed to match your brand or occasion.
                </p>
              </div>
              <div className="image-container">
                <div className="circle-decoration circle-left"></div>
                <img
                  src="https://i.pinimg.com/736x/df/c2/a5/dfc2a5c42262f5428114f8928d36c696.jpg"
                  alt="Mixed nuts and dried fruits in wooden bowl"
                  className="solution-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-4 */}

      {/* <section className="pricing-section">
        <div className="container">

          <div className="header-content">
            <h1 className="main-title">Pricing Plans</h1>
            <p className="subtitle">
              Clear and flexible options designed to match your needs at every stage.
            </p>
          </div>

          <div className="pricing-grid">
            {PriceCardImages.map((item, index) => (
              <PriceCard key={index} img={item.img} price={item.price} />
            ))}

          </div>
        </div>
      </section> */}

      {/* sectoin-4 */}

      <section className="concept-section">
        <div className="container">

          <div className="concept-block packaging-concept">
            <div className="text-content">
              <h2>Sustainable Packaging</h2>
              <p>
                We use eco-friendly and secure packaging to keep your dry fruits fresh while caring for the environment.
              </p>
            </div>
            <div className="image-container">
              <img
                src="https://i.pinimg.com/1200x/1a/1c/b2/1a1cb2d5b602646e44b39a877b08cc89.jpg"
                alt="Fresh hazelnuts growing on natural tree branch"
                className="concept-image"
              />
              <div className="decorative-shape shape-right"></div>
            </div>
          </div>


          <div className="concept-block brand-identity">
            <div className="image-container">
              <div className="decorative-shape shape-left"></div>
              <img
                src="https://i.pinimg.com/736x/40/ca/cd/40cacd8e9280af471a7403ba4ceb1d7e.jpg"
                alt="Elegant pistachio dessert with nuts garnish"
                className="concept-image"
              />
            </div>
            <div className="text-content">
              <h2>Quality Assurance</h2>
              <p>
               From festive hampers to bulk orders, our premium dry fruits make the perfect choice for healthy and elegant corporate gifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* seection-5 */}

      <section className="gallery-section">
        <div className="container">
          <div className='info-container'>
            <h1 className='contact-title' style={{textAlign:'center', color:'#121568'}}>Image Gallery</h1>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((item)=>{
              return(
                <GalleryImange key={item.id} image={item.src} alt={item.alt}/>
              )
            })
            }
          </div>
        </div>
      </section>

      {/* section-6 */}

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">

            <div className="form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your e-mail:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message content:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Enter your message here"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send
                </button>
              </form>
            </div>

            <div className="info-container">
              <h1 className="contact-title">Get in Touch</h1>
              <p className="contact-description">
              Have a question, suggestion, or just want to say hello? Fill out the form below and our team will get back to you as soon as possible. Whether it’s about our products, orders, or anything else — we’re here to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Landing
