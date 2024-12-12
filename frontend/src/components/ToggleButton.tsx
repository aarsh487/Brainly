interface ToggleSwitchProps {
    label: string;
}

const ToggleSwitch = ({ label }: ToggleSwitchProps) => {
    return (
      <div className="container flex items-center justify-center mt-6">
        <div className="mr-4 mt-3 text-xl font-semibold">{label}{": "}</div>
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" 
                 name={label} id={label} />
          <label className="label" htmlFor={label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    );
  };
  
  export default ToggleSwitch;