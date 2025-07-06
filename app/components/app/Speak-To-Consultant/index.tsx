import AppButton from "@/app/shared/app-button";


const SpeakToConsultant = () => {
  return (
    <>
      <div className="w-full h-[200px] flex justify-center items-center my-20">
        <AppButton
          btnText={'Speak to One of Our Consultants'}
          fill={'fill'}
          bgColor={'primary'}
          width={"max"}
        />
      </div>
    </>
  )
}
export default SpeakToConsultant;