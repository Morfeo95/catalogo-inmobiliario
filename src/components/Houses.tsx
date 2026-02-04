import { useState, useMemo, useEffect } from "react";
import { useMatch, useNavigate, useLocation } from "react-router-dom";
import type { House } from "../types/House";
import HouseCard from "./ui/HouseCard";
import HouseModal from "./HouseModal";
import FilterBar from "./FilterBar";
import theme from "../data/config.json";

interface HousesProps {
  houses: House[];
  isLoggedIn?: boolean;
  onEdit?: (house: House) => void;
}

function normalizeTipo(t?: string) {
  if (!t) return "venta";
  const s = t.toLowerCase();
  if (s.includes("rent") || s.includes("renta")) return "renta";
  return "venta";
}

export default function Houses({
  houses,
  isLoggedIn,
  onEdit = () => {}
}: HousesProps) {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [filter, setFilter] = useState<"all" | "venta" | "renta">("all");

  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatch("/property/:id");

  const normalized = useMemo(
    () => houses.map(h => ({ ...h, tipo: normalizeTipo(h.tipo) })),
    [houses]
  );

  const openHouse = (h: House) => {
    setSelectedHouse(h);
    navigate(`/property/${h.id}`, { replace: false });
  };

  const closeHouse = () => {
    setSelectedHouse(null);
    if (location.pathname.startsWith("/property/")) {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (!match) return;

    const id = Number(match.params.id);
    if (!Number.isFinite(id)) return;

    const found = normalized.find(h => h.id === id);
    if (found) {
      setSelectedHouse(found);
      return;
    }

    navigate("/", { replace: true });
  }, [match, normalized, navigate]);

  const housesVenta = useMemo(
    () => normalized.filter(h => h.tipo === "venta"),
    [normalized]
  );
  const housesRenta = useMemo(
    () => normalized.filter(h => h.tipo === "renta"),
    [normalized]
  );
  const filtered = useMemo(() => {
    if (filter === "all") return normalized;
    return normalized.filter(h => h.tipo === filter);
  }, [normalized, filter]);

  return (
    <>
      <section id="propiedades" className="w-full mt-15">
        <div className="w-11/12 mx-auto">
          <FilterBar setFilter={setFilter} />

          {filter === "all" ? (
            <>
              {housesVenta.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl mb-3"
                    style={{ color: theme.text, fontFamily: theme.fontBody }}
                  >Propiedades en Venta</h2>
                  <div className="flex flex-wrap gap-3">
                    {housesVenta.map(h => (
                      <HouseCard
                        key={h.id}
                        house={h}
                        isLoggedIn={isLoggedIn}
                        onClick={() => openHouse(h)}
                        onEdit={(hh, e) => {
                          e.stopPropagation();
                          onEdit(hh);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {housesRenta.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl mb-3"
                    style={{ color: theme.text, fontFamily: theme.fontBody }}
                  >Propiedades en Renta</h2>
                  <div className="flex flex-wrap gap-3">
                    {housesRenta.map(h => (
                      <HouseCard
                        key={h.id}
                        house={h}
                        isLoggedIn={isLoggedIn}
                        onClick={() => openHouse(h)}
                        onEdit={(hh, e) => {
                          e.stopPropagation();
                          onEdit(hh);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {housesVenta.length === 0 && housesRenta.length === 0 && (
                <p style={{ color: theme.text, fontFamily: theme.fontBody }}>
                  No hay propiedades para mostrar.
                </p>
              )}
            </>
          ) : (
            <div className="flex flex-wrap gap-3">
              {filtered.map(h => (
                <HouseCard
                  key={h.id}
                  house={h}
                  isLoggedIn={isLoggedIn}
                  onClick={() => openHouse(h)}
                  onEdit={(hh, e) => {
                    e.stopPropagation();
                    onEdit(hh);
                  }}
                />
              ))}
              {filtered.length === 0 && (
                <p style={{ color: theme.text, fontFamily: theme.fontBody }}>
                  No hay propiedades para mostrar.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {selectedHouse && (
        <HouseModal
          {...selectedHouse}
          onClose={closeHouse}
        />
      )}
    </>
  );
}
