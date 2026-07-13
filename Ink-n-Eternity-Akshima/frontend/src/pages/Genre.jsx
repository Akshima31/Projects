import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Collection from "../components/Collection";

export default function Genre() {

  const { name } = useParams();

  return (
    <>
      <Header />

      <Collection
        genre={name}
        title={name === "all" ? "Collection" : name.charAt(0).toUpperCase() + name.slice(1)}
      />
    </>
  );
}