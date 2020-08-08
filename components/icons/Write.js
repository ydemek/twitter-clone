import * as React from "react";

function SvgWrite(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8.8 5.673H5.6v-3.6c0-.437-.3-.873-.8-.873s-.7.436-.7.873v3.6H.8c-.4 0-.8.327-.8.872 0 .546.3.873.8.873h3.3v3.6c0 .436.3.873.8.873s.8-.328.8-.873V7.31H9c.4 0 .8-.327.8-.873 0-.545-.5-.763-1-.763zm15-5.346V.218h-.1c-.1 0-9.2 1.31-14.4 12.764-3.8 8.29-3.6 10.8-3.3 10.8.3.109 3.4-7.091 6.7-10.037 5.2-1.2 6.6-3.927 6.6-3.927s-1.5.218-2.1.218c-.8 0-1.4-.218-1.7-.327 1.3-1.31 2.4-1.636 3.5-1.855.9-.218 1.8-.436 3-1.309 2.2-1.745 1.9-6 1.8-6.218z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWrite;