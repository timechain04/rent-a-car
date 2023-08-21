import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SelectError, SelectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

function Modal({ onCloseModal, modalData }) {
  const isLoading = useSelector(SelectIsLoading);
  const error = useSelector(SelectError);

  const handleClickBtnClose = () => {
    onCloseModal();
  };

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

