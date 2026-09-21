import { HiOutlineEnvelope, HiOutlineArrowRight } from 'react-icons/hi2';
import { A } from '../shared/A.jsx';
import { Label } from '../shared/Label.jsx';
import './Contact.css';

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <Label>Let’s connect</Label>
        <h2>
          Let’s build the
          <br />
          difficult workflow.
        </h2>
      </div>
      <div>
        <p>
          Have a project, opportunity or just want to say hello?
          <br />
          I’m always open to a good conversation.
        </p>
        <A className="email" href="mailto:gaurav.verma.1024@gmail.com">
          <HiOutlineEnvelope /> gaurav.verma.1024@gmail.com
        </A>
        <A className="primary" href="mailto:gaurav.verma.1024@gmail.com">
          Send an email <HiOutlineArrowRight />
        </A>
      </div>
    </section>
  );
}
