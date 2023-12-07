import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import PostItem from "./PostItem";
import axios from "axios";

const Convert = ({curencys}) => {

    const [resp, setResp] = useState();
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [opt1, setOpt1] = useState('RUB');
    const [opt2, setOpt2] = useState('RUB');
    async function changeCurency(){
        const responce = await axios.get('http://localhost:8080/api?amount='+ value1 +'&from='+ opt1 +'&to='+ opt2)
        setValue2(Math.round(Number(responce.data)))
    }

    return (
        <div>
            <div className="converter">
                <div>
                    <p>{opt1}</p>
                    <InputGroup size="lg" className="input">
                        <Form.Control style={{fontSize: "45px"}}
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            value={value1}
                            onChange={event => setValue1(event.target.value)}
                            />
                    </InputGroup>
                </div>
                <div>
                    <img  onClick={changeCurency} style={{height: '70px', marginTop:'91px', marginBottom:'15px'}} src="https://cdn-icons-png.flaticon.com/512/21/21122.png" />
                </div>
                <div>
                    <p>{opt2}</p>
                    <InputGroup size="lg" className="input">
                        <Form.Control style={{fontSize: "45px"}}
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            value={value2}
                            readOnly={true}
                        />
                    </InputGroup>
                </div>
            </div>
                <div className="buttons">
                    <Form.Select
                        onChange={event => setOpt1(event.target.value)}
                        aria-label="Default select example" style={{width:"25%"}}>
                        {curencys.map(curency =>
                            <option value={curency.name} key ={curency.id}>{curency.name}</option>
                        )}
                    </Form.Select>
                    <Form.Select
                        onChange={event => setOpt2(event.target.value)}
                        aria-label="Default select example" style={{width:"25%"}}>
                        {curencys.map(curency =>
                            <option value={curency.name} key ={curency.id}>{curency.name}</option>
                        )}
                    </Form.Select>
                    <Button onClick={changeCurency} variant="primary" size="lg" className="button">
                        перевести
                    </Button>
                </div>
        </div>
    );
};

export default Convert;