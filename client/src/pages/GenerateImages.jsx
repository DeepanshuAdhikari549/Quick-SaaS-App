import { Image as ImageIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const GenerateImages = () => {
  const imageStyle = [
    "Realistic style",
    "Ghibli style",
    "Anime style",
    "Cartoon style",
    "Fantasy style",
    "3D style",
    "Portrait style",
  ];

  const [selectedStyle, setSelectedStyle] = useState("Realistic style");
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) return toast.error("Please describe your image");

    try {
      setLoading(true);
      const prompt = `Generate an image of ${input} in the style ${selectedStyle}`;
      const token = await getToken();

      const { data } = await axios.post(
        "/api/ai/generate-image",
        { prompt, publish },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message || "Failed to generate image");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto px-4 py-8 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
      {/* left col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full md:w-[45%] clean-card p-6 md:p-8"
      >
        <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
          <div className="p-2 bg-green-50 rounded-lg">
            <Sparkles className="w-5 h-5 text-emerald-600" />
          </div>
          <h1 className="text-xl font-bold text-text-main">AI Image Generator</h1>
        </div>

        <p className="text-sm font-semibold text-text-main mb-2">Describe Your Image</p>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          rows={4}
          className="w-full py-2.5 px-4 outline-none text-sm rounded-lg border border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all text-text-main mb-6 bg-surface"
          placeholder="Describe what you want to see in the image..."
          required
        />

        <p className="text-sm font-semibold text-text-main mb-3">Style</p>
        <div className="flex gap-2 flex-wrap mb-8">
          {imageStyle.map((item) => (
            <span
              key={item}
              className={`text-xs px-4 py-2 border rounded-lg cursor-pointer font-medium transition-colors ${
                selectedStyle === item
                  ? "bg-green-50 text-emerald-700 border-emerald-300"
                  : "bg-white text-text-muted border-border hover:bg-surface hover:text-text-main"
              }`}
              onClick={() => setSelectedStyle(item)}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between p-4 bg-surface rounded-lg border border-border">
          <p className="text-sm font-medium text-text-main">Make this image Public</p>
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setPublish(e.target.checked)}
              checked={publish}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-border rounded-full peer-checked:bg-emerald-500 transition-colors border border-border peer-checked:border-emerald-600"></div>
            <span className="absolute left-[3px] top-[3px] w-3.5 h-3.5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></span>
          </label>
        </div>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 text-sm font-medium rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin"></span>
          ) : (
            <ImageIcon className="w-4 h-4" />
          )}
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </form>

      {/* right col */}
      <div className="w-full md:w-[55%] clean-card flex flex-col min-h-[500px]">
        <div className="flex items-center gap-3 border-b border-border p-6 bg-surface/50 rounded-t-xl">
          <ImageIcon className="w-5 h-5 text-emerald-600" />
          <h1 className="text-lg font-bold text-text-main">Generated Image</h1>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-center items-center">
          {!content ? (
            <div className="text-sm flex flex-col items-center gap-4 text-text-muted">
              <div className="w-16 h-16 rounded-full bg-surface-hover flex items-center justify-center border border-dashed border-border mb-2">
                <ImageIcon className="w-8 h-8 text-border" />
              </div>
              <p>Enter a description and click generate to see the magic.</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 w-full">
              <img
                src={content}
                alt="Generated"
                className="w-full max-w-md rounded-xl object-cover border border-border shadow-sm"
              />
              <a
                href={content}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition"
              >
                Download Image
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
