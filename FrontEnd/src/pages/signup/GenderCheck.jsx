const GenderCheck = ({ onCheckBoxChange, selectGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text">Male</span>
          <input
            checked={selectGender === "male"}
            onChange={() => onCheckBoxChange("male")}
            type="checkbox"
            className="checkbox checkbox-info"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "female" ? "selected" : ""
          } `}
        >
          <span className="label-text">Female</span>
          <input
            checked={selectGender === "female"}
            onChange={() => onCheckBoxChange("female")}
            type="checkbox"
            className="checkbox checkbox-info"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
