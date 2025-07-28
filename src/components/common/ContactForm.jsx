import { Link, useNavigate } from "react-router-dom";
import SubHeading from "./SubHeading";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { companyDetails } from "../../content/constant";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { PiSpinnerGapLight } from "react-icons/pi";

const ContactForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    var emailBody = "Name : " + values.name + "\n\n";
    emailBody += "Email : " + values.email + "\n\n";
    emailBody += "Phone : " + values.phone + "\n\n";
    emailBody += "Message :\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "The Gravity AI Tech",
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          toast.success("Form submitted successfully");
          reset();
          navigate("/thank-you");
        } else {
          toast.error(res.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <section id="contact" className="py-14">
      <div className="wrapper grid md:grid-cols-[55%,1fr] gap-8 md:gap-6">
        <div className="space-y-4">
          <SubHeading heading="Contact Us" className="text-gray-800" />
          <h2 className="text1">Get In Touch</h2>
          <p className="desc text-gray-700">
            Welcome to The Gravity AI Tech, where innovation meets precision in the dynamic digital era. We deliver cutting-edge solutions—from custom software to AI-powered systems—that bring your ideas to life. Whether you are a startup founder, an enterprise executive, Big firm Business owner or an entrepreneur exploring the next frontier, you have come to the right place for all your enquiries.<br /><br />
            Our team thrives on collaboration and creative problem-solving. We understand that every project is unique, so we are here to guide you every step of the way. Let’s start a conversation and explore how we can turn your vision into reality.
            {/* <br /><br />
            <strong>Give Us a Call</strong><br />
            Need real-time answers? Call us at<br />
            +1 903-913-6555 (USA)<br />
            +91 99255 11716 (India)<br />
            Our experts are standing by to discuss your project goals and provide instant support.<br /><br />
            <strong>Email Us</strong><br />
            Prefer to write? Drop us a line at <a href="mailto:info@thegravityaitech.com" className="text-primary underline">info@thegravityaitech.com</a>. We respond quickly with detailed, personalized information to address your specific enquiry.<br /><br />
            <strong>Visit Our Location</strong><br />
            Want to meet face-to-face? Visit our flagship office at:<br />
            5900 Balcones Drive, Suite 100, Austin, Texas 78731, USA<br />
            We serve clients globally, so even if you are halfway around the world, we are ready to connect.<br /><br />
            We operate around the clock to ensure you can reach us whenever inspiration strikes or urgent questions arise.<br /><br />
            <strong>Ready to Get Started?</strong><br />
            Looking for expert AI solutions that push boundaries? Contact Us today and let’s begin crafting your next breakthrough! */}
          </p>
          <div className="flex items-center gap-3">
            <Link to={companyDetails.facebook} target="_blank" className="link">
              <FaFacebook size={40} />
            </Link>
            <Link
              to={companyDetails.instagram}
              target="_blank"
              className="link"
            >
              <AiFillInstagram size={40} />
            </Link>
            <Link to={companyDetails.linkedin} target="_blank" className="link">
              <FaLinkedin size={40} />
            </Link>
            <Link to={companyDetails.youtube} target="_blank" className="link">
              <FaYoutube size={40} />
            </Link>
            <Link to={companyDetails.twitter} target="_blank" className="link">
              <FaXTwitter size={40} />
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-gray-100 p-5 rounded-xl space-y-5 shadow-md"
        >
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                className="bg-white border border-gray-300 p-3 rounded-md w-full outline-none focus:border-primary"
                placeholder="Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <small className="text-red-600">{errors.name?.message}</small>
            </div>
            <div>
              <input
                type="email"
                className="bg-white border border-gray-300 p-3 rounded-md w-full outline-none focus:border-primary"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <small className="text-red-600">{errors.email?.message}</small>
            </div>
          </div>
          <div>
            <input
              type="tel"
              className="bg-white border border-gray-300 p-3 rounded-md w-full outline-none focus:border-primary"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s\-()]{6,14}\d$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="text-red-600">{errors.phone?.message}</small>
          </div>
          <div>
            <input
              type="text"
              className="bg-white border border-gray-300 p-3 rounded-md w-full outline-none focus:border-primary"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="text-red-600">{errors.subject?.message}</small>
          </div>
          <div>
            <textarea
              rows="5"
              className="bg-white border border-gray-300 p-3 rounded-md w-full outline-none focus:border-primary"
              placeholder="How can we help?"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <small className="text-red-600">{errors.message?.message}</small>
          </div>
          <button
            disabled={isSubmitting}
            className="w-full btn-rounded bg-primary text-white hover:bg-white hover:text-primary border border-primary flex justify-center disabled:hover:bg-primary disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <PiSpinnerGapLight size={20} className="animate-spin" />
            ) : (
              "Send Now"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
