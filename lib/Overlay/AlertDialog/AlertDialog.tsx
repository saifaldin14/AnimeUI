import React from "react";

type AnimeAlertDialogProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  show: boolean;
};

export const AlertDialog: React.FC<AnimeAlertDialogProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
  show,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Dialog Container */}
      <div className="relative bg-white rounded-lg shadow-lg w-80">
        {/* Cute Anime Character */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="relative w-32 h-32">
            {/* Face */}
            <div className="absolute inset-0 bg-pink-200 rounded-full"></div>
            {/* Eyes */}
            <div className="absolute left-8 top-10 w-4 h-4 bg-black rounded-full"></div>
            <div className="absolute right-8 top-10 w-4 h-4 bg-black rounded-full"></div>
            {/* Blush */}
            <div className="absolute left-6 bottom-8 w-5 h-2 bg-pink-400 rounded-full"></div>
            <div className="absolute right-6 bottom-8 w-5 h-2 bg-pink-400 rounded-full"></div>
            {/* Mouth */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 w-2 h-2 bg-black rounded-full"></div>
            {/* Sparkles */}
            <div className="absolute top-2 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping"></div>
          </div>
        </div>
        {/* Dialog Content */}
        <div className="px-6 py-8 pt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 font-anime">{title}</h2>
          <p className="text-gray-700 mb-6">{message}</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 rounded-md font-bold hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-pink-500 text-white rounded-md font-bold hover:bg-pink-600 transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
