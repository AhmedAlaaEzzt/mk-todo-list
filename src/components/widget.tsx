function Widget(props: { id: string; text: string }) {
  const { id, text } = props;
  return <div id={id}>{text}</div>;
}

export default Widget;
