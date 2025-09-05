import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProjectCarouselModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-zinc-950 text-white rounded-lg w-full max-w-[90vw] md:max-w-6xl p-6 shadow-xl">

          <Dialog.Title className="text-xl font-bold text-foreground mb-4">
            {project.title}
          </Dialog.Title>

          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {project.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-[500px] bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800">
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="max-h-full max-w-full object-contain rounded-md shadow-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          <p className="mt-4 text-sm text-foreground leading-relaxed">{project.description}</p>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80"
            >
              Cerrar
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
