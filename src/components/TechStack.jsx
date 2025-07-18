import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Smartphone, Globe, Shield, Cpu, Zap } from 'lucide-react';
import gsap from 'gsap';
const TechStack = () => {
  const iconRef = useRef(null);
  let hoverTween = null;
  const [ref, inView] = useInView({
    triggerOnce: false,
    
    threshold: 0.1
  });
    
  gsap.fromTo(".iconBox",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: "elastic.inOut", delay: 0.5 }
);

  const technologies = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Vue.js, Angular, TypeScript",
      color: "blue",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Node.js, Python, Java, .NET",
      color: "green",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, Google Cloud",
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, Swift",
      color: "orange",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Next.js, Nuxt.js, Progressive Web Apps",
      color: "pink",
    },
    {
      icon: Shield,
      title: "Security & DevOps",
      description: "Docker, Kubernetes, CI/CD",
      color: "red",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "TensorFlow, PyTorch, OpenAI",
      color: "indigo",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Monitoring, Analytics, Optimization",
      color: "yellow",
    },
  ];
  const handleMouseEnter = (e) => {  
    hoverTween =  gsap.to(e.currentTarget, {
      scale: 1.1,
      rotation: 360,
      duration:0.9,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    if (hoverTween) hoverTween.kill();  
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-coral to-coral',
      green: 'from-coral to-pale-yellow',
      purple: 'from-pale-yellow to-pale-yellow',
      orange: 'from-pale-yellow to-coral',
      pink: 'from-coral to-pale-yellow',
      red: 'from-pale-yellow to-coral',
      indigo: 'from-coral to-pale-yellow',
      yellow: 'from-pale-yellow to-coral',
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-pale-yellow/20 to-soft-peach">
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
              Our Tech Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed"
            >
              Cutting-edge technologies and frameworks that power our innovative solutions
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative "
              >
                <div   className="  bg-white/50 rounded-lg p-6 border border-dark-olive/20 hover:border-coral/50 transition-all duration-300 h-full shadow-sm hover:shadow-md  ">
                <motion.div 
                  className={` iconBox transform w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(tech.color)} flex items-center justify-center mb-4 text-navy shadow-lg`}
                  // whileHover={{ scale: 1.1, position: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <tech.icon key={index} className='icon' size={24} onMouseEnter={(e) =>{handleMouseEnter(e)}}  onMouseLeave={handleMouseLeave}  />
                </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-navy group-hover:text-coral transition-colors">
                    {tech.title}
                  </h3>
                  
                  <p className="text-navy/80 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="   inset-0 bg-gradient-to-r from-coral/5 to-pale-yellow/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  // whileHover={{ scale: 1 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Capabilities Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2 hover:text-black transition-colors  duration-300 ">100+</div>
              <div className="text-navy/80 hover:text-coral transition-colors  duration-300">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy mb-2 hover:text-coral transition-colors  duration-300">24/7</div>
              <div className="text-navy/80 hover:text-coral transition-colors  duration-300">Development Cycle</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2 hover:text-black transition-colors  duration-300">99.9%</div>
              <div className="text-navy/80 hover:text-coral transition-colors  duration-300">System Reliability</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;