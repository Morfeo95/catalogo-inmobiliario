import { useState, useEffect } from "react";
import Houses from "./Houses";
import EditModal from "./EditModal";
import data from "../data/houses.json";
import type { House } from "../types/House";
import theme from "../data/config.json";
import { Plus } from "lucide-react";
import { getInitialHouses } from "../utils/getInitialHouses";
import Button from "./ui/Button";
import { createEmptyHouse } from "../types/CreateEmptyHouse";

export default function EditHouses({ isLoggedIn = false }) {
  const [houses, setHouses] = useState<House[]>([]);
  const [editingHouse, setEditingHouse] = useState<House | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("houses");
    setHouses(stored ? JSON.parse(stored) : data);
  }, []);
    useEffect(() => {
    setHouses(getInitialHouses());
    }, []);
  

  const saveHouse = (house: House) => {
    setHouses(prev => {
      const index = prev.findIndex(h => h.id === house.id);

      let updated: House[];

      if (index >= 0) {
        updated = prev.map(h => (h.id === house.id ? house : h));
      } else {
        updated = [...prev, house];
      }

      localStorage.setItem("houses", JSON.stringify(updated));
      setEditingHouse(null);
      return updated;
    });
  };


  const deleteHouse = (id: number) => {
    setHouses(prev => {
      const updated = prev.filter(h => h.id !== id);
      localStorage.setItem("houses", JSON.stringify(updated));
      return updated;
    });

    setEditingHouse(null);
  };
  const downloadJSON = () => {
    const json = JSON.stringify(houses, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "houses.json";
    a.click();

    URL.revokeObjectURL(url);
  };



  return (
    <article>
      <div className="flex justify-center items-center gap-15">
        <Houses
          houses={houses}
          isLoggedIn={isLoggedIn}
          onEdit={setEditingHouse}
        />

        <button
          onClick={() => setEditingHouse(createEmptyHouse())}
          className="p-4 rounded-full hover:scale-110 active:scale-95 transition"
          style={{
            backgroundColor: theme.primary,
            color: theme.textHover
          }}
        >
          <Plus />
        </button>
      </div>

      {editingHouse && (
        <EditModal
          house={editingHouse}
          onSave={saveHouse}
          onDelete={deleteHouse}
          onClose={() => setEditingHouse(createEmptyHouse())}
        />
      )}
      <div className="flex justify-center mt-10">
        <Button
          onClick={downloadJSON}
          disabled={!houses.length}
        >
          Descargar JSON
        </Button>
      </div>

    </article>
  );
}
