import Art from "../components/Art";
import News from "../components/News";
import Quote from "../components/Quote";
import RandomImages from "../components/RandomImages";
import Weather from "../components/Weather";

const Home = () => {
  return (
    <div>
      <Quote />
      <News />
      <Art />
      <Weather />
      <RandomImages />
    </div>
  );
};

export default Home;
