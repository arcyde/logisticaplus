import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './RotaModal.module.css'

function RotaModal ({ isOpen, closeModal, children, modalTexto }) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Rotas"
         >
            <h2>{modalTexto}</h2>
             <div className={styles.container}>
               <div className={styles.left}>
                
               </div>
               <div className={styles.right}>{children}</div>
             </div>
            
            <button onClick={closeModal}>Fechar Modal</button>
        </Modal>
    );
};

export default RotaModal;