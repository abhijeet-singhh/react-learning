import Input from "../Input"

const Colors = ({ handleChange }) => {

  return (
    <div>
      <h2 className="font-semibold my-3">Color</h2>
      <div className="flex flex-col gap-1">

        <Input handleChange={handleChange} value='' title='All' name='test1' color='' />
        <Input handleChange={handleChange} value='black' title='Black' name='test1' color='black' />
        <Input handleChange={handleChange} value='blue' title='Blue' name='test1' color='blue' />
        <Input handleChange={handleChange} value='red' title='Red' name='test1' color='red' />
        <Input handleChange={handleChange} value='green' title='Green' name='test1' color='green' />
      </div>
    </div>
  )
}

export default Colors