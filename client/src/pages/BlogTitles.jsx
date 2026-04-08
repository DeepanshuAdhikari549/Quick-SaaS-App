import { Hash, Sparkles } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const BlogTitles = () => {
  const blogCategories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Travel",
    "Food",
  ];

  const [selectedCategory, setSelectedCategory] = useState("General");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) return toast.error("Please enter a keyword");

    try {
      setLoading(true);
      const prompt = `Generate a blog title for the keyword "${input}" in the category "${selectedCategory}"`;
      const token = await getToken();

      const { data } = await axios.post(
        "/api/ai/generate-blog-title",
        { prompt },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message || "Failed to generate title");
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "Something went wrong";
      toast.error(message);
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
          <div className="p-2 bg-purple-50 rounded-lg">
            <Sparkles className="w-5 h-5 text-purple-600" />
          </div>
          <h1 className="text-xl font-bold text-text-main">AI Title Generator</h1>
        </div>
        
        <p className="text-sm font-semibold text-text-main mb-2">Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full py-2.5 px-4 outline-none text-sm rounded-lg border border-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-text-main mb-6 bg-surface"
          placeholder="e.g. artificial intelligence..."
          required
        />

        <p className="text-sm font-semibold text-text-main mb-3">Category</p>
        <div className="flex gap-2 flex-wrap mb-8">
          {blogCategories.map((item) => (
            <span
              key={item}
              className={`text-xs px-4 py-2 border rounded-lg cursor-pointer font-medium transition-colors ${
                selectedCategory === item
                  ? "bg-purple-50 text-purple-700 border-purple-300"
                  : "bg-white text-text-muted border-border hover:bg-surface hover:text-text-main"
              }`}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </span>
          ))}
        </div>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 text-sm font-medium rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin"></span>
          ) : (
            <Hash className="w-4 h-4" />
          )}
          {loading ? "Generating..." : "Generate title"}
        </button>
      </form>

      {/* right col */}
      <div className="w-full md:w-[55%] clean-card flex flex-col min-h-[500px]">
        <div className="flex items-center gap-3 border-b border-border p-6 bg-surface/50 rounded-t-xl">
          <Hash className="w-5 h-5 text-purple-600" />
          <h1 className="text-lg font-bold text-text-main">Generated Titles</h1>
        </div>
        
        <div className="p-6 flex-1 flex flex-col overflow-y-auto">
          {!content ? (
            <div className="flex-1 flex justify-center items-center min-h-[300px]">
              <div className="text-sm flex flex-col items-center gap-4 text-text-muted max-w-xs text-center">
                <div className="w-16 h-16 rounded-full bg-surface-hover flex items-center justify-center border border-dashed border-border mb-2">
                  <Hash className="w-8 h-8 text-border" />
                </div>
                <p>Enter a topic and click generate to get started.</p>
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

export default BlogTitles;
