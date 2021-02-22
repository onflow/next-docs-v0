import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import xw from "xwind";

export const Logo = () => {
  const { theme } = useContext(ThemeContext);
  const darkText = "#000";
  const lightText = "#FFF";

  const isDark = theme === "dark";
  return (
    <svg
      css={xw`h-8`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 382.43 104.63"
    >
      <g id="Layer_1" data-name="Layer 1">
        <path
          fill={isDark ? lightText : darkText}
          d="M140.76,52.2h-6.44v24h-9v-24h-4.65V44.49h4.65v-3c0-7.77,4.85-11.76,12.23-11.76a15.84,15.84,0,0,1,3.39.4v9a8.42,8.42,0,0,0-3.06-.59,3.28,3.28,0,0,0-3.52,3.52v2.39h6.44Zm13.56,24h-9.1V30.4h9.1Z"
        />
        <path
          fill={isDark ? lightText : darkText}
          d="M174.52,42.5a17.24,17.24,0,1,1-17.21,17.21A17,17,0,0,1,174.52,42.5Zm0,25.64c4.65,0,8-3.85,8-8.43s-3.32-8.38-8-8.38a8.41,8.41,0,0,0,0,16.81Z"
        />
        <path
          fill={isDark ? lightText : darkText}
          d="M201.23,43.16l5.84,22,5.85-17.47-1.59-4.52h9l7.71,22,5.72-22h9.36l-9.83,33.09h-9.43l-6.58-18.14-6.11,18.14h-9.5l-9.77-33.09Z"
        />
        <circle fill="#00ef8b" cx="53.08" cy="52.32" r="50" />
        <rect fill="#FFF" x="60.91" y="44.49" width="14.12" height="14.12" />
        <path
          fill="#FFF"
          d="M46.79,63.9a5.3,5.3,0,1,1-5.29-5.29h5.29V44.49H41.5A19.42,19.42,0,1,0,60.91,63.9V58.61H46.79Z"
        />
        <path
          fill="#FFF"
          d="M66.2,37.43H82.08V23.32H66.2A19.43,19.43,0,0,0,46.79,42.73v1.76H60.91V42.73A5.31,5.31,0,0,1,66.2,37.43Z"
        />
        <polygon
          fill="#16ff99"
          points="46.79 58.61 60.91 58.61 60.91 58.61 60.91 44.49 60.91 44.49 46.79 44.49 46.79 58.61"
        />
        <path
          fill={isDark ? lightText : darkText}
          d="M282.47,68.52A14.55,14.55,0,0,1,269,76.82c-9.44,0-16.52-7.35-16.52-16.93S259.6,43,269,43a14.63,14.63,0,0,1,13.43,8.37V29.6h3.85V76.15h-3.85Zm-13-21.72a13.12,13.12,0,1,0,13,13.09A12.86,12.86,0,0,0,269.52,46.8Z"
        />
        <path
          fill={isDark ? lightText : darkText}
          d="M308,43a16.59,16.59,0,0,1,16.87,16.87A16.87,16.87,0,1,1,308,43Zm0,30a13.12,13.12,0,1,0-12.88-13.15A12.87,12.87,0,0,0,308,73Z"
        />
        <path
          fill={isDark ? lightText : darkText}
          d="M355.12,74.19a16.9,16.9,0,1,1-9-31.17,17.27,17.27,0,0,1,9,2.5V50a13.84,13.84,0,0,0-9-3.17,13.12,13.12,0,0,0,0,26.24,14.33,14.33,0,0,0,9-3.1Z"
        />
        <path
          fill={isDark ? lightText : darkText}
          d="M378.06,49.3a12.1,12.1,0,0,0-7.62-2.77c-4.05,0-6.34,2.09-6.34,5,0,2.09,1.14,3.24,3.44,4.66L373.81,60c4.32,2.63,5.53,5.33,5.53,8.16,0,5.53-4.38,8.7-10.79,8.7a17.92,17.92,0,0,1-8.37-2.16V70.14a12.54,12.54,0,0,0,8.37,3.24c4.32,0,6.81-2.16,6.81-5.19,0-2-1-3.44-4-5.2l-6.47-4c-3.38-2-4.79-4.45-4.79-7.49,0-4.72,3.5-8.5,10.39-8.5a15.53,15.53,0,0,1,7.55,1.89Z"
        />
      </g>
    </svg>
  );
};