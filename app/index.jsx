import { Redirect } from "expo-router";

const HomePage = () => {
  return <Redirect href={"/signin/"}></Redirect>
}

export default HomePage;