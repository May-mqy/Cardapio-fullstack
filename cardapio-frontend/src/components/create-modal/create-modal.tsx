import { useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import type { FoodData } from "../../interface/FoodData";

interface InputProps {
    label: string,
    value: string | number,
    updateValue: (value: string | number) => void
}

const Input = ({ label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}> </input>       
        </>
    )
}


export function CreateModal() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate} = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            imageUrl: image
        }

        mutate(foodData);
    }

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no Cardápio</h2>

                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle} />
                    <Input label="price" value={price} updateValue={setPrice} />
                    <Input label="image" value={image} updateValue={setImage} />
                    <button type="submit" onClick={submit} className="btn-secundare">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}