import React from 'react'
import Navbar from '../components/Navbar'
import './Landing.css'
import { useState } from 'react'
import Footer from '../components/Footer'

const Landing = () => {

      const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Close-up view of fresh almonds with natural texture"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Colorful quinoa salad bowl with vegetables and nuts"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Bare winter tree against cloudy sky"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Delicate dandelion seeds ready to float in the wind"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Fresh pomegranate cut open showing ruby red seeds"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1599599813351-4367c28ce5cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Collection of fresh walnuts with natural shells"
    }
  ];

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
    <Navbar/>
    <section className="business-section">
      <div className="container">
        <div className="content-wrapper">
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

    
<section className="about-section">
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
                src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Variety of spices and dried ingredients"
                className="main-image"
              />
              <img 
                src="https://i.pinimg.com/736x/43/c8/45/43c8458bf0b61c46c6bc6ed028aa9106.jpg"
                alt="Dried orange slices and cinnamon sticks"
                className="secondary-image"
              />
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
                <div className="stat-number">9</div>
                <span className="stat-label">Years of experience</span>
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
                src="https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
       
        <div className="header-content">
          <h1 className="main-title">Our Offer</h1>
          <p className="subtitle">
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
            <div className="text-content">
              <h2>Custom Solutions</h2>
              <p>
                We provide adaptable services designed to support your goals at every stage of your journey.
              </p>
            </div>
          </div>

          <div className="solution-block proven-results">
            <div className="text-content">
              <h2>Proven Results</h2>
              <p>
                With a focus on quality and long-term value, we deliver outcomes that make an impact.
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

    <section className="pricing-section">
      <div className="container">
       
        <div className="header-content">
          <h1 className="main-title">Pricing Plans</h1>
          <p className="subtitle">
            Clear and flexible options designed to match your needs at every stage.
          </p>
        </div>

        <div className="pricing-grid">
          
          <div className="pricing-card">
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Cashew nuts in white bowl"
                className="plan-image"
              />
            </div>
            <div className="card-content">
              <h3 className="plan-title">Basic Plan</h3>
              <p className="plan-description">
                Ideal for individuals or small teams starting out.
              </p>
              <div className="price">999</div>
            </div>
          </div>

        
          <div className="pricing-card featured">
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Mixed trail mix in glass jar"
                className="plan-image"
              />
            </div>
            <div className="card-content">
              <h3 className="plan-title">Standard Plan</h3>
              <p className="plan-description">
                Balanced features for growing projects and wider collaboration.
              </p>
              <div className="price">999</div>
            </div>
          </div>

       
          <div className="pricing-card">
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1599599810694-57a2ca8276a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Almonds and dried fruits in wooden bowl"
                className="plan-image"
              />
            </div>
            <div className="card-content">
              <h3 className="plan-title">Premium Plan</h3>
              <p className="plan-description">
                Advanced tools and full support for scaling with confidence.
              </p>
              <div className="price">999</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* sectoin-4 */}

    <section className="concept-section">
      <div className="container">
       
        <div className="concept-block packaging-concept">
          <div className="text-content">
            <h2>Product Packaging Concept</h2>
            <p>
              A modern and functional packaging design developed to enhance shelf presence and 
              user experience.
            </p>
          </div>
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Elegant pistachio dessert with nuts garnish"
              className="concept-image"
            />
          </div>
          <div className="text-content">
            <h2>Brand Identity System</h2>
            <p>
              A cohesive visual identity including logo, typography, and print materials for 
              consistent brand expression.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* seection-5 */}

    <section className="gallery-section">
      <div className="container">
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="image-wrapper">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <div className="view-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.523 19 3.732 16.057 2.458 12Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              Have a question or want to work together? Fill out the form and we'll get back to you shortly.
            </p>
            <p className="contact-description">
              We're here to provide clear answers, explore ideas, and support your next steps—whether you're starting 
              a new project or just want to say hello.
            </p>
            <p className="contact-description">
              Every message matters to us, and we aim to respond promptly and thoughtfully.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default Landing
