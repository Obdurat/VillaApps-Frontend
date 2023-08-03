import React from "react"

export type txtInputParams = {
  label: string,
  placeholder: string,
  controlName: string,
  ctrl: React.ChangeEventHandler<HTMLInputElement>
}

export default function TextInput({label, placeholder, controlName, ctrl}: txtInputParams) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input type="text" name={controlName} placeholder={placeholder} className="input input-bordered w-full max-w-xs" onChange={ctrl} />
    </div>
  )
}