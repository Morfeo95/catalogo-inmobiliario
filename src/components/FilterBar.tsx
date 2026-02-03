import Button from "./ui/Button";

interface FilterBarProps {
  setFilter: (f: "all" | "venta" | "renta") => void;
}

export default function FilterBar({ setFilter }: FilterBarProps) {
  return (
    <div className="flex gap-2 items-center mb-4">
      <Button
        onClick={() => setFilter("all")}
        
      >
        Todas
      </Button>

      <Button
        onClick={() => setFilter("venta")}
      >
        Venta
      </Button>

      <Button
        onClick={() => setFilter("renta")}
      >
        Renta
      </Button>
    </div>
  );
}
