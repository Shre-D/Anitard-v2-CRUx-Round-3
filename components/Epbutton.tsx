import React, { useState } from "react";

interface Props {
  value: string | number | readonly string[] | undefined;
  getEpisodeNo: (
    number: string | number | readonly string[] | undefined
  ) => void;
}

function Epbutton({ value, getEpisodeNo }: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <button
        className={`${
          selected
            ? "bg-gradient-to-br bg-no-repeat bg-fixed from-purple-800 to-rose-700"
            : "bg-gradient-to-br bg-no-repeat bg-fixed from-pink-800 to-rose-600"
        } cursor-default text-white hover:opacity-80 p-3 w-24 m-2 border-2 border-white rounded-2xl`}
        value={value}
        onClick={() => {
          getEpisodeNo(value);
          setSelected(true);
        }}
      >
        {value}
      </button>
    </div>
  );
}

export default Epbutton;
