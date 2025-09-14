import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { emailConfig } from '../config/emailConfig';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const { serviceID, templateID, userID } = emailConfig;

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not specified',
      budget: formData.budget,
      project_type: formData.project,
      message: formData.message,
      to_email: 'amitranjan97084@gmail.com', // Your email where you want to receive messages
      reply_to: formData.email
    };

    try {
      // Check if EmailJS is properly configured
      if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || userID === 'YOUR_USER_ID') {
        throw new Error('EmailJS not configured. Please set up your EmailJS credentials in src/config/emailConfig.js');
      }

      console.log('Sending email with params:', templateParams);
      
      // Send email using EmailJS
      const result = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log('Email sent successfully:', result.text);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        project: '',
        message: ''
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setIsSubmitting(false);
      
      // More specific error messages
      if (error.message.includes('EmailJS not configured')) {
        alert('EmailJS is not configured yet. Please follow the setup guide or contact me directly at amitranjan97084@gmail.com');
      } else if (error.text && error.text.includes('403')) {
        alert('EmailJS authentication failed. Please check your User ID.');
      } else if (error.text && error.text.includes('404')) {
        alert('EmailJS service or template not found. Please check your Service ID and Template ID.');
      } else {
        alert('Failed to send message. Please try again or contact me directly at amitranjan97084@gmail.com');
      }
    }
  };
  

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "amitranjan97084@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+91 8789305700",
      description: "Quick response on WhatsApp"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      description: "Connect with me professionally"
    },
    {
      icon: "🌐",
      title: "Timezone",
      value: "UTC-5 (EST)",
      description: "Available 9 AM - 6 PM EST"
    }
  ];

  const pricing = [
    {
      type: "Simple Website",
      price: "$500 - $2,000",
      duration: "1-2 weeks",
      features: ["Responsive Design", "Basic SEO", "Contact Forms", "CMS Integration"]
    },
    {
      type: "Full Stack Application",
      price: "$2,000 - $10,000",
      duration: "4-8 weeks",
      features: ["Custom Backend", "Database Design", "User Authentication", "API Integration"]
    },
    {
      type: "3D Web Experience",
      price: "$3,000 - $15,000",
      duration: "6-12 weeks",
      features: ["3D Modeling", "WebGL Optimization", "Interactive Elements", "Cross-device Support"]
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2>Let's Work Together</h2>
          <p>Ready to turn your ideas into reality? Let's discuss your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="contact-methods">
              <h3>Get In Touch</h3>
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="contact-method"
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <h4>{method.title}</h4>
                    <p className="method-value">{method.value}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pricing-section">
              <h3>Project Pricing</h3>
              <div className="pricing-grid">
                {pricing.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="pricing-card"
                  >
                    <h4>{item.type}</h4>
                    <div className="pricing-details">
                      <span className="price">{item.price}</span>
                      <span className="duration">{item.duration}</span>
                    </div>
                    <ul className="features-list">
                      {item.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <div className="form-header">
              <h3>Start Your Project</h3>
              <p>Tell me about your project and let's create something amazing together</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
              >
                <div className="success-icon">✅</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. I'll get back to you within 24 hours.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Budget Range *</option>
                    <option value="$500-$2000">$500 - $2,000</option>
                    <option value="$2000-$5000">$2,000 - $5,000</option>
                    <option value="$5000-$10000">$5,000 - $10,000</option>
                    <option value="$10000+">$10,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Project Type *</option>
                    <option value="website">Simple Website</option>
                    <option value="webapp">Web Application</option>
                    <option value="ecommerce">E-commerce Platform</option>
                    <option value="3d">3D Web Experience</option>
                    <option value="mobile">Mobile App</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project... *"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="contact-footer"
        >
          <div className="social-links">
            <h4>Follow My Work</h4>
            <div className="social-grid">
              <a href="#" className="social-link">
                <span>📘</span>
                <span>Upwork</span>
              </a>
              <a href="#" className="social-link">
                <span>🟢</span>
                <span>Fiverr</span>
              </a>
              <a href="#" className="social-link">
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="social-link">
                <span>🐙</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
