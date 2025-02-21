import Input from "../Input"

const Categories = ({handleChange}) => {

  return (
    <div>
      <h2 className="font-semibold my-2">Category</h2>
      <div className="flex flex-col gap-1">

        <Input handleChange={handleChange} value='' title='All' name='test' />
        <Input handleChange={handleChange} value='sneakers' title='Sneakers' name='test' />
        <Input handleChange={handleChange} value='flats' title='Flats' name='test' />
        <Input handleChange={handleChange} value='sandals' title='Sandals' name='test' />
        <Input handleChange={handleChange} value='heels' title='Heels' name='test' />
      </div>
    </div>
  )
}

export default Categories