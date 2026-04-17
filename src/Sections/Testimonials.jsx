import { motion } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      image: 'https://i.pravatar.cc/150?img=1',
      content: 'Mohit delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise is outstanding.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at InnovateCo',
      image: 'https://i.pravatar.cc/150?img=2',
      content: 'Working with Mohit was a pleasure. He understood our requirements perfectly and delivered a scalable solution on time.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder of DesignHub',
      image: 'https://i.pravatar.cc/150?img=3',
      content: 'The quality of code and the modern design approach Mohit brought to our project was impressive. Highly recommend!',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'CTO at CloudScale',
      image: 'https://i.pravatar.cc/150?img=4',
      content: 'Mohit\'s expertise in cloud technologies and modern frameworks helped us build a robust platform. A true professional!',
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="testimonials-slider"
        >
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote size={48} className="text-cyan-400" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/50">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-md -z-10" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all" />
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style>{`
        .testimonials-slider .slick-dots {
          bottom: -50px;
        }
        .testimonials-slider .slick-dots li button:before {
          color: #06b6d4;
          opacity: 0.3;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #06b6d4;
          opacity: 1;
        }
        .testimonials-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}