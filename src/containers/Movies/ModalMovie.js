import React, { useState } from "react";
import ModalVideo from "react-modal-video";

function ModalMovie({ key, channel, autoplay, id }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel={channel}
        autoplay={autoplay}
        isOpen={isOpen}
        videoId={key}
        onClose={() => setOpen(false)}
      />
      <button onClick={() => setOpen(!isOpen)}>View</button>
    </>
  );
}

export default ModalMovie;
