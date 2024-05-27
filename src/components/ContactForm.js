import "./ContactformStyles.css"

function ContactForm(){
    return (
        <div className="FormContainer">
            <form>
            <h1>Send Message to Us</h1>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Message" rows={4}/>
            <button>Send Message</button>
            </form>

        </div>
    )
}

export default ContactForm;