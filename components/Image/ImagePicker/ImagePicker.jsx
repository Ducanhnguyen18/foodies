"use client";
import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [image, setImage] = useState();
  const imagePicker = useRef();
  function handleImagePicker() {
    imagePicker.current.click();
  }
  function readFileImage(event) {
    const file = event.files[0];
    console.log(file);
    if (!file) {
      setImage(null);
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {image ? (
            <Image src={image} alt="image picker" fill />
          ) : (
            <p>no image picket yet</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imagePicker}
          onChange={(e) => readFileImage(e.target)}
          required
        />
        <button
          className={classes.button}
          onClick={handleImagePicker}
          type="button"
        >
          Pick Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
