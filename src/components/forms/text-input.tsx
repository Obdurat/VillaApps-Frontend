
export default function TextInput({label}: {label: string}) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
  )
}