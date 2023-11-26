const ContactInfo = ({ isHired }) => {
    return (
        <div className={`fixed bg-dark text-white p-[20px] h-[100px]
        shadow-md rounded-md left-1/2 top-1/2 -translate-x-1/2
        -translate-y-1/2 
        dark:bg-white dark:text-dark
            opacity-0 
            transition-opacity
            duration-1000
            ${isHired && "opacity-100"}

        `}>
            <p className="mb-3">Phone : 01003607928</p>
            <p className="mb-3">Email : mido221gyefue@gmail.com</p>
            
        </div>
    );
};

export default ContactInfo;
