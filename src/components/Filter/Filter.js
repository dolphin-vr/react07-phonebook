import { useDispatch, useSelector } from "react-redux";
import { InputFilter, Label, Wrapper } from "./Filter.styled"
import { handleFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";


export const Filter = () =>{
   const filter = useSelector(selectFilter);
   const dispatch = useDispatch();
   return (
      <Wrapper>
         <Label>
            Find contacts by name
            <InputFilter value={filter} onChange={ev => dispatch(handleFilter(ev.target.value))} />
         </Label>
      </Wrapper>
   )
}