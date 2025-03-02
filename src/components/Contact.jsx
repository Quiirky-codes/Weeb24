import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from "./canvas";
import { sectionWrapper } from "../HOC";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_px8ny3m', 
      'template_fp11jq6',
        {
          from_name: form.name,
          to_name: 'Amith M Jain',
          from_email: form.email,
          to_email: 'amithmjain007@gmail.com',
          message: form.message,
        },
          'zy6x_ETfJ_0MJskeG')
          .then(() => {
            setLoading(false);
          alert('Thank you for volunteering.');
          setForm({
            name: '',
            email: '',
            message: '',
          })
          }, (error) => {
            setLoading(false);
            console.log(error);
            alert('OOPS! Something Went Wrong.')
          })

  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween",0.2,1)}
        className="flex-[0.75] bg-gray-700 p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Lend a helping hand</p>
          <h3 className={styles.sectionHeadText}>Connect.</h3>
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8">
            <label className='flex flex-col'>
            <span className='text-white font-bold mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </label>
            <label className='flex flex-col'>
            <span className='text-white font-bold mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </label> 
            <label className='flex flex-col'>
            <span className='text-white font-bold mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Thank you for reaching out, please let me know the details of your message.'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
              
              <button 
                type="submit"
                className="bg-[#2e8e57] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </motion.div>
        <motion.div
          variants={slideIn('right',"tween",0.2,1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-350px]">
              <EarthCanvas/>
            </motion.div>
    </div>
  )
}

export default sectionWrapper(Contact,"contact")