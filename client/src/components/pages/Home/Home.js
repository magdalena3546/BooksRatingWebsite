import Header from "../../views/Header/Header";
import SectionFriends from "../../views/SectionFriends/SectionFriends";
import SectionIntroduction from "../../views/SectionIntroduction/SectionIntroduction";

const Home = () => {
  return (
    <>
      <Header />
      <SectionIntroduction />
      <SectionFriends />
    </>
  );
};

export default Home;
