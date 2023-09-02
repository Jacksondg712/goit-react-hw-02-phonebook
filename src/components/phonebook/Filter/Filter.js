import Label from "components/phonebook/label/Label";
import "./Filter.css";


export const Filter = ({name, onFilterChange}) => {
    return(
        <Label labelTitle={"Find contacts by name"}>
            <input className="inputFilter"
                type="text"
                name="filter"
                placeholder="Search name"
                value={name}
                onChange={onFilterChange}
            />
        </Label>
    )
}
