
import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"

const Homesection = () => {

    return (

        <section id="home" className="min-h-screen bg-gradient-to-r
    from-blue-900 to-black flex  lg:flex-row lg:gap-20
    flex-col items-center justify-center
    lg:px-20 px-10 pt-40  
    gap-15 relative overflow-hidden">


            <div className="text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 40,
                        delay: 1,
                        duration: 1.7,
                    }}
                    className="text-5xl  
     font-medium z-10 my-6">
                    Hello,
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 40,
                        delay: 1.2,
                        duration: 1.7,
                    }}
                    className=" text-6xl md:text-7xl lg:text-6xl
    font-bold z-10 mt-5 mb-5">
                    Premchand here!
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 40,
                        delay: 1.4,
                        duration: 1.7,
                    }}
                    className="text-xl text-slate-300 font-light ">
                    I'm a passionate developer specializing in web development,creating user-friendly and innovative solutions.<br /><br />
                    With expertise in React, Vite, and modern JavaScript, I build responsive and dynamic applications to solve real-world problems.
                </motion.p>
                <div
                    className="flex flex-col  md:flex-row md:gap-15">



                    <motion.a
                        href="mailto:prem595pop@gmail.com"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 40,
                            delay: 1.7,
                            duration: 1.7,
                        }}
                        className="h-10 w-60  mt-5 mb-5 flex justify-around items-center text-black rounded-lg text-center bg-gradient-to-r from-white to-gray-400">prem505pop@gmail.com
                        <FiArrowRight />
                    </motion.a>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, z: -50, scale: 0.25 }}
                animate={{ opacity: 1, z: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 40,
                    delay: 1.7,
                    duration: 1.7,
                }}
                className=" my-6 w-60 lg:w-80 ">
                <img src="profile.jpg" alt="" className="w-full h-auto object-cover rounded-lg" />
            </motion.div>







        </section>
    )
}

export default Homesection