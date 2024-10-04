import Button from '@/components/ui/button'

export default function ContactPage() {
    return <div className='page-container'>
        <div className="page-title">
            <h1 className="title">Contact Us</h1>
            <p>Welcome to Contact us page. Keep in Touch With us</p>
        </div>
        <div className="bg-white p-4 rounded-xl w-full max-w-lg mx-12 my-auto"  >
            <form >
                <div className="mb-5">
                    <label className='block mb-2 text-lg' htmlFor="name">Full Name</label>
                    <input
                        className='w-full p-3 rounded-xl border border-mainColor text-lg bg-white outline-none'
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div className="mb-5">
                    <label className='block mb-2 text-lg' htmlFor="email">Email Address</label>
                    <input
                        className='w-full p-3 rounded-xl border border-mainColor text-lg bg-white outline-none'
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                </div>

                <div className="mb-5">
                    <label className='block mb-2 text-lg' htmlFor="subject">Subject</label>
                    <input
                        className='w-full p-3 rounded-xl border border-mainColor text-lg bg-white outline-none'
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter subject"
                        required
                    />
                </div>

                <div className="mb-5">
                    <label className='block mb-2 text-lg' htmlFor="message">Message</label>
                    <textarea
                        className='w-full p-3 rounded-xl border border-mainColor resize-y text-lg bg-white outline-none'
                        id="message"
                        name="message"
                        required
                    ></textarea>
                </div>

                <Button link='#' internalText='Submit' />
            </form>
        </div>

    </div>
}