import { LoadingCard } from "./style";

const Loading = () => (
  <LoadingCard>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </LoadingCard>
);

export default Loading;
