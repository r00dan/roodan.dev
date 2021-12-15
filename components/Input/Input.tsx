import s from './Input.module.css';

interface IProps {
  type: string;
  id: string;
  label?: string;
}

export function Input({
  type,
  id,
  label,
}: IProps) {
  return (
    <div className={s.input_wrapper}>
      <label
        htmlFor={id}
        className={s.label}
      >
        {label || ''}
      </label>
      {
        type === 'textarea' ? (
          <textarea
            className={s.textarea}
            id={id}
          />
        )
          :
          (
            <input
              className={s.input}
              id={id}
              type={type}
            />
          )
      }
    </div>
  )
}
