

const ContactForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="name" /> <br/>
        <input type="text" placeholder="email" /> <br/>
        <textarea placeholder="message"></textarea> <br/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
