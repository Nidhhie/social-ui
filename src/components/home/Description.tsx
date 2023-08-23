const Description = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  return (
    <div className="mb-4">
      <div className="text-font-gray-light text-xl">{heading}</div>
      <div className="text-font-gray">{content}</div>
    </div>
  );
};
export default Description;
