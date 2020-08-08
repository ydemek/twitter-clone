import * as React from "react";

function SvgList(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21.3 24H2.7A2.704 2.704 0 010 21.3V2.7C0 1.212 1.212 0 2.7 0h18.6C22.788 0 24 1.212 24 2.7v18.6c0 1.488-1.212 2.7-2.7 2.7zM2.7 1.8c-.497 0-.9.404-.9.9v18.6c0 .496.403.9.9.9h18.6c.497 0 .9-.404.9-.9V2.7c0-.496-.403-.9-.9-.9H2.7z"
        fill="currentColor"
      />
      <path
        d="M18 7.968H6a.901.901 0 010-1.8h12a.9.9 0 110 1.8zm0 4.932H6a.9.9 0 010-1.8h12a.9.9 0 010 1.8zm-6 4.932H6a.9.9 0 110-1.8h6a.901.901 0 010 1.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgList;
