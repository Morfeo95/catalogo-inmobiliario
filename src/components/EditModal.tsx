import { useState } from "react";
import type { House } from "../types/House";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Select from "./ui/Select";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { emptyHouse } from "../types/EmptyHouse";
import theme from "../data/config.json";
import { createEmptyHouse } from "../types/CreateEmptyHouse";

interface EditModalProps {
  house?: House;
  onSave: (updatedHouse: House) => void;
  onDelete?: (id: number) => void;
  onClose: () => void;
}

export default function EditModal({
  house,
  onSave,
  onDelete,
  onClose
}: EditModalProps) {
  const [formData, setFormData] = useState<House>(
    house ? { ...house } : createEmptyHouse()
  );
  const [uploading, setUploading] = useState(false);

  const handleChange = (field: keyof House, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: typeof value === "string" && 
        ["precio", "recamaras", "banos", "cochera"].includes(field)
        ? Number(value)
        : value
    }));
  };


  const handleImages = async (files: FileList | null) => {
    if (!files) return;

    setUploading(true);

    try {
      const folderName = formData.titulo
        .toLowerCase()
        .replace(/\s+/g, "-");

      const uploads = Array.from(files).map(file =>
        uploadToCloudinary(file, folderName)
      );

      const imageUrls = await Promise.all(uploads);

      setFormData(prev => ({
        ...prev,
        imagenes: imageUrls
      }));
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="fixed inset-0 z-50 flex 
    items-center justify-center bg-white/50 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-3xl rounded-3xl shadow-xl
             max-h-[90vh] flex flex-col"
        style={{
          backgroundColor: theme.background,
          fontFamily: theme.fontBody,
          color: theme.text
        }}
      >

        <div className="overflow-y-auto p-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Titulo" type="text" value={formData.titulo}
              onChange={v => handleChange("titulo", v)} />

            <Input label="Precio" type="number" value={formData.precio.toString()}
              onChange={v => handleChange("precio", v)} />

            <Input label="Zona" type="text" value={formData.zona}
              onChange={v => handleChange("zona", v)} />

            <Input label="Recámaras" type="number" value={formData.recamaras.toString()}
              onChange={v => handleChange("recamaras", v)} />

            <Input label="Baños" type="number" value={formData.banos.toString()}
              onChange={v => handleChange("banos", v)} />

            <Input label="Cochera" type="number" value={formData.cochera.toString()}
              onChange={v => handleChange("cochera", v)} />

            <Select
              label="Tipo de operación"
              value={formData.tipo}
              onChange={v => handleChange("tipo", v)}
              options={[
                { label: "Venta", value: "venta" },
                { label: "Renta", value: "renta" }
              ]}
            />

            <Select
              label="Estatus"
              value={formData.estatus}
              onChange={v => handleChange("estatus", v)}
              options={[
                { label: "Disponible", value: "Disponible" },
                { label: "No disponible", value: "No disponible" }
              ]}
            />

            <Input
              label="Descripción"
              type="text"
              value={formData.descripcion}
              onChange={v => handleChange("descripcion", v)}
            />
            <Input
              label="Link de Google Maps"
              type="text"
              value={formData.mapa || ""}
              onChange={v => handleChange("mapa", v)}
            />

          </div>

          <div className="mt-4">
            <input
              type="file"
              multiple
              accept="image/*"
              disabled={uploading}
              onChange={e => handleImages(e.target.files)}
            />
            {uploading && (
              <p className="text-sm mt-2 opacity-70">
                Subiendo imágenes…
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <Button onClick={onClose}>
              Cancelar
            </Button>

            <div className="flex gap-3">
              {house && house.id !== emptyHouse.id && onDelete && (
                <Button
                  onClick={() => {
                    if (confirm("¿Seguro que deseas eliminar esta propiedad?")) {
                      onDelete(house.id);
                      onClose();
                    }
                  }}
                >
                  Eliminar
                </Button>
              )}

              <Button
                onClick={() => onSave(formData)}
                disabled={uploading}
              >
                {house ? "Guardar cambios" : "Crear registro"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
