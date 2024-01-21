import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const ProductInfoButton = ({ header, text }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLElement>(null);

    return (
        <>
            <Button size="md" color="blue.200" onClick={onOpen}>
                More Info
            </Button>
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>{header}</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>{text}</AlertDialogBody>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
export default ProductInfoButton;