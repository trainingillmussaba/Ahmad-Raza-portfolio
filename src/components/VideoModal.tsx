import React from "react";
import { X, Play } from "lucide-react";
import { TEACHER_INFO } from "../data";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = TEACHER_INFO.introVideoUrl,
  title = "Meet Teacher Ahmad Raza — Introduction",
}) => {
  if (!isOpen) return null;

  // Extract YouTube ID if it's a standard URL
  const getEmbedUrl = (url: string) => {
    try {
      if (url.includes("embed/")) return url;
      if (url.includes("watch?v=")) {
        const id = new URL(url).searchParams.get("v");
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
      if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1]?.split("?")[0];
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
    } catch {
      // Fallback
    }
    return url;
  };

  const embedSrc = getEmbedUrl(videoUrl);

  return (
    <div
      id="video-intro-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative max-w-3xl w-full bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <h3 id="video-modal-title" className="text-sm sm:text-base font-bold text-white">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Video Player */}
        <div className="relative aspect-video bg-black">
          <iframe
            src={embedSrc}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
