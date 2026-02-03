import { useEffect, useState } from "react";
import Hero from "./Hero";
import EditSettingsModal from "./EditSettingsModal";
import type { Inmobiliaria } from "../types/Inmobiliaria";
import data from "../data/inmobiliaria.json";
import { defaultSettings } from "../types/EmptyInmobiliaria";

interface EditSettingsProps {
  isLoggedIn: boolean;
}

export default function EditSettings({ isLoggedIn }: EditSettingsProps) {
  const [settings, setSettings] = useState<Inmobiliaria>(defaultSettings);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("settings");
    setSettings(stored ? JSON.parse(stored) : data);
  }, []);

  const saveSettings = (updated: Inmobiliaria) => {
    localStorage.setItem("settings", JSON.stringify(updated));
    setSettings(updated);
    setEditing(false);
  };

  const downloadJSON = () => {
    const json = JSON.stringify(settings, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "inmobiliaria.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <article>
      <Hero
        settings={settings}
        isLoggedIn={isLoggedIn}
        onEdit={() => setEditing(true)}
        onDownload={downloadJSON}
      />

      {editing && (
        <EditSettingsModal
          settings={settings}
          onSave={saveSettings}
          onClose={() => setEditing(false)}
        />
      )}
    </article>
  );
}