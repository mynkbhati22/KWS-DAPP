import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import './upload.css';

export default function UploadImages() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <div className="outerbox" style={{ marginTop: '5rem' }}>
        <div className="innerbox">
          {' '}
          <div className="upload-image">
            <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <>
                  <div className="upload__image-wrapper">
                    <button
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                      className="button"
                    >
                      Click or Drop here
                    </button>
                    &nbsp;
                    <button onClick={onImageRemoveAll} className="button">
                      Remove all images
                    </button>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image.data_url} alt="" width="100" style={{ margin: '1rem auto' }} />
                        <div className="image-item__btn-wrapper">
                          <button onClick={() => onImageUpdate(index)} className="button">
                            Update
                          </button>
                          <button className="button" onClick={() => onImageRemove(index)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div {...dragProps}>
                    {isDragging ? 'Drop here please' : 'Upload space'}
                    {imageList.map((image, index) => (
                      <img key={index} src={image.data_url} alt="" />
                    ))}
                  </div> */}
                </>
              )}
              {/* {({ imageList, dragProps, isDragging }) => (
          <div {...dragProps}>
            {isDragging ? 'Drop here please' : 'Upload space'}
            {imageList.map((image, index) => (
              <img key={index} src={image.data_url} alt="" />
            ))}
          </div>
        )} */}
            </ImageUploading>
          </div>
        </div>
        {/* <div className="" style={{margin:"1rem auto"}}>
    <button className='' style={{margin:"1rem auto"}}>UPLOAD</button>
        </div> */}
      </div>
    </>
  );
}
