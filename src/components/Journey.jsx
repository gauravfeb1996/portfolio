import { Label } from './Label.jsx';

export function Journey() {
  return (
    <section className="journey" id="notes">
      <div>
        <Label>Journey / a short timeline</Label>
        <h2>
          A steady focus
          <br />
          on product and people
        </h2>
      </div>
      <div className="timeline" aria-label="Career timeline">
        <div>
          <b>2018–2021</b>
          <span>
            Navyug Infosolutions
            <br />
            Frontend Developer
          </span>
        </div>
        <div>
          <b>2021</b>
          <span>
            Brevo
            <br />
            Frontend Engineer
          </span>
        </div>
        <div>
          <b>2021–2022</b>
          <span>
            Spinny
            <br />
            Software Development Engineer
          </span>
        </div>
        <div>
          <b>2022–2024</b>
          <span>
            Spinny
            <br />
            Software Development Engineer II
          </span>
        </div>
      </div>
    </section>
  );
}
