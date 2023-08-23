const Home = ({ isBlur }: any) => {
  return (
    <div
      className={`flex flex-col items-center min-h-screen text-white ${
        isBlur && "blur-xs"
      }`}
    >
      Home
    </div>
  );
};

export default Home;
