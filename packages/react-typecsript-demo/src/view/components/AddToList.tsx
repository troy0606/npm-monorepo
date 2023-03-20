import React, { useState } from "react";
import IProps from "../../models/interfaces/ICommon";
import TPerson from "../../models/types/TPerson";

interface IAddToList extends IProps {
  setPeople: React.Dispatch<React.SetStateAction<TPerson[]>>;
}

const AddToList: React.FC<IAddToList> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (): void => {
    const { name, age, img, note } = input;
    if (!name || !age || !img) return;

    setPeople([...people, { name, age: parseInt(age), img, note }]);
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};
export default AddToList;
