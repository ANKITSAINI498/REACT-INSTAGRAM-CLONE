import data from "../../data/reels.json";
import ReelItem from "./ReelItem";
import "./Reels.css";

export default function Reels() {
  return (
    <section className="reels-page">

      {data.map((reel) => (

        <ReelItem
          key={reel.id}
          reel={reel}
        />

      ))}

    </section>
  );
}