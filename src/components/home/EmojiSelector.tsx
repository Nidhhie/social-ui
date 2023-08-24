import { useEffect, useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const EmojiSelector = ({ setEmoji, emoji }: { setEmoji: any; emoji: any }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<any>(emoji);

  const handleEmojiClick = (emoji: any) => {
    setSelectedEmoji(emoji);
    setEmoji(emoji);
    setShowPicker(false);
  };

  useEffect(() => {
    setSelectedEmoji(emoji);
  }, [emoji]);

  return (
    <div className="absolute left-4 top-3 emoji-selector">
      <button
        className="w-10 h-10 bg-gray-dark-500 text-xl rounded-full"
        onClick={() => setShowPicker(!showPicker)}
      >
        {selectedEmoji ? <span>{selectedEmoji.native}</span> : "💬"}
      </button>
      {showPicker && (
        <div className="emoji-picker">
          <Picker data={data} onEmojiSelect={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default EmojiSelector;
