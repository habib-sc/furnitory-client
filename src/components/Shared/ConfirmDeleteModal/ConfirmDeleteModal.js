import React from 'react';
import Modal from 'react-modal';

const ConfirmDeleteModal = (props) => {
    const { handleItemDelete, handleMyItemDelete, setIsOpen, modalIsOpen, itemId } = props;
       
    const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    };

    // bind modal to appElement
    Modal.setAppElement('#root');

    //   Modal Closing Function 
    function closeModal() {
    setIsOpen(false);
    }

    // Handling delete confirm 
    const handleConfirmDelete = () => {
        // Choosing Truthy function 
        if (handleItemDelete) {
            handleItemDelete(itemId)
        }
        if (handleMyItemDelete) {
            handleMyItemDelete(itemId);
        }
        
        // Clossing Modal 
        closeModal();
    }
          
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            
            <div className='md:w-[400px]'>
                <div>
                    <h2 className='md:text-4xl text-red-500'>Are you sure you want to delete this item?</h2>
                </div>
                <div className='flex justify-start gap-4 mt-5'>
                    <button onClick={handleConfirmDelete} className='flex justify-center items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-400 rounded text-lg'>Ok</button>
                    <button onClick={closeModal} className='flex justify-center items-center text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-400 rounded text-lg'>Cancel</button>
                </div>
            </div>

        </Modal>
    );
};

export default ConfirmDeleteModal;