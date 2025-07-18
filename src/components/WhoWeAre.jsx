import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Lightbulb, Rocket } from 'lucide-react';

const WhoWeAre = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in cutting-edge technologies",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable outcomes and business value",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Constantly exploring new technologies and methodologies",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development processes ensuring rapid time-to-market",
    },
  ];

  return (
    <section id="who-we-are" className="py-20 bg-gradient-to-b from-soft-peach to-pale-yellow/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-navy"
            >
              Who We Are
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed"
            >
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative digital solutions and strategic technology partnerships.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-navy/80 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe in creating digital experiences that not 
                only meet today's needs but anticipate tomorrow's challenges.
              </p>
              <p className="text-navy/80 leading-relaxed">
                Our team of passionate developers, designers, and strategists work collaboratively 
                to deliver solutions that exceed expectations and create lasting value for our clients.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-r from-coral/10 to-pale-yellow/30 rounded-lg p-8 border border-coral/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-coral/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-coral">50+</div>
                    <div className="text-sm text-navy/70">Projects Completed</div>
                  </div>
                  <div className="bg-pale-yellow/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-navy">10+</div>
                    <div className="text-sm text-navy/70">Years Experience</div>
                  </div>
                  <div className="bg-coral/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-coral">98%</div>
                    <div className="text-sm text-navy/70">Client Satisfaction</div>
                  </div>
                  <div className="bg-pale-yellow/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-navy">24/7</div>
                    <div className="text-sm text-navy/70">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/50 rounded-lg p-6 border border-dark-olive/20 hover:border-coral/50 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ y: -5 }}
              >
                <div className="text-coral mb-4">
                  <feature.icon size={32} />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-navy">{feature.title}</h4>
                <p className="text-navy/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;