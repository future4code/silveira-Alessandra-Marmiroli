import React from 'react';
import { Modal } from '@mui/material';
import { BoxModal, ButtonAddCart, SelectQuantity, TitleModal } from './styled';


const ModalSelectQuantity = ({open, setOpen}) => { //  foi feita uma desistruturação open setOpen
    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <BoxModal>
                  <TitleModal>
                    Selecione a quantidade desejada
                  </TitleModal>
                  <SelectQuantity>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </SelectQuantity>
                  <ButtonAddCart>
                    Adicionar ao carrinho
                  </ButtonAddCart>
                </BoxModal>
            </Modal>
        </>
    );
}
export default ModalSelectQuantity;