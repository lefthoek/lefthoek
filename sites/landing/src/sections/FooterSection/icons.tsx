/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Blog: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <Link to="/blog" sx={{ lineHeight: 0 }}>
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.994 9.095l2.974-2.884c.144-.14.331-.211.516-.211.188 0 .375.073.518.22l-4.032 3.911c-.283-.294-.268-.752.024-1.036zm-4.49 8.819c-.06.057-.136.086-.212.086-.168 0-.304-.137-.304-.304 0-.079.031-.159.093-.218l.5-.485.422.436-.499.485zm4.034-2.386c-.919.891-1.796 1.333-3.013 1.728l-.754-.779c.433-1.205.901-2.067 1.819-2.958l1.71-1.657 1.946 2.009-1.708 1.657zm6.965-6.483l-4.402 4.269-2.218-2.29 4.402-4.27c1.016-.984 2.703-.246 2.703 1.146 0 .416-.162.832-.485 1.145z" />
      </svg>
    </Link>
  );
};

const Email: FunctionComponent<{ className?: string; email: string }> = ({
  className,
  email,
}) => {
  return (
    <a
      sx={{ lineHeight: 0 }}
      href={`mailto:${email}?subject=Mail from our Website`}
    >
      <svg className={className} viewBox="0 0 24 24">
        <path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z" />
      </svg>
    </a>
  );
};

const LinkedIn: FunctionComponent<{ className?: string; url: string }> = ({
  className,
  url,
}) => {
  return (
    <a sx={{ lineHeight: 0 }} target="_blank" href={url}>
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
      </svg>
    </a>
  );
};

const Slack: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <a
      href="https://slack.com/oauth/v2/authorize?scope=incoming-webhook&client_id=1648737748640.2152796719617"
      target="_blank"
      sx={{ lineHeight: 0 }}
    >
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM7.96875 13.8268C7.96875 14.5714 7.36607 15.1768 6.62143 15.1768C6.26518 15.1768 5.92232 15.0348 5.66786 14.7804C5.41607 14.5259 5.27411 14.183 5.27411 13.8268C5.27411 13.0821 5.87679 12.4768 6.62143 12.4768H7.96875V13.8268ZM11.558 17.4268C11.558 18.1714 10.9554 18.7768 10.2107 18.7768C9.46607 18.7768 8.86339 18.1714 8.86339 17.4268V13.8268C8.86339 13.0821 9.46607 12.4768 10.2107 12.4768C10.567 12.4768 10.9098 12.6187 11.1643 12.8732C11.4187 13.1277 11.558 13.4705 11.558 13.8268V17.4268ZM10.2134 11.5768H6.62411C5.87946 11.5768 5.27679 10.9714 5.27679 10.2268C5.27679 9.48214 5.87946 8.87679 6.62411 8.87679H10.2134C10.958 8.87679 11.507 9.48214 11.5607 10.2268C11.558 10.9741 10.9554 11.5768 10.2134 11.5768ZM10.2134 7.97679C9.85714 7.97679 9.51429 7.83482 9.25982 7.58036C9.00536 7.32589 8.86607 6.98571 8.86607 6.62679C8.86607 5.88214 9.46875 5.27679 10.2134 5.27679C10.958 5.27679 11.5607 5.88214 11.5607 6.62679V7.97679H10.2134V7.97679ZM12.4554 6.62679C12.4554 5.88214 13.058 5.27679 13.8027 5.27679C14.5473 5.27679 15.15 5.88214 15.15 6.62679V10.2268C15.15 10.9714 14.5473 11.5768 13.8027 11.5768C13.058 11.5768 12.4554 10.9714 12.4554 10.2268V6.62679V6.62679ZM13.8027 18.7768C13.058 18.7768 12.4554 18.1714 12.4554 17.4268V16.0768H13.8027C14.5473 16.0768 15.15 16.6821 15.15 17.4268C15.15 18.1714 14.5473 18.7768 13.8027 18.7768ZM17.392 15.1768H13.8027C13.4464 15.1768 13.1036 15.0348 12.8491 14.7804C12.5946 14.5259 12.4554 14.1857 12.4554 13.8268C12.4554 13.0821 13.058 12.4768 13.8027 12.4768H17.392C18.1366 12.4768 18.7393 13.0821 18.7393 13.8268C18.7393 14.5714 18.1366 15.1768 17.392 15.1768ZM17.392 11.5768H16.0446V10.2268C16.0446 9.48214 16.6473 8.87679 17.392 8.87679C18.1366 8.87679 18.7393 9.48214 18.7393 10.2268C18.7393 10.9714 18.1366 11.5768 17.392 11.5768Z" />
      </svg>
    </a>
  );
};

export { Blog, Email, LinkedIn, Slack };
