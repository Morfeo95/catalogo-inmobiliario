import { useState } from "react";
import type { House } from "../types/House";
import HouseCard from "./ui/HouseCard";
import HouseModal from "./HouseModal";

interface HousesProps {
  houses: House[];
  isLoggedIn?: boolean;
  onEdit?: (house: House) => void;
}

export default function Houses({ houses, isLoggedIn, onEdit = () => {} }: HousesProps) {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);

  return (
    <>
      <section className="w-full mt-15">
        <div className="flex gap-3 w-11/12 mx-auto">
          {houses.map(house => (
            <HouseCard
              key={house.id}
              house={house}
              isLoggedIn={isLoggedIn}
              onClick={() => setSelectedHouse(house)}
              onEdit={(h, e) => {
                e.stopPropagation();
                onEdit(h);
              }}
            />
          ))}
        </div>
      </section>

      {selectedHouse && (
        <HouseModal
          {...selectedHouse}
          onClose={() => setSelectedHouse(null)}
        />
      )}
    </>
  );
}
