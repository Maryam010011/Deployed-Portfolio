export default function About() {
  return (
    <section className="sec" id="about">
      <p className="slbl">A little about me</p>
      <h2 className="stitle">More than just code</h2>
      <div className="about-g">
        <div>
          <p className="rv">
            I'm a second-year Computer Science student at Air University, Islamabad who
            stumbled into frontend development and never looked back. Building something
            people can actually see and use — that's what got me hooked.
          </p>
          <p className="rv">
            Outside the classroom, I've spent a lot of time teaching tutoring Physics,
            Chemistry, and CS to school students, making hard concepts feel less scary.
            That experience changed how I think about UI: <strong>good design is just good explanation.</strong>
          </p>
          <p className="rv">
            I'm deeply involved in communities pushing for more women in tech. Through
            MLSA's Women in Tech domain and AUCIS, I help organize events, document them,
            and make sure people feel welcome.
          </p>
          <p className="rv">
            When I'm not staring at code, I'm probably hiking, reading, or slowly learning
            Chinese (Summer Jam 2025 — I have the certificate to prove it).
          </p>
        </div>
        <div className="acards">
          <div className="acard rv"><h4>Currently</h4><p>B.S. Computer Science · Air University, Islamabad · 2nd Year</p></div>
          <div className="acard rv2"><h4>Home / Study</h4><p>From Lahore — currently in Islamabad for studies. Open to remote roles and part time jobs.</p></div>
          <div className="acard rv"><h4>Languages</h4><p>English (fluent) · Urdu (native) · Chinese &amp; Turkish (learning)</p></div>
          <div className="acard rv2"><h4>Interests</h4><p>Frontend dev · UI/UX · Data analytics · Teaching · Women in tech · Badminton · Hiking</p></div>
        </div>
      </div>
    </section>
  );
}
