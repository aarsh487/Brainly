import imgurl from '../assets/images/signupimg2.png';

export const SingupPage = () => {
  return (
    <div className='h-screen w-full bg-slate-100'>
        <div className='w-11/12 flex justify-center shadow-lg rounded-md'>
            {/* left side  */}
            <div className='w-1/2'>
                <div className=''>
                    {/* ICON  */}
                </div>
                <div className='text-center'>
                    <h2>Create Account</h2>
                    <p>signup to view</p>
                </div>
                
            </div>

            {/* RIgntSide */}
            <div className='w-1/2 bg-blue-400 flex flex-col items-center'>
                <img src={imgurl} />
                <div className='text-white text-center mb-8'>
                    <h2>Connect with the brain outside</h2>
                    <p>Everything you need in an easy customization dashboard</p>
                </div>


            </div>
        </div>
    </div>
  )
}
