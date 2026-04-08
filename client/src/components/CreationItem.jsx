import { useState } from "react";
import MarkDown from "react-markdown";

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-5 max-w-5xl text-sm clean-card cursor-pointer"
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className="font-semibold text-text-main text-base">{item.prompt}</h2>
          <p className="text-text-muted mt-1 text-xs">
            {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-surface border border-border text-text-muted px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">
          {item.type}
        </button>
      </div>
      
      {expanded && (
        <div className="mt-4 pt-4 border-t border-border">
          {item.type === "image" ? (
            <div className="flex flex-row items-center gap-4">
              <img
                src={item.content}
                alt="image"
                className="w-48 h-48 rounded-lg object-cover border border-border"
              />
              <a
                href={item.content}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-5 py-2.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-hover transition-colors"
              >
                Download Image
              </a>
            </div>
          ) : (
            <div className="overflow-y-auto text-sm text-text-main leading-relaxed">
              <div className="reset-tw">
                <MarkDown>{item.content}</MarkDown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
