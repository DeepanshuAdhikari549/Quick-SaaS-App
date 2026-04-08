import { Edit, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: "Short (500-800 words)" },
    { length: 1200, text: "Medium (800-1200 words)" },
    { length: 1600, text: "Long (1200+ words)" },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const { getToken } = useAuth();
  const outputRef = useRef(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) return toast.error("Please enter a topic");

    try {
      setLoading(true);
      const prompt = `Write an article about "${input}" in ${selectedLength.text}`;
      const token = await getToken();

      const { data } = await axios.post(
        "/api/ai/generate-article",
        { prompt, length: selectedLength.length },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        setContent(data.content);
        // Smooth scroll to article output
        setTimeout(() => {
          outputRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        toast.error(data.message || "Failed to generate article");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || "Something went wrong"
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
          <div className="p-2 bg-blue-50 rounded-lg">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-xl font-bold text-text-main">Article Writer</h1>
        </div>

        <p className="text-sm font-semibold text-text-main mb-2">Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full py-2.5 px-4 outline-none text-sm rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-text-main mb-6 bg-surface"
          placeholder="e.g. The future of artificial intelligence in healthcare..."
          required
        />

        <p className="text-sm font-semibold text-text-main mb-3">Length constraint</p>
        <div className="flex gap-2 flex-wrap mb-8">
          {articleLength.map((item, index) => (
            <span
              key={index}
              className={`text-xs px-4 py-2 border rounded-lg cursor-pointer font-medium transition-colors ${
                selectedLength.text === item.text
                  ? "bg-blue-50 text-primary border-primary/30"
                  : "bg-white text-text-muted border-border hover:bg-surface hover:text-text-main"
              }`}
              onClick={() => setSelectedLength(item)}
            >
              {item.text}
            </span>
          ))}
        </div>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-3 text-sm font-medium rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin"></span>
          ) : (
            <Edit className="w-4 h-4" />
          )}
          {loading ? "Writing Article..." : "Generate Article"}
        </button>
      </form>

      {/* right col */}
      <div
        ref={outputRef}
        className="w-full md:w-[55%] clean-card flex flex-col min-h-[500px]"
      >
        <div className="flex items-center gap-3 border-b border-border p-6 bg-surface/50 rounded-t-xl">
          <Edit className="w-5 h-5 text-primary" />
          <h1 className="text-lg font-bold text-text-main">Generated Content</h1>
        </div>

        <div className="p-6 flex-1 flex flex-col overflow-y-auto">
          {!content ? (
            <div className="flex-1 flex justify-center items-center min-h-[300px]">
              <div className="text-sm flex flex-col items-center gap-4 text-text-muted max-w-xs text-center">
                <div className="w-16 h-16 rounded-full bg-surface-hover flex items-center justify-center border border-dashed border-border mb-2">
                  <Edit className="w-8 h-8 text-border" />
                </div>
                <p>
                  Start by entering a topic on the left, then click generate to create your custom content.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-sm text-text-main leading-relaxed">
              <div className="reset-tw prose prose-sm max-w-none prose-headings:text-text-main prose-p:text-text-main prose-a:text-primary">
                <Markdown>{content}</Markdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
