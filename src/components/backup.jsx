<form className="flex flex-col justify-center *:flex *:justify-center * lg:gap-y-6 *:flex-wrap">
  {/* name and email  */}
  <div>
    <input type="name" placeholder="Name" className="input input-xl grow" />
    <input
      type="text"
      placeholder="Email"
      className="input validator input-xl grow"
    />
  </div>

  {/* phone number and select field */}
  <div>
    <input
      type="text"
      placeholder="Phone Number"
      className="input input-xl grow"
    />
    <select
      defaultValue="Services of interest"
      className="select select-xl grow text-neutral-500"
    >
      <option disabled={true}>Services of interest</option>
      {serviceOfInterest.map((service) => {
        return <option>{service}</option>;
      })}
    </select>
  </div>

  {/* message & timeline field  */}
  <div>
    <input type="text" placeholder="Timeline" className="input input-xl grow" />
    <textarea
      name="message"
      id="message"
      placeholder="Project Details..."
      className="input mt-7 input-xl grow h-60 resize-none"
    ></textarea>
  </div>

  {/* BUTTON  */}
  <div className="w-full flex justify-start relative">
    <button className="btn mt-10 btn-xl mr-1 btn-outline hover:bg-primary btn-border absolute left-0 opacity-75 translate-x-4">
      Send
    </button>
  </div>
</form>;
