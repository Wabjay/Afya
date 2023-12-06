import Card from "../components/Card"
import Profile from "../assets/Profile.png"
const Home = () => {
  return (
    <div className="bg-[#F0F2FA] px-[30px] py-12">
      <p className="text-[28px] font-semibold ">Medical History</p>

      {/* Top card list */}
      <div className='grid grid-cols-auto gap-x-6 mb-6'>
        <Card>
          <div className='grid grid-cols-auto gap-x-3 w-full max-w-[407px]'>
            <img src={Profile} alt="Profile" className='w-[65px] h-[65px]' />
            <div>
              <p className="text-[28px] font-semibold mb-[21px]">Loffi Pearl</p>
              <div className='text-[16px] grid grid-cols-auto gap-x-6'>
                <p className='font-semibold w-fit'>Gender</p>
                <p className='font-medium w-fit'>Female</p>
                <p className='font-semibold w-fit'>Birth</p>
                <p className='font-medium w-fit'>14/05/1980</p>
                <p className='font-semibold w-fit'>Adress</p>
                <p className='font-medium w-fit'>45, Avenue, Lagos Nigeria</p>
                <p className='font-semibold w-fit'>Contact</p>
                <p className='font-medium w-fit'>0810 0000 000</p>

              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className='px-6'>
            <p className="text-[24px] font-semibold mb-[21px] text-[#8842F0]">Symptoms</p>

            <div className='text-[16px] grid grid-cols-2 gap-x-6'>
              <div>
                <p className="text-[28px] font-semibold mb-4">Current Symptoms</p>
                <ul className='list-disc'>
                  <li className='font-semibold w-fit '>Elevated blood pressure readings,
                    occasional headaches.</li>
                  <li className='font-medium w-fit'>Duration:  5 years </li>
                  <li className='font-semibold w-fit'>Severity: Mild to moderate</li>
                </ul> </div>
              <div>
                <p className="text-[28px] font-semibold mb-4">Historical Symptoms</p>
                <ul className='list-disc'>
                  <li className='font-semibold w-fit'>Chronic hypertension symptoms,
                    occasional dizziness.</li>

                </ul> </div>


            </div>
          </div>
        </Card>
      </div>
      {/* Seconf Card list */}
      <div className='grid grid-cols-auto gap-x-6 mb-6'>
        <Card>
          <div className='px-6'>
            <p className="text-[24px] font-semibold mb-[21px] text-[#8842F0]">Medication</p>

            <div className='text-[16px] grid grid-cols-auto gap-x-12'>

              <p className="text-[28px] font-semibold mb-4">Prescribed Medication</p>
              <p className="text-[28px] font-semibold mb-4">Past Medication</p>

              <div className=''>
                <p className='font-medium w-fit'>Amlodipine (5mg)</p>
                <div className='text-[16px] grid grid-cols-auto gap-x-6 mb-8'>
                  <p className='font-semibold w-fit'>Dosage</p>
                  <p className='font-medium w-fit'>Once daily, morning</p>
                  <p className='font-semibold w-fit'>Start date:</p>
                  <p className='font-medium w-fit'>10/03/2018</p>
                  <p className='font-semibold w-fit'>End date:</p>
                  <p className='font-medium w-fit'>N/A</p>
                </div>

                <div>
                  <p className='font-medium w-fit'>Hydrochlorothiazide (12.5mg)</p>
                  <div className='text-[16px] grid grid-cols-auto gap-x-6 mb-8'>
                    <p className='font-semibold w-fit'>Dosage</p>
                    <p className='font-medium w-fit'>Once daily, morning</p>
                    <p className='font-semibold w-fit'>Start date:</p>
                    <p className='font-medium w-fit'>Once daily, evening</p>
                    <p className='font-semibold w-fit'>End date:</p>
                    <p className='font-medium w-fit'>N/A</p>
                  </div>

                </div>

              </div>

              <div className=''>
                <p className='font-medium w-fit'>Enalapril</p>
                <div className='text-[16px] grid grid-cols-auto gap-x-6'>
                  <p className='font-semibold w-fit'>End date:</p>
                  <p className='font-medium w-fit'>N/A</p>
                </div>
              </div>


            </div>
          </div>
        </Card>

        <Card>
          <div className='px-6'>
            <p className="text-[24px] font-semibold mb-[21px] text-[#8842F0]">Family medical history</p>

            <p className="text-[28px] font-semibold mb-4">Health condition</p>
            <div className='text-[16px] grid grid-cols-auto gap-x-6 mb-8'>
              <p className='font-semibold w-fit'>Mother:</p>
              <p className='font-medium w-fit'>Hypertension</p>
              <p className='font-semibold w-fit'>Father:</p>
              <p className='font-medium w-fit'>Diabetes</p>
              <p className='font-semibold w-fit'>Sibiling:</p>
              <p className='font-medium w-fit'>N/A</p>
            </div>
          </div>
        </Card>
      </div>
      {/* Third Card List */}
      <div className='grid grid-cols-auto gap-x-6 mb-6'>
        <Card>
          <div className='px-6 w-ful max-w-[735px]'>
            <p className="text-[24px] font-semibold mb-[21px] text-[#8842F0]">Diagnosis result</p>

            <p className="text-[28px] font-semibold mb-4">Test result</p>
            <div className='text-[16px] grid grid-cols-auto gap-x-6 mb-8'>
              <p className='font-semibold w-fit'>Test type:</p>
              <p className='font-medium w-fit'>Blood pressure monitoring, lipid profile.</p>
              <p className='font-semibold w-fit'>Result:</p>
              <p className='font-medium w-fit'>Blood pressure readings within normal range with medication.
                Lipid profile within acceptable limits.</p>
              <p className='font-semibold w-fit'>How often:</p>
              <p className='font-medium w-fit'>Regularly monitored during medical check-ups.</p>
              <p className='font-semibold w-fit'>Recommendation:</p>
              <p className='font-medium w-fit'>Annual lipid profile and blood pressure check-ups.</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className='px-6'>
            <p className="text-[24px] font-semibold mb-[21px] text-[#8842F0]">Medical Condition</p>

            <ul className='list-disc'>
                  <li className='font-semibold w-fit '>Elevated blood pressure readings,
                    occasional headaches.</li>
                  <li className='font-medium w-fit'>Duration:  5 years </li>
                  <li className='font-semibold w-fit'>Severity: Mild to moderate</li>
                </ul> 
          </div>
        </Card>

      </div>
    </div>
  )
}

export default Home