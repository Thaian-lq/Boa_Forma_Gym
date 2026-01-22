import React from 'react';
import { TRAINERS } from '../constants';
import { Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Trainers: React.FC = () => {
  return (
    <section id="professores" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">Equipe de Boa Forma</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 font-medium">Nossos profissionais são altamente qualificados para te guiar em cada passo.</p>
        </div>

        <div className="relative">
          {/* Custom Navigation Buttons */}
          <div className="hidden md:flex justify-center gap-4 mb-8">
            <button className="trainer-prev-btn w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all border border-gray-200">
              <ChevronLeft size={24} />
            </button>
            <button className="trainer-next-btn w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all border border-gray-200">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.trainer-prev-btn',
              nextEl: '.trainer-next-btn',
            }}
            pagination={{
              clickable: true,
              el: '.trainer-pagination',
              bulletClass: 'swiper-pagination-bullet bg-gray-300 w-2 h-2 mx-1 opacity-100',
              bulletActiveClass: 'swiper-pagination-bullet-active bg-primary scale-125',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            loop={true}
            className="pb-12"
          >
            {TRAINERS.map((trainer) => (
              <SwiperSlide key={trainer.id}>
                <div className="bg-white rounded-3xl overflow-hidden group h-full">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-black text-gray-900 mb-1">{trainer.name}</h4>
                    <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">{trainer.specialty}</p>
                    <div className="flex justify-center gap-4">
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                        <Instagram size={18} />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="trainer-pagination flex justify-center gap-2 mt-8"></div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button className="trainer-prev-btn w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all">
            <ChevronLeft size={20} />
          </button>
          <button className="trainer-next-btn w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;