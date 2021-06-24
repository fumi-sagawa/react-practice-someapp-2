import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
  children: string;
};

export const Text: VFC<Props> = (props) => {
  const { color, fontSize, children } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
