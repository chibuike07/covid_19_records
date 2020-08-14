import React from "react";

const Input = ({
  name,
  list,
  onChange,
  placeholder,
  value,
  isRequired,
  type,
  className,
  outLine,
  id,
  paddingLeft,
  border,
  borderRadius,
  width,
  height,
  borderTop,
  borderBottom,
  backgroundColor,
  color,
  opacity,
  isRefs,
  autoComplete,
  autoCorrect,
  spellCheck,
  readOnly,
  onInput,
<<<<<<< HEAD
  onFocus,
=======
>>>>>>> 9b2cca0a5e6c1b18338461e0d7320faf4f96659b
}) => {
  return (
    <input
      style={{
        outline: outLine ? outLine : "none",
        paddingLeft: paddingLeft ? paddingLeft : null,
        width: width ? width : null,
        border: border ? border : null,
        borderRadius: borderRadius ? borderRadius : null,
        borderTop: borderTop ? borderTop : null,
        borderBottom: borderBottom ? borderBottom : null,
        height: height ? height : null,
        color: color ? color : null,
        backgroundColor: backgroundColor ? backgroundColor : null,
        opacity: opacity ? opacity : null,
      }}
      type={type ? type : "text"}
      list={list ? list : null}
      placeholder={placeholder ? placeholder : null}
      onChange={onChange}
      value={value ? value : ""}
      className={className ? className : "custom-input"}
      name={name}
      required={isRequired ? isRequired : null}
      id={id ? id : null}
      ref={isRefs ? isRefs : null}
      autoComplete={autoComplete ? autoComplete : null}
      autoCorrect={autoCorrect ? autoCorrect : null}
      spellCheck={spellCheck ? spellCheck : null}
      readOnly={readOnly ? readOnly : null}
      onInput={onInput ? onInput : null}
<<<<<<< HEAD
      onFocus={onFocus ? onFocus : null}
=======
>>>>>>> 9b2cca0a5e6c1b18338461e0d7320faf4f96659b
    />
  );
};

export default Input;
