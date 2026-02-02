import { useEffect, useState } from "react";
import HistoryCard from "./ui/HistoryCard";
import EditHistoryModal from "./EditHistoryModal";
import data from "../data/histories.json";
import type { History } from "../types/History";
import { emptyHistory } from "../types/EmptyHistory";
import theme from "../data/config.json";
import { Plus } from "lucide-react";

interface EditHistoriesProps {
  isLoggedIn: boolean;
}

export default function EditHistories({ isLoggedIn }: EditHistoriesProps) {
  const [histories, setHistories] = useState<History[]>([]);
  const [editingHistory, setEditingHistory] = useState<History | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("histories");
    setHistories(stored ? JSON.parse(stored) : data.histories);
  }, []);

  const saveHistory = (history: History) => {
    setHistories(prev => {
      const exists = prev.some(h => h.id === history.id);
      const updated = exists
        ? prev.map(h => (h.id === history.id ? history : h))
        : [...prev, history];

      localStorage.setItem("histories", JSON.stringify(updated));
      setEditingHistory(null);
      return updated;
    });
  };

  const deleteHistory = (id: number) => {
    const updated = histories.filter(h => h.id !== id);
    localStorage.setItem("histories", JSON.stringify(updated));
    setHistories(updated);
    setEditingHistory(null);
  };

  const downloadJSON = () => {
    const json = JSON.stringify({ histories }, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "histories.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <article>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {histories.map(h => (
          <HistoryCard
            key={h.id}
            name={h.title}
            date={h.date}
            history={h.history}
            isLoggedIn={isLoggedIn}
            onEdit={() => setEditingHistory(h)}
          />
        ))}

        <button
          onClick={() => setEditingHistory(emptyHistory)}
          className="p-4 rounded-full hover:scale-110 transition"
          style={{ backgroundColor: theme.primary }}
        >
          <Plus />
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={downloadJSON}
          className="px-6 py-3 rounded-xl font-semibold"
          style={{
            backgroundColor: theme.secondary,
            color: theme.textHover
          }}
        >
          Descargar JSON
        </button>
      </div>

      {editingHistory && (
        <EditHistoryModal
          history={editingHistory}
          onSave={saveHistory}
          onDelete={deleteHistory}
          onClose={() => setEditingHistory(null)}
        />
      )}
    </article>
  );
}
