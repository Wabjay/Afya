
const FormCard = ({children, heading, subheading}) => {
  return (
    <div className='rounded-lg bg-white p-[14px] text-[16px] font-medium'>
      <p className="text-[#8842F0] text-[28px] leading-[32.84px] font-semibold mb-[22px]">{heading}</p>
      {subheading && <p className="text-[#000] text-[24px] font-bold mb-12">{subheading}</p>}
{children}
    </div>
  )
}

export default FormCard