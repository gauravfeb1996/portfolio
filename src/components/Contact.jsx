import { HiOutlineEnvelope, HiOutlineArrowRight } from 'react-icons/hi2';
import { A } from './A.jsx';
import { Label } from './Label.jsx';

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
        <A className="email" href="mailto:gauravverma.dev@gmail.com">
          <HiOutlineEnvelope /> gauravverma.dev@gmail.com
        </A>
        <A className="primary" href="mailto:gauravverma.dev@gmail.com">
          Send an email <HiOutlineArrowRight />
        </A>
      </div>
    </section>
  );
}
