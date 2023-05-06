import React from 'react'



const Contact = () => {
  return (
    <>

    <div className="contact">
        <main>
            <h1 className='h'>
                Contact US</h1>
                <form >
                    <div>
                        <label >Name</label>
                        <input type="text" required placeholder='Your Name' />

                    </div>
                    <div>
                        <label >Email</label>
                        <input type="email" required placeholder='Your Email' />
                        
                    </div>
                    <div>
                        <label >Message</label>
                        <input type="text" required placeholder='Tell Us About Your Query....' />

                        
                    </div>
<button type='submit'>Send</button>
                </form>
            
        </main>
        
    </div>
    
    </>
  )
}

export default Contact