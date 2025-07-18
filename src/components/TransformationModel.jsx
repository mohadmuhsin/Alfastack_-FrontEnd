import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Lightbulb, Code, Rocket, TrendingUp } from 'lucide-react';

const TransformationModel = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "Deep dive into your business needs and challenges",
      color: "blue",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Craft a tailored digital transformation roadmap",
      color: "purple",
    },
    {
      icon: Code,
      title: "Development",
      description: "Build cutting-edge solutions with modern technologies",
      color: "green",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deploy and optimize for maximum performance",
      color: "orange",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Scale and evolve with ongoing support",
      color: "pink",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-coral to-coral',
      purple: 'from-pale-yellow to-pale-yellow',
      green: 'from-coral to-pale-yellow',
      orange: 'from-pale-yellow to-coral',
      pink: 'from-coral to-pale-yellow',
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="transformation-model" className="py-20 bg-white/30">
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
              className="text-4xl md:text-5xl font-bold mb-6 text-navy"
            >
              Our Transformation Model
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed"
            >
              A proven methodology that transforms your business through strategic technology implementation
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-coral to-pale-yellow rounded-full opacity-40" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    className="bg-white/60 rounded-lg p-6 border border-dark-olive/20 hover:border-coral/50 transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-navy">{step.title}</h3>
                    <p className="text-navy/80 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="w-2/12 flex justify-center">
                  <motion.div  
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${getColorClasses(step.color)} flex items-center justify-center text-navy shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <step.icon size={24} />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>

          {/* Process Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 bg-gradient-to-r from-coral/10 to-pale-yellow/20 rounded-lg p-8 border border-coral/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-navy">Ready to Transform Your Business?</h3>
              <p className="text-navy/80 mb-6">
                Let's discuss how our proven methodology can accelerate your digital transformation
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-coral rounded-full text-white font-semibold shadow-lg hover:shadow-xl hover:bg-coral/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationModel;