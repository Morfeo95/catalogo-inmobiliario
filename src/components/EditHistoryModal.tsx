import { useState } from "react";
import type { History } from "../types/History";
import { emptyHistory } from "../types/EmptyHistory";
import Input from "./ui/Input";
import Button from "./ui/Button";

interface Props {
  history: History;
  onSave: (history: History) => void;
  onDelete?: (id: number) => void;
  onClose: () => void;
}

export default function EditHistoryModal({
  history,
  onSave,
  onDelete,
  onClose
}: Props) {
  const [formData, setFormData] = useState<History>(
    history ? { ...history } : { ...emptyHistory }
  );

  const handleChange = (field: keyof History, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-full max-w-xl flex flex-col gap-4">
        <Input label="Título" value={formData.title} onChange={v => handleChange("title", v)} />
        <Input label="Fecha" type="date" value={formData.date} onChange={v => handleChange("date", v)} />
        <textarea
          className="border rounded-xl p-3"
          value={formData.history}
          onChange={e => handleChange("history", e.target.value)}
        />

        <div className="flex justify-between mt-4">
          <Button onClick={onClose}>Cancelar</Button>

          <div className="flex gap-2">
            {onDelete && history.id !== emptyHistory.id && (
              <Button onClick={() => onDelete(history.id)}>Eliminar</Button>
            )}
            <Button onClick={() => onSave(formData)}>Guardar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
