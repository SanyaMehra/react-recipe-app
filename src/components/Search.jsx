import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched" + input);
    };

    return (
        <FormStyle onSubmit = {submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input
                    onChange = {(e) => setInput(e.target.value)}
                    type = "text" 
                    value = {input} 
                />
                <h1>{input}</h1>
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    // margin: 0rem 20rem;
    // div {
    //     position: relative;
    //     width: 100%;
    // }
    // input {
    //     border: none;
    //     background: linear-gradient(35 deg, #494949, #313131);
    //     font-size: 1.5 rem;
    //     color: white;
    //     padding: 1rem 3rem;
    //     border: none;
    //     border-radius: 1rem;
    //     outline: none;
    // }
    // svg {
    //     position: absolute;
    //     top: 50%;
    //     left: 0%;
    //     transform: translate(100%, -50%);
    //     color: white;
    // }

    input {
        padding-left: 50px;
        color: $color-gray-one;
        box-shadow: 2px 3px 28px 1px rgba(0,0,0,0.5);
        border: 0px solid transparent;
        border-radius: 5px;

        height: 50px;
        width: 300px;
        font-size: 30px;

        &::placeholder {
            color: #B3B3B3;
        }
    }
`;

export default Search;
