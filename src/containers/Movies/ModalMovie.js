import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { FiPlayCircle } from "react-icons/all";

function ModalMovie({ videoId, channel, id, image }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        key={id}
        channel={channel}
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <div className="card">
        <img src={image} alt={channel} />
        <button onClick={() => setOpen(!isOpen)}>
          <FiPlayCircle size={70} color="white" />
        </button>
      </div>
    </>
  );
}

export default ModalMovie;
