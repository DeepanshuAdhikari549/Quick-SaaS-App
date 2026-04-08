import { assets } from "../assets/assets";
import { Star } from "lucide-react";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director, TechCorp",
      content: "QuickSaaS has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      title: "Content Creator, TechCorp",
      content: "QuickSaaS has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "David Lee",
      title: "Content Writer, TechCorp",
      content: "This tool has transformed our content creation process. The AI integrations have helped us produce high-quality content perfectly tuned to our voice.",
      rating: 4,
    },
  ];

  return (
    <div className="relative px-6 sm:px-12 xl:px-32 py-32 bg-background overflow-hidden border-t border-surface">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6 tracking-tight">
          Loved by <span className="text-gradient">Creators</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Don't just take our word for it. Here is what world-class teams are building with QuickSaaS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="group glass-panel p-8 rounded-2xl hover-lift cursor-pointer flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-serif text-primary pointer-events-none">"</div>
            
            <div className="flex items-center gap-1 mb-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-surface-dark'}`}
                  />
                ))}
            </div>
            
            <p className="text-text-muted text-lg font-light flex-grow leading-relaxed italic relative z-10">
              "{testimonial.content}"
            </p>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-surface to-transparent my-6" />
            
            <div className="flex items-center gap-4 relative z-10">
              <img
                src={testimonial.image}
                className="w-12 h-12 object-cover rounded-full border border-surface shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                alt=""
              />
              <div>
                <h3 className="font-medium text-text-main group-hover:text-primary transition-colors">{testimonial.name}</h3>
                <p className="text-sm font-light text-text-muted">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
