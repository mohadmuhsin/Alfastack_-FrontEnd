import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Cpu, Database, Globe, Zap, Binary, Network } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
 

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
 
     
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-soft-peach">
      {/* 3D Technology Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-peach via-pale-yellow/30 to-soft-peach">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(#ff6b6b1a 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 107, 107, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* 3D Floating Tech Elements */}
        <div className="absolute inset-0">
          {/* Large Circuit Board Pattern */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 opacity-10"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 180],
              z: [0, 50, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: `
                linear-gradient(45deg, transparent 30%, rgba(255, 107, 107, 0.3) 30%, rgba(255, 107, 107, 0.3) 70%, transparent 70%),
                linear-gradient(-45deg, transparent 30%, rgba(26, 26, 64, 0.2) 30%, rgba(26, 26, 64, 0.2) 70%, transparent 70%)
              `,
              backgroundSize: '20px 20px',
              transform: 'perspective(1000px) rotateX(45deg)'
            }}
          />

          {/* Floating Data Nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-coral/30 rounded-full"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + (i * 0.5),
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFF9B0" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${10 + i * 15}%`}
                y1={`${20 + i * 10}%`}
                x2={`${30 + i * 15}%`}
                y2={`${40 + i * 10}%`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.3
                }}
              />
            ))}
          </svg>
        </div>

        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 249, 176, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* 3D Floating Tech Icons */}
      {[
        { Icon: Code, position: { top: '15%', left: '10%' }, delay: 0 },
        { Icon: Cpu, position: { top: '20%', right: '15%' }, delay: 1 },
        { Icon: Database, position: { bottom: '25%', left: '8%' }, delay: 2 },
        { Icon: Globe, position: { top: '60%', right: '10%' }, delay: 3 },
        { Icon: Zap, position: { bottom: '15%', right: '20%' }, delay: 4 },
        { Icon: Binary, position: { top: '40%', left: '5%' }, delay: 5 },
        { Icon: Network, position: { bottom: '40%', right: '5%' }, delay: 6 },
      ].map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-coral opacity-20"
          // style={position}
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 360],
            rotateX: [0, 180, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + (index * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
          style={{
            ...position,
            transform: 'perspective(1000px)',
            filter: 'drop-shadow(0 4px 8px rgba(255, 107, 107, 0.2))'
          }}
        >
          <Icon size={32 + (index % 3) * 8} />
        </motion.div>
      ))}

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-coral rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              background: `linear-gradient(45deg, rgba(255, 107, 107, 0.3), rgba(255, 249, 176, 0.2))`,
              clipPath: i % 2 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              transform: 'perspective(1000px)'
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 180],
              rotateZ: [0, 90]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl  ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1  
            className="title flex items-center justify-center text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-coral via-navy to-coral bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            
            {"Innovate. Build. Grow with integrity".split("").map((char, i) => (
              <span key={i}  className="char inline-block  bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 
from-yellow-400 via-orange-500 to-red-500 
bg-clip-text text-transparent transition-all duration-500">{char === " " ? "\u00A0" : char}</span>
            ))}
          </motion.h1>

          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-navy/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming businesses through innovative technology solutions and digital excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#who-we-are"
              className="inline-flex items-center px-8 py-4 bg-coral rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-coral/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Story
              <motion.div
                className="ml-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-navy/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gradient-to-b from-coral to-pale-yellow rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Add CSS animation for grid movement
const style = document.createElement('style');
style.textContent = `
  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;
document.head.appendChild(style);

export default HeroSection;