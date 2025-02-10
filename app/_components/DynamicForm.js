'use client';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

export default function DynamicForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      items: [{ name: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <Controller
              name={`items.${index}.name`}
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => append({ name: '' })}>
        Add Item
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
