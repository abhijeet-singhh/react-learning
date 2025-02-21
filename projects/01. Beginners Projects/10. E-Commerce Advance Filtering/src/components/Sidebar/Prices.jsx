import Input from "../Input"

const Prices = ({ handleChange }) => {

  return (
    <div>
      <h2 className="font-semibold my-3">Price</h2>
      <div className="flex flex-col gap-1">

        <Input handleChange={handleChange} value='' title='All' name='test2' />
        <Input handleChange={handleChange} value='50' title='$0 - $50' name='test2' />
        <Input handleChange={handleChange} value='100' title='$50 - $100' name='test2' />
        <Input handleChange={handleChange} value='150' title='$100 - $150' name='test2' />
        <Input handleChange={handleChange} value='200' title='above $150' name='test2' />
      </div>
    </div>
  )
}

export default Prices