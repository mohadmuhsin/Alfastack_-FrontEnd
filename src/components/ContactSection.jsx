import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import axios from 'axios';

const ContactSection = () => {

  const apiURL = import.meta.env.VITE_API_URL
   
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  let hoverTween = null;
  gsap.registerPlugin(ScrollTrigger) 
gsap.to('.box', {
	scrollTrigger: '.box', // start animation when ".box" enters the viewport
	// x: 5
});

useGSAP(() => {
  gsap.fromTo(
    ".box",
    { opacity: 0, x: -25  },           
    {
      opacity: 1, x: 0,              
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".box",
        start: "top 90%",           
        end: "bottom 60%",        
        toggleActions: "restart pause resume reverse",  
        // markers: true,            
      },
    }
  );
}, []);

  const handleHover = () => {
    gsap.fromTo(
      ".char",
      { y: 0 },
      {
        y: -10,
        duration: 0.3,
        stagger: {
          each: 0.05,
          yoyo: true,
          repeat: 1,
        },
        scrub: 1,
        ease: "bounce.inOut",
      }
    );
  };
  const handleMouseEnter = (e) => {
    hoverTween = gsap.to(e.currentTarget, {
      scale: 1.5,
      z: -15,
      duration: 0.3,
      ease: "power3",
    });
  };

  const handleMouseLeave = (e) => {
    if (hoverTween) hoverTween.kill();
    gsap.to(e.currentTarget, {
      scale: 1,
      z: -0,
      duration: 0.3,
      ease: "power3",
    });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [response, setResponse] = useState({
    customer: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${apiURL}/cutomer`, formData).then((res)=>{
        
        setResponse({customer: res.data.customer.name, message: res.data.message})
        console.log('Message sent successfully', res.data);
        setFormData({ name: '', email: '', company: '', message: '' });
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
    } catch (error) {
      console.error(error);
    }
     

  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "hello@alfastack.com",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Location",
      info: "San Francisco, CA",
      color: "purple",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-soft-peach to-dark-olive/10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="char text-4xl md:text-5xl font-bold mb-6 text-navy " onHoverStart={handleHover}
            > {"Let's Build Something Amazing".split("").map((char, i) => (
              <span key={i} className="char inline-block  bg-gradient-to-r from-coral to-pale-yellow 
              hover:from-blue-400 hover:to-green-400 
              bg-clip-text text-transparent 
              transition-all duration-500">{char}</span>
            ))}
              
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your business? Get in touch with our team of
              experts
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="box space-y-8"
            >
              <div>
                <h3 className="box text-2xl font-bold mb-6 text-navy">
                  Get in Touch
                </h3>
                <p className="box text-navy/80 leading-relaxed mb-8">
                  We'd love to hear about your project and discuss how we can
                  help bring your vision to life. Reach out to us through any of
                  the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-l transition-all duration-300
                    ${
                      contact.color === "blue"
                        ? "from-coral to-coral  hover:from-pale-yellow  hover:to-pale-yellow"
                        : contact.color === "green"
                        ? "from-coral to-pale-yellow  hover:from-blue-400  hover:to-green-400"
                        : "from-pale-yellow to-pale-yellow  hover:from-coral  hover:to-coral"
                    }
                    } flex items-center justify-center text-navy shadow-lg`}
                    >
                      <contact.icon
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        size={20}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-navy">
                        {contact.title}
                      </div>
                      <div className="text-navy/80">{contact.info}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/60 rounded-lg p-8 border border-dark-olive/20 shadow-lg"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 border border-dark-olive/30 rounded-lg text-navy placeholder-navy/50 focus:border-coral focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 border border-dark-olive/30 rounded-lg text-navy placeholder-navy/50 focus:border-coral focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 border border-dark-olive/30 rounded-lg text-navy placeholder-navy/50 focus:border-coral focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/80 border border-dark-olive/30 rounded-lg text-navy placeholder-navy/50 focus:border-coral focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-coral rounded-lg text-white font-semibold shadow-lg hover:shadow-xl hover:bg-coral/90 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-navy/80">
                    <span className='font-bold mr-2'>{response.customer}</span>
                   {response.message}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;