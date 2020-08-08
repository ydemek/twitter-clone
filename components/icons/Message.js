import * as React from "react";

function SvgMessage(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20.7.023H3.3C1.48.023 0 1.649 0 3.65v16.47c0 2 1.48 3.628 3.3 3.628h17.4c1.82 0 3.3-1.628 3.3-3.629V3.65c0-2-1.48-3.627-3.3-3.627zM3.3 2h17.4c.828 0 1.5.738 1.5 1.647v.941l-9.66 7.075a.9.9 0 01-1.08-.003L1.8 4.588v-.94C1.8 2.737 2.472 2 3.3 2zm17.4 19.768H3.3c-.828 0-1.5-.738-1.5-1.647V6.906l8.688 6.366c.46.337.986.506 1.512.506a2.55 2.55 0 001.512-.505L22.2 6.907v13.21c0 .91-.672 1.647-1.5 1.647v.004z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessage;
