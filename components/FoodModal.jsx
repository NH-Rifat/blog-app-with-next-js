import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLink } from 'react-icons/ai';

function FoodModal({ setIsOpen, modalIsOpen, details }) {
  // console.log(details);

  const customStyles = {
    content: {
      // display:'flex',
      // justifyContent:'center',
      // alignItems:'center',
      top: '25%',
      left: '35%',
      backgroundColor: 'white',
      height: '500px',
      width: '500px',
    },
  };

  const {
    id,
    item_img,
    item_name,
    category,
    des,
    post_date_time,
    blogger_name,
    blogger_prof,
    blogger_img,
    contact,
    email,
  } = details;
  // console.log(
  //   id,
  //   item_img,
  //   item_name,
  //   category,
  //   des,
  //   post_date_time,
  //   blogger_name,
  //   blogger_prof,
  //   blogger_img,
  //   contact,
  //   email
  // );

  // let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='flex justify-between'>
          <div className=''>
            <img src={blogger_img} alt='' width={200} height={100} />
            <p className='mt-4 font-semibold'>{blogger_name}</p>
            <p className='mt-4'>{email}</p>
            <p className='mt-4'>{contact}</p>
            <p className='mt-4'>{blogger_prof}</p>
            <p className='mt-4'>{post_date_time}</p>
          </div>
          <div className=''>
            <button onClick={closeModal}>
              <ImCross></ImCross>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FoodModal;
