import { GlobeIcon, LockClosedIcon, FileTextIcon } from "@radix-ui/react-icons"

const Hero = () => {
  return (
    <>
      <main>
        <section className="lg:mt-32">
            <h1 className="lg:mx-auto lg:w-fit lg:text-4xl mb-36 font-semibold">Fast, Secure, Cloud Storage <i className="fa-solid fa-cloud fa-2xl" style={{color: "#74C0FC"}}></i></h1>
            <section className="flex justify-evenly">
                <div className="border border-radixgray-700 lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/6 rounded-xl text-center lg:h-64">
                    <GlobeIcon/>
                    <p>Fast file uploads with secure file storage integration</p>
                </div>
                <div className="border border-radixgray-700 lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/6 rounded-md text-center lg:h-64 card-wrapper">
                    <div className="card-content lg:flex lg:justify-center lg:items-center lg:flex-col">
                       <LockClosedIcon/>
                        <p>Advanced password protection, ensuring top level security</p>
                    </div>
                </div>
                <div className="border border-radixgray-700 lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/6 rounded-xl text-center lg:h-64">
                    <FileTextIcon/>
                    <p>Organize files into custom folders</p>
                </div>
            </section>
        </section>
    </main>
    </>
  )
}

export default Hero