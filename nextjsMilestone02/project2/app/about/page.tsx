import EducationBar from "../component/ui/educationBar"
import React from 'react'


const About = () => {

    const skills = {
        "TypeScript": "75%",
        "JavaScript": "80%",
        "GitHub": "84%",
        "UI/UX": "86%",
        "React": "54%",
        "NextJS": "47%",
    }
    return (
        <div className="h-[91vh] pt-10">
            <div className="border border-primary w-4/5 min-h-[800px] rounded-xl m-auto shadow-lg shadow-primary max-[450px]:w-full max-md:pb-10">
                <div className="title">
                    <h1>ABOUT <span>ME</span></h1>
                </div>
                <div className="container">
                    <div className="h-[700px] w-[40%] max-[1400px]:w-full max-[450px]:w-[90%]">
                        <h1 className="text-3xl text-center pt-5 border-b border-b-primary pb-2"><span>E</span>ducation</h1>
                        <div className="flex w-full">
                            <EducationBar></EducationBar>

                            <div className="h-[600px] w-4/5 max-[450px]:pl-4">
                                <h1 className="pt-[45px] text-xl text-start max-[450px]:text-lg">Matric 2011 - 2023</h1>
                                <h1 className="pt-[97px] text-xl text-start max-[450px]:text-lg">Intermediate 2023 - 2025</h1>
                                <h1 className="pt-[97px] text-xl text-start max-[450px]:text-lg">SoftWare Engineering from NED 2025 - ..</h1>
                                <h1 className="pt-[97px] text-xl text-start max-[450px]:text-lg">Comming Soon..</h1>
                            </div>
                        </div>
                    </div>

                    <div className="h-[700px] w-[40%] max-[1400px]:w-full">
                        <h1 className="text-3xl text-center pt-5 border-b border-b-primary pb-2 mb-10"><span>S</span>kills</h1>
                        {Object.entries(skills).map((skill, index) => {
                            return <div key={index} className="h-[60px] w-full mt-5">
                                <div className="h-[30%] w-[90%] flex m-auto justify-between text-xl">
                                    <h3>{skill[0]}</h3>
                                    <h3>{skill[1]}</h3>

                                </div>
                                <div className="h-[20px] w-[90%] border border-primary rounded-[100px] m-auto mt-2">
                                    <div className="h-full bg-primary rounded-[100px]"
                                        style={{ width: skill[1] }}></div>
                                </div>

                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About