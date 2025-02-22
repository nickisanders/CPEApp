import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './image-viewer.css';
import { Dialog } from '@mui/material';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Button } from '@mui/material';

/**
 * ImageViewer component for displaying an enlarged view of an image when clicked.
 * @param {string} src - The source URL of the image to display.
 * @param {string} alt - Alternate text for the image.
 */
const ImageViewer = ({ URI, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCloseModal = () => {
    // setSelectedNFT(null);
  };

  return (
    <>
      {/* Thumbnail image */}
      {/* <img
        src={src}
        alt={alt}
        className="image-viewer-thumbnail"
        onClick={handleOpen}
      /> */}

      {/* Modal for enlarged image */}
      {/* {isOpen && (
        <div className="image-viewer-modal" onClick={handleClose}>
          <div className="image-viewer-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} className="image-viewer-enlarged" />
            <button className="image-viewer-close" onClick={handleClose}>
              &times;
            </button>
          </div>
        </div>
      )} */}

      {/* Modal for enlarged NFT view */}
      <Dialog open={!!URI} onClose={handleClose} maxWidth="md" fullWidth>
          {URI && (
            <>
              {/* <DialogTitle>{selectedNFT.courseTitle}</DialogTitle> */}
              <DialogContent>
                <img
                  src={URI}
                  alt={altText}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                {/* <Typography variant="body1">
                  <strong>Certificate ID:</strong> {selectedNFT.certificateId}
                </Typography>
                <Typography variant="body1">
                  <strong>Name:</strong> {selectedNFT.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Issuer:</strong> {selectedNFT.issuer}
                </Typography>
                <Typography variant="body1">
                  <strong>Date Issued:</strong>{' '}
                  {new Date(selectedNFT.dateIssued * 1000).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  <strong>Completion Date:</strong>{' '}
                  {new Date(selectedNFT.completionDate * 1000).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  <strong>CPE Hours:</strong> {selectedNFT.cpeHours}
                </Typography> */}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseModal} color="primary">
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
    </>
  );
};

ImageViewer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

ImageViewer.defaultProps = {
  alt: 'Image',
};

export default ImageViewer;

