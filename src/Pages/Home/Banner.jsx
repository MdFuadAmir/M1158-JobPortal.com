import { easeOut, motion } from "motion/react"
import team1 from"../../assets/theme/team1.jpg"
import team2 from"../../assets/theme/team2.jpg"
const Banner = () => {
    return (
        <div className="bg-gray-50 rounded-md">
            <div className="hero max-w-5xl mx-auto  min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex-1">
        <motion.img animate={{y:[40,70,40]}} transition={{duration:10,repeat:Infinity}} src={team1} className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-8 border-b-8 border-blue-500" />

        <motion.img animate={{x:[100,150,100]}} transition={{duration:10,repeat:Infinity,delay:5}} src={team2} className="max-w-sm w-44 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-500" />
    </div>
    <div className="flex-1">
      <motion.h1
      animate={{y:-50}}
      transition={{ duration: 2, delay:1, ease:easeOut,}} 
       className="text-5xl font-semibold">Latest <motion.span animate={{color: ['blue']}}>Job</motion.span> For You!</motion.h1>
       <motion.h1
      animate={{y:-50}}
      transition={{ duration: 2, delay:1, ease:easeOut,}} 
       className="text-5xl font-semibold">to Get Your New Job</motion.h1>
      <motion.p
      animate={{y:-50}}
      transition={{ duration: 2, delay:1, ease:easeOut,}}  className="py-6">
        Each month, more than 3 million job seekers turn to
website in their search for work, making over 140,000
applications every single day
      </motion.p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;