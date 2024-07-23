import Advertise from "./_components/Advertise";
import Brands from "./_components/Branding/Brands";
import DailyDeals from "./_components/DailyDeals";
import Events from "./_components/Events";
import Shop from "./_components/Shopping/Shop";

export default function Home() {
  return (
    <main className="w-[94%] mx-auto ">
      <Events />
      <DailyDeals />
      <Shop />
      <Brands />
      <Advertise />
    </main>
  );
}
