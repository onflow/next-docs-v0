import xw from "xwind";
import { BsChatDots } from "react-icons/bs";

const FeedbackWidget = () => {
  return (
    <div css={xw`text-sm flex items-center`}>
      <div css={xw`pr-2`}>Feedback</div>
      <BsChatDots />
    </div>
  );
};
