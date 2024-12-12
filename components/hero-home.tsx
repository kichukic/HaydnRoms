import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Haydn/Haydin Custom ROMs – Unlock Your Device's True Potential
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xxl text-indigo-200/90"
                data-aos="fade-up"
                data-aos-delay={200}
              >
            Discover optimized and feature-rich custom ROMs tailored for the Haydn/Haydin device family. Boost performance, enhance battery life, and enjoy cutting-edge features with our expertly crafted firmware. Join our community of developers and enthusiasts to transform your device into a powerhouse!
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_2px_1px_0px_0px_theme(colors.white/.86)] hover:bg-[length:300%_250%] sm:mb-0 sm:w-auto"
                    href="https://t.me/pandemonium_haydn"
                  >
                    <span className="relative inline-flex items-center">
                      Go to Telegram Group <br>
                      </br> Pandemonium
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
