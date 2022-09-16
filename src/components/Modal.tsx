import { getMediaWidth } from '@/utils/functions';
import { Modal as MantineModal, ModalProps } from '@mantine/core';
import haloBg from '@/assets/halo-of-the-sun.png';

import './modal.css';

export const Modal = (props: ModalProps & { transparent?: boolean }) => {
  const isWide = getMediaWidth();
  return (
    <MantineModal
      centered
      withCloseButton={false}
      {...props}
      size={isWide ? 1050 : 400}
      styles={{
        modal: {
          backgroundColor: props.transparent ? 'transparent' : 'lightgrey',
        },
      }}
    >
      <div className='content'>
        {props.children}
        {props.transparent == undefined && (
          <img
            src={haloBg}
            alt='Halo of the sun logo'
            width={'35%'}
            height={'35%'}
            style={{ opacity: 0.4 }}
          />
        )}
      </div>
    </MantineModal>
  );
};
