/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";

export const Eager: FunctionComponent<{
  className: string;
  gradients: Record<string, string[]>;
  colors: Record<string, string>;
}> = ({ className, colors, gradients }) => {
  console.log(gradients);
  const { midnight, lobsterLight, white, skyBlue } = colors;
  return (
    <svg className={className} viewBox="0 0 126 126" fill="none">
      <path
        d="M115.694 68.8415V47.0504C115.694 44.8294 113.696 42.1055 111.198 42.1055C108.701 42.1055 106.703 44.8294 106.703 47.0504V37.2444V36.8672C106.703 34.6462 104.705 31.9223 102.207 31.9223C99.7513 31.9223 97.7532 34.6462 97.7116 36.8253V33.6405C97.7116 31.4194 95.7136 28.6956 93.216 28.6956C90.7185 28.6956 88.6788 31.0423 88.7204 33.6405V37.2863H88.6788C88.5123 35.191 86.5975 32.7185 84.2665 32.7185C81.7689 32.7185 79.7709 35.4424 79.7709 37.6634V70.2244C79.7709 70.2244 80.1871 72.7388 79.313 69.8054C78.4389 66.8719 76.6073 64.3995 74.6925 62.0528C73.7352 60.8794 72.7361 59.706 71.4874 58.826C70.2386 57.946 68.6568 57.485 67.1999 57.7364C65.7014 58.0298 63.7866 59.6222 64.1612 61.9689C64.8689 62.8071 65.5349 63.6871 66.1176 64.6509C67.4913 66.83 68.4903 69.2187 69.1147 71.6911C69.7807 74.3731 70.3635 77.2646 70.4051 80.0304C70.4467 83.3829 70.9462 86.5678 71.9869 89.7107C72.9026 92.5603 78.8551 99.6006 84.4746 102.45L84.5162 102.492C84.5162 102.492 84.5162 102.492 84.4746 102.492L85.765 107.269H109.034V106.725L109.075 107.269V103.665C112.655 100.69 115.819 96.1224 116.568 92.0994C117.817 84.8077 116.693 75.7979 115.694 68.8415Z"
        fill={white}
      />
      <path
        d="M85.6818 107.269V103.037C79.7709 100.732 72.9027 92.7697 71.9036 89.7105C70.9046 86.5676 70.4051 83.3827 70.3219 80.0302C70.2802 77.2644 69.6975 74.3729 69.0315 71.6909C68.4487 69.2185 67.4081 66.8298 66.076 64.6507C65.4933 63.7288 64.8273 62.8068 64.1196 61.9687C63.745 59.622 65.7014 58.0296 67.1999 57.7362C68.6985 57.4429 70.2386 57.9876 71.4874 58.8258C72.7362 59.6639 73.7352 60.8373 74.6926 62.0525C76.6074 64.3993 78.4389 66.9136 79.313 69.8051C80.1872 72.6967 80.1423 75.2766 80.1423 78.6964"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M88.7205 62.304L88.7621 33.6822C88.7205 31.084 90.7601 28.7373 93.2577 28.7373C95.7552 28.7373 97.7533 31.4612 97.7533 33.6822V62.304"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M97.7116 36.8673C97.7116 34.6463 99.7097 31.9224 102.207 31.9224C104.705 31.9224 106.703 34.6463 106.703 36.8673V37.2444V64.7767"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M113.113 107.27H81.5192V122.398H113.113V107.27Z"
        fill={skyBlue}
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M87.3052 116.907C88.4546 116.907 89.3865 115.969 89.3865 114.812C89.3865 113.655 88.4546 112.717 87.3052 112.717C86.1557 112.717 85.2239 113.655 85.2239 114.812C85.2239 115.969 86.1557 116.907 87.3052 116.907Z"
        fill={midnight}
      />
      <path
        d="M106.703 47.0504C106.703 44.8294 108.701 42.1055 111.198 42.1055C113.696 42.1055 115.694 44.8294 115.694 47.0504V68.8834C116.693 75.8398 117.817 84.8496 116.443 92.0994C115.694 96.1223 112.53 100.69 108.951 103.665V107.269"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M88.7621 37.6634C88.7621 35.4843 86.7224 32.7185 84.2665 32.7185C81.8106 32.7185 79.7709 35.4424 79.7709 37.6634V71.3952"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M11.426 68.8415V47.0504C11.426 44.8294 13.424 42.1055 15.9216 42.1055C18.4191 42.1055 20.4172 44.8294 20.4172 47.0504V37.2444V36.8672C20.4172 34.6462 22.4152 31.9223 24.9128 31.9223C27.3687 31.9223 29.3667 34.6462 29.4083 36.8253V33.6405C29.4083 31.4194 31.4064 28.6956 33.9039 28.6956C36.4015 28.6956 38.4411 31.0423 38.3995 33.6405V37.2863H38.4411C38.6076 35.191 40.5224 32.7185 42.8535 32.7185C45.351 32.7185 47.349 35.4424 47.349 37.6634V70.2244C47.349 70.2244 46.9328 72.7388 47.8069 69.8054C48.6811 66.8719 50.5126 64.3995 52.4274 62.0528C53.3848 60.8794 54.3838 59.706 55.6326 58.826C56.8813 57.946 58.4631 57.485 59.92 57.7364C61.4186 58.0298 63.3333 59.6222 62.9587 61.9689C62.2511 62.8071 61.5851 63.6871 61.0023 64.6509C59.6286 66.83 58.6296 69.2187 58.0052 71.6911C57.3392 74.3731 56.7565 77.2646 56.7148 80.0304C56.6732 83.3829 56.1737 86.5678 55.1331 89.7107C54.2173 92.5603 48.2648 99.6006 42.6453 102.45L42.6037 102.492C42.6037 102.492 42.6037 102.492 42.6453 102.492L41.3549 107.269H18.0861V106.725L18.0445 107.269V103.665C14.4647 100.69 11.3011 96.1224 10.5519 92.0994C9.3031 84.8077 10.427 75.7979 11.426 68.8415Z"
        fill={white}
      />
      <path
        d="M41.4382 107.269V103.037C47.349 100.732 54.2173 92.7697 55.2163 89.7105C56.2153 86.5676 56.7148 83.3827 56.7981 80.0302C56.8397 77.2644 57.4225 74.3729 58.0885 71.6909C58.6712 69.2185 59.7119 66.8298 61.0439 64.6507C61.6267 63.7288 62.2927 62.8068 63.0003 61.9687C63.3749 59.622 61.4185 58.0296 59.92 57.7362C58.4215 57.4429 56.8813 57.9876 55.6325 58.8258C54.3838 59.6639 53.3848 60.8373 52.4274 62.0525C50.5126 64.3993 48.681 66.9136 47.8069 69.8051C46.9328 72.6967 46.9776 75.2766 46.9776 78.6964"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M38.3995 62.304L38.3578 33.6822C38.3995 31.084 36.3598 28.7373 33.8623 28.7373C31.3647 28.7373 29.3667 31.4612 29.3667 33.6822V62.304"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M29.4083 36.8673C29.4083 34.6463 27.4103 31.9224 24.9127 31.9224C22.4152 31.9224 20.4171 34.6463 20.4171 36.8673V37.2444V64.7767"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M14.0068 107.27H45.6007V122.398H14.0068V107.27Z"
        fill={skyBlue}
        stroke="#32334E"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M39.8148 116.907C38.6653 116.907 37.7335 115.969 37.7335 114.812C37.7335 113.655 38.6653 112.717 39.8148 112.717C40.9642 112.717 41.8961 113.655 41.8961 114.812C41.8961 115.969 40.9642 116.907 39.8148 116.907Z"
        fill={midnight}
      />
      <path
        d="M20.4172 47.0504C20.4172 44.8294 18.4191 42.1055 15.9216 42.1055C13.424 42.1055 11.426 44.8294 11.426 47.0504V68.8834C10.427 75.8398 9.30309 84.8496 10.6767 92.0994C11.426 96.1223 14.5896 100.69 18.1694 103.665V107.269"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M38.3578 37.6634C38.3578 35.4843 40.3975 32.7185 42.8534 32.7185C45.3094 32.7185 47.349 35.4424 47.349 37.6634V71.3952"
        stroke={midnight}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path d="M57 4L63 18L69 4H57Z" fill="#E39D76" stroke="#32334E" />
      <path
        d="M39 16.7385L53.307 21.9643L47.2243 8.00008L39 16.7385Z"
        fill={lobsterLight}
        stroke={midnight}
      />
      <path
        d="M87.4192 16.7385L73.1122 21.9643L79.1949 8.00008L87.4192 16.7385Z"
        fill={lobsterLight}
        stroke={midnight}
      />
    </svg>
  );
};
