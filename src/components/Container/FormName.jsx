import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm } from '../../hook/useForm';
function FormName({ onNameChange }) {

    const [formValues, handleInputChange, reset] = useForm({
        name1: '',
        name2: '',
    });

    const { name1, name2 } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        onNameChange(formValues);
        reset();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup hasValidation>
                <InputGroup.Text>Jugador 1</InputGroup.Text>
                <Form.Control
                    type="text"
                    name="name1"
                    value={name1}
                    onChange={handleInputChange}
                    required
                />
            </InputGroup>

            <InputGroup hasValidation>
                <InputGroup.Text>Jugador 2</InputGroup.Text>
                <Form.Control
                    type="text"
                    name="name2"
                    value={name2}
                    onChange={handleInputChange}
                    required

                />
            </InputGroup>

            <Form.Control type="submit" value="Submit" />
        </Form>
    );
}

export default FormName;
