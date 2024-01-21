import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {useState} from "react";
const PasswordInput = (props) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <InputGroup size="md">
            <Input {...props} type={show ? "text" : "password"} />
            <InputRightElement width="4.5rem">
                <Button size="xs" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}
export default PasswordInput
