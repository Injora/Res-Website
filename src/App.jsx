import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <span className="logo-icon">☕</span>
            <span className="logo-text">NestCafé</span>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
            <li><button onClick={() => scrollToSection('featured')}>Featured</button></li>
            <li><button onClick={() => scrollToSection('menu')}>Menu</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Brewed by Students,<br/>Loved by Everyone</h1>
          <p className="hero-subtitle">Cozy café vibes, affordable drinks, and Instagram-worthy moments</p>
          <button className="cta-button" onClick={() => scrollToSection('menu')}>View Menu</button>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Featured Dishes */}
      <section id="featured" className="featured">
        <h2 className="section-title">Featured Favorites</h2>
        <p className="section-subtitle">This week's must-try specialties</p>
        
        <div className="featured-grid">
          {/* Card 1 */}
          <div className="featured-card">
            <div className="card-image" style={{backgroundColor: '#D4A574'}}></div>
            <div className="card-content">
              <h3 className="card-title">Signature Espresso</h3>
              <p className="card-description">Rich, bold, and perfectly balanced. Made with love by our baristas.</p>
              <div className="card-footer">
                <span className="card-price">$4.50</span>
                <button className="card-btn">Add to Order</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="featured-card">
            <div className="card-image" style={{backgroundColor: '#F5E6D3'}}></div>
            <div className="card-content">
              <h3 className="card-title">Vanilla Latte</h3>
              <p className="card-description">Creamy, smooth, and perfectly sweet. Your new favorite go-to.</p>
              <div className="card-footer">
                <span className="card-price">$5.20</span>
                <button className="card-btn">Add to Order</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="featured-card">
            <div className="card-image" style={{backgroundColor: '#E8CCC4'}}></div>
            <div className="card-content">
              <h3 className="card-title">Matcha Latte</h3>
              <p className="card-description">Creamy green tea with a vibrant, earthy flavor. Smooth and calming.</p>
              <div className="card-footer">
                <span className="card-price">$5.50</span>
                <button className="card-btn">Add to Order</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="featured-card">
            <div className="card-image" style={{backgroundColor: '#F4D4D4'}}></div>
            <div className="card-content">
              <h3 className="card-title">Strawberry Pastry</h3>
              <p className="card-description">Fresh, fluffy, and bursting with sweet strawberry flavor.</p>
              <div className="card-footer">
                <span className="card-price">$4.00</span>
                <button className="card-btn">Add to Order</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">Carefully crafted for café lovers</p>

        <div className="menu-container">
          {/* Coffee */}
          <div className="menu-category">
            <h3 className="category-title">☕ Coffee</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Espresso</span>
                  <span className="item-price">$3.50</span>
                </div>
                <p className="item-description">Single shot of rich, concentrated coffee</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Americano</span>
                  <span className="item-price">$4.00</span>
                </div>
                <p className="item-description">Espresso with hot water for a smooth taste</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Cappuccino</span>
                  <span className="item-price">$4.50</span>
                </div>
                <p className="item-description">Equal parts espresso, steamed milk, and foam</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Latte</span>
                  <span className="item-price">$4.50</span>
                </div>
                <p className="item-description">Smooth espresso with steamed milk and a layer of foam</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Macchiato</span>
                  <span className="item-price">$4.25</span>
                </div>
                <p className="item-description">Bold espresso with just a touch of milk foam</p>
              </div>
            </div>
          </div>

          {/* Snacks */}
          <div className="menu-category">
            <h3 className="category-title">🥐 Snacks</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Croissant</span>
                  <span className="item-price">$3.50</span>
                </div>
                <p className="item-description">Buttery, flaky French pastry</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Banana Bread</span>
                  <span className="item-price">$3.75</span>
                </div>
                <p className="item-description">Moist and delicious, baked fresh daily</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Blueberry Muffin</span>
                  <span className="item-price">$3.75</span>
                </div>
                <p className="item-description">Packed with fresh blueberries</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Cheese & Ham Sandwich</span>
                  <span className="item-price">$5.50</span>
                </div>
                <p className="item-description">Fresh and satisfying, perfect for lunch</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Avocado Toast</span>
                  <span className="item-price">$6.00</span>
                </div>
                <p className="item-description">On sourdough with fresh lime and sumac</p>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div className="menu-category">
            <h3 className="category-title">🍰 Desserts</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Chocolate Cake</span>
                  <span className="item-price">$4.50</span>
                </div>
                <p className="item-description">Rich, decadent, and absolutely divine</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Cheesecake</span>
                  <span className="item-price">$5.00</span>
                </div>
                <p className="item-description">Creamy New York style with berry topping</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Tiramisu</span>
                  <span className="item-price">$4.75</span>
                </div>
                <p className="item-description">Classic Italian dessert, light and elegant</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Matcha Cheesecake</span>
                  <span className="item-price">$5.25</span>
                </div>
                <p className="item-description">Unique fusion of green tea and creamy cheese</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <span className="item-name">Brownie</span>
                  <span className="item-price">$3.50</span>
                </div>
                <p className="item-description">Warm, fudgy, and perfect with your coffee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p className="about-description">
              What started as a passion project between friends has blossomed into NestCafé—a thriving community space run by students, for students. We believe that everyone deserves access to quality coffee and a cozy place to belong.
            </p>
            <p className="about-description">
              Every cup is made with care, every pastry baked fresh, and every moment spent here is meant to be cherished. Whether you're cramming for exams, catching up with friends, or just needing a quiet moment, NestCafé is your sanctuary.
            </p>
            <p className="about-description about-highlight">
              Join us in building something special—one cup at a time. 🤝
            </p>
          </div>
          <div className="about-visual">
            <div className="about-placeholder">
              🎓
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Visit Us Today</h2>
        <p className="section-subtitle">We'd love to see you!</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-block">
              <span className="info-icon">📍</span>
              <div className="info-text">
                <h3>Location</h3>
                <p>123 Student Lane<br/>University Campus<br/>City, State 12345</p>
              </div>
            </div>

            <div className="info-block">
              <span className="info-icon">📞</span>
              <div className="info-text">
                <h3>Phone</h3>
                <p><a href="tel:+1234567890">(123) 456-7890</a></p>
              </div>
            </div>

            <div className="info-block">
              <span className="info-icon">✉️</span>
              <div className="info-text">
                <h3>Email</h3>
                <p><a href="mailto:hello@nestcafe.com">hello@nestcafe.com</a></p>
              </div>
            </div>

            <div className="info-block">
              <span className="info-icon">⏰</span>
              <div className="info-text">
                <h3>Hours</h3>
                <p>Mon-Fri: 7am - 8pm<br/>Sat-Sun: 8am - 6pm</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-placeholder">
              🗺️ Map Location
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>NestCafé</h4>
            <p>Brewed by students, loved by everyone.</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon" title="Instagram">📷</a>
              <a href="#" className="social-icon" title="Facebook">f</a>
              <a href="#" className="social-icon" title="Twitter">𝕏</a>
              <a href="#" className="social-icon" title="TikTok">♪</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('menu')}>Menu</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 NestCafé. Made with ☕ and 💛</p>
        </div>
      </footer>
    </div>
  )
}

export default App
