function TestimonialsHeading({ heading = "What Our Clients Say", para = "Independent Service Rating based on 3,267 verified reviews." }) {
  return (
    <>
      <h2 className="text-3xl font-serif font-semibold text-center" data-aos="fade-right">
        {heading}
      </h2>
      <p className="text-center text-md" data-aos="fade-right" >{para}</p>
    </>
  );
}


export default TestimonialsHeading;