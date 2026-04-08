import { assets } from "../assets/assets";
import { Star } from "lucide-react";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director",
      content: "QuickSaaS has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      title: "Content Creator",
      content: "QuickSaaS has made our content creation process effortless. The tools have helped us produce high-quality work faster than ever before.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "David Lee",
      title: "Content Writer",
      content: "This tool has transformed our creation process. The platform has helped us produce high-quality content perfectly tuned to our voice.",
      rating: 4,
    },
  ];

  return (
    <div className="relative px-6 sm:px-12 xl:px-32 py-24 bg-background pattern-bg border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4 tracking-tight">
          Loved by Creators
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto font-medium">
          Don't just take our word for it. Here is what people are building with QuickSaaS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="clean-card p-8 flex flex-col h-full relative"
          >
            <div className="flex items-center gap-1 mb-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                  />
                ))}
            </div>
            
            <p className="text-text-main text-base font-medium flex-grow leading-relaxed mb-8 italic">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4 border-t border-border pt-6 mt-auto">
              <img
                src={testimonial.image}
                className="w-12 h-12 object-cover rounded-full shadow-sm"
                alt=""
              />
              <div>
                <h3 className="font-bold text-text-main text-sm">{testimonial.name}</h3>
                <p className="text-xs text-text-muted font-medium mt-0.5">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
