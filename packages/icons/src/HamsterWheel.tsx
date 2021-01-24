/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const HamsterWheel: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <rect
        className="skyBlueLightest thinStroke join"
        x="145.5179"
        y="334.3723"
        width="142.4327"
        height="22.8893"
        rx="11.4446"
        transform="translate(624.8546 344.8349) rotate(121.9388)"
      />
      <rect
        className="skyBlueLightest thinStroke join"
        x="233.8728"
        y="334.3723"
        width="142.4327"
        height="22.8893"
        rx="11.4446"
        transform="translate(437.1582 -96.0276) rotate(58.0612)"
      />
      <path
        className="skyBlueMedium thinStroke join"
        d="M261.1484,245.81a28.7688,28.7688,0,1,0,28.7687,28.7688A28.7689,28.7689,0,0,0,261.1484,245.81Zm0,41.4541a12.6852,12.6852,0,1,1,12.6852-12.6853A12.6852,12.6852,0,0,1,261.1484,287.2638Z"
      />
      <path
        className="lobster thinStroke join"
        d="M261.1481,122.1124a136.97,136.97,0,1,1-136.97,136.97A136.9718,136.9718,0,0,1,261.1481,122.1124Zm111.89,136.97a111.89,111.89,0,1,0-111.89,111.89A111.888,111.888,0,0,0,373.0381,259.0824Z"
      />
      <circle
        className="noFill thinStroke join"
        cx="261.1481"
        cy="259.0824"
        r="136.97"
      />
      <path
        className="noFill thinStroke join"
        d="M261.1481,370.9724a111.885,111.885,0,1,1,111.89-111.89A111.89,111.89,0,0,1,261.1481,370.9724Z"
      />
    </svg>
  );
};
