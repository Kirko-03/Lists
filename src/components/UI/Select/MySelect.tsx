const style = require("./MySelect.module.css");
type SelectType={
  defaultValue:string
  options:Array<OptionsType>
  value:string
  onChange:(value:string)=>void
}
type OptionsType = {
  value:string
  name:string
};

export const MySelect: React.FC<SelectType> = ({options,defaultValue,value,onChange}) => {
  return (
    <select value={value}  onChange={e=>onChange(e.currentTarget.value)} className={style.sort}>
      <option  disabled value={''}>{defaultValue}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};
