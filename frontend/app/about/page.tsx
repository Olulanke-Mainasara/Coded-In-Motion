import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { ABOUT_QUERY, options } from "@/lib/queries";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

interface PricingType {
  title: string;
  duration: string;
  price: string;
}

interface PricingPlan {
  _id: string;
  title: string;
  description: string;
  types: PricingType[];
}

interface Testimonial {
  name: string;
  quote: string;
  avatarUrl?: string;
}

const AboutUs = async () => {
  const about = await client.fetch<SanityDocument>(ABOUT_QUERY, {}, options);

  if (!about) {
    return null;
  }

  return (
    <>
      <main className="mt-20 px-4">
        <section className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-2/5 h-[40dvh] md:h-[60dvh] xl:h-[61dvh] relative">
            {about.imageUrl && (
              <Image
                src={about.imageUrl}
                alt={about.alt || "About Us"}
                width={600}
                height={600}
                className="rounded-xl rounded-b-none w-full h-full object-cover object-bottom"
              />
            )}
            <div className="absolute flex flex-col justify-end inset-0 p-4 bg-gradient-to-b from-transparent to-black text-right lg:text-left">
              <p className="md:text-lg">The talent behind the shutter</p>
              <p className="text-5xl lg:text-6xl">Lanre My Ski</p>
            </div>
          </div>

          <div className="lg:w-3/5">
            <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold capitalize">
              {about.title}
            </h1>
            <p className="mt-4 md:text-xl text-neutral-400">
              {about.description}
            </p>
          </div>
        </section>

        {/* Pricing */}
        {about.pricing?.length > 0 && (
          <section className="my-40">
            <h2 className="text-5xl md:text-7xl text-center">What We Offer</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {about.pricing.map((plan: PricingPlan, index: number) => (
                <div
                  key={plan._id}
                  className={`border rounded-lg p-6 ${
                    index % 2 ? "bg-white text-black" : ""
                  }`}
                >
                  <h3 className="text-4xl capitalize">{plan.title}</h3>
                  <hr className="my-3" />
                  <p
                    className={`${
                      index % 2 ? "text-neutral-600" : "text-neutral-400"
                    } mb-3`}
                  >
                    {plan.description}
                  </p>
                  <ul className="space-y-1 text-lg">
                    {plan.types.map((t: PricingType, i: number) => (
                      <li key={i}>
                        {t.title} ({t.duration}):{" "}
                        <span className="font-semibold">{t.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testimonials */}
        {about.testimonials?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Testimonials</h2>
            <div className="mt-4 space-y-6">
              {about.testimonials.map((t: Testimonial, i: number) => (
                <div key={i} className="flex gap-4 items-center">
                  {t.avatarUrl && (
                    <Image
                      src={t.avatarUrl}
                      alt={t.name}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <p className="italic">{`"${t.quote}"`}</p>
                    <p className="font-semibold mt-1">- {t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        <section className="mt-40 scroll-m-28" id="contact">
          <h2 className="text-5xl md:text-7xl text-center">Get In Touch</h2>
          <p className="mt-4 text-center text-neutral-400 md:text-lg max-w-2xl mx-auto">
            Have a project in mind, an event you&apos;d like to capture or just
            want to say hi? Fill out the form below and we&apos;ll get back to
            you as soon as possible.
          </p>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
