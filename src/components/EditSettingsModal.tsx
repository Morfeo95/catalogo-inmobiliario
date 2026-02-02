import { useState } from "react";
import type { Inmobiliaria } from "../types/Inmobiliaria";
import Input from "./ui/Input";
import Button from "./ui/Button";
import theme from "../data/config.json";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

interface Props {
  settings: Inmobiliaria;
  onSave: (data: Inmobiliaria) => void;
  onClose: () => void;
}

export default function EditSettingsModal({
  settings,
  onSave,
  onClose
}: Props) {
  const [formData, setFormData] = useState<Inmobiliaria>({ ...settings });
  const [uploading, setUploading] = useState(false);

  const handleChange = (field: keyof Inmobiliaria, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImage = async (
    field: keyof Inmobiliaria,
    file: File | null
  ) => {
    if (!file) return;

    setUploading(true);
    const url = await uploadToCloudinary(file, "settings");
    setFormData(prev => ({ ...prev, [field]: url }));
    setUploading(false);
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
      <div
        className="w-full max-w-3xl rounded-3xl p-6 shadow-xl"
        style={{
          backgroundColor: theme.background,
          fontFamily: theme.fontBody,
          color: theme.text
        }}
      >
        <h2 className="text-2xl mb-4">Editar ajustes</h2>

        <Input label="Nombre" value={formData.nombre}
          onChange={v => handleChange("nombre", v)} />

        <Input label="Dirección" value={formData.direccion}
          onChange={v => handleChange("direccion", v)} />

        <Input label="WhatsApp" value={formData.whatsapp}
          onChange={v => handleChange("whatsapp", v)} />

        <Input label="Mensaje" value={formData.mensaje}
          onChange={v => handleChange("mensaje", v)} />

        <input type="file" onChange={e =>
          handleImage("logo", e.target.files?.[0] || null)} />

        <input type="file" onChange={e =>
          handleImage("hero", e.target.files?.[0] || null)} />

        <input type="file" onChange={e =>
          handleImage("historyImg", e.target.files?.[0] || null)} />

        {uploading && <p>Subiendo imágenes…</p>}

        <div className="flex justify-between mt-6">
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={() => onSave(formData)}>
            Guardar cambios
          </Button>
        </div>
      </div>
    </section>
  );
}
