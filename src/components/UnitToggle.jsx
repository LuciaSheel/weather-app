const UnitToggle = ({ unit, setUnit }) => {
  return (
    <div className="unit-toggle">
      <button onClick={() => setUnit("C")} className={unit === "C" ? "active" : ""}>
        °C
      </button>
      <button onClick={() => setUnit("F")} className={unit === "F" ? "active" : ""}>
        °F
      </button>
    </div>
  );
};

export default UnitToggle;
