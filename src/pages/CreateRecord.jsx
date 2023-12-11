import FormCard from "../components/FormCard"
import { useState } from 'react';



const Create = () => {

  const [formData, setFormData] = useState({
    name: "",
    physician: "",
    mother: "",
    father: "",
    sibling: "",
    surgery: "",
    genetic: "",
    condition: "",
  });


const addRecord = ()=>{

}

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


  return (
    <div className="bg-[#F0F2FA] px-[30px] py-12">
     <FormCard heading="Add health history" subheading="Health status">
   <form onSubmit={addRecord}>
   <div className="laptop:grid laptop:grid-cols-2 laptop:gap-y-6 laptop:gap-x-12 desktop:grid-cols-3 justify-between">
    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Healthcare physician</p>
      <input
          name="physician"
            placeholder="Enter physician here"
            value={formData.physician}
              onChange={(e) => handleChange(e)}
              className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg"
          />
    </div>
    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Healthcare name</p>
      <input
          name="physician"
            placeholder="Enter physician here"
            value={formData.name}
              onChange={(e) => handleChange(e)}
              className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg"
          />
    </div>
    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Medical condition</p>
      <input
          name="physician"
            placeholder="Enter physician here"
            value={formData.condition}
              onChange={(e) => handleChange(e)}
              className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg"
          />
    </div>
    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Surgery</p>
      <select  name="surgery" className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg">
  <option value="no">No</option>
  <option value="yes">Yes</option>
</select>
    </div>
    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Surgery Type</p>
      <select  name="surgery-type" className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg text-[#AFB2BE] custom-select">
  <option value="none">None</option>
  <option value="saab">Yes</option>
</select>
    </div>

    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Allergies</p>
      <input
          name="physician"
            placeholder="Enter physician here"
            value={formData.allergies}
              onChange={(e) => handleChange(e)}
              className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg"
          />
    </div>
</div>

    <div>
    <p className="text-[#000] text-[24px] font-bold my-12">Family medical history</p>
    <div className="laptop:grid laptop:grid-cols-2 laptop:gap-y-6 laptop:gap-x-12 desktop:grid-cols-3 justify-between">
    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Mother</p>
      <input
          name="physician"
            placeholder="Enter physician here"
            value={formData.mother}
              onChange={(e) => handleChange(e)}
              className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg"
          />
    </div>
    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Father</p>
      <input
          name="physician"
            placeholder="Enter physician here"
            value={formData.father}
              onChange={(e) => handleChange(e)}
              className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg"
          />
    </div>
    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Sibling</p>
      <input
          name="physician"
            placeholder="Enter physician here"
            value={formData.sibling}
              onChange={(e) => handleChange(e)}
              className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg"
          />
    </div>
    <div className="">
      <p className="text-[16px] font-semibold text-[#000] mb-3">Genetic condition</p>
      <input
          name="physician"
            placeholder="Enter physician here"
            value={formData.genetic}
              onChange={(e) => handleChange(e)}
              className="w-full h-[60px] p-[10px] border border-[#AFB2BE] rounded-lg"
          />
    </div>
    </div>
    </div>
   </form>
      </FormCard>
    </div>
  )
}

export default Create