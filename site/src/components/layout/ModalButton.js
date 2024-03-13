import React, { useState } from 'react';
import RotaModal from './Modal';
import styles from './LinkButton.module.css'
import VChart from './VChart';

function ButtonModal({ texto, data, modalTexto }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button className={styles.btn} onClick={openModal}>{texto}</button>
            {modalIsOpen && (
               <RotaModal modalTexto={modalTexto} isOpen={modalIsOpen} closeModal={closeModal}>
                
               <div className={styles.modal}>

                  <VChart data={data} />
                  
                  
               </div>
           </RotaModal>
            )}
            
        </div>
        
    );
};

export default ButtonModal;