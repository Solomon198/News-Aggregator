import MainHeader from "./components/Header";

export default function App() {
  return (
    <>
      <MainHeader
        logoUrl="/images/logo.jpeg"
        rightButtonText="Personalize"
        searchPlaceHolder="Search news ..."
      />
    </>
  );
}
