import Link from "next/link";
import Image from "next/image";

import Image1 from "/assets/png/image 21.png";
import Image2 from "/assets/png/image 100.png";
import Image3 from "/assets/png/image 8.png";
import Image4 from "/assets/png/image 72.png";
import Image5 from "/assets/png/image 108.png";
import Image6 from "/assets/png/image 103.png";
import AvatarGroup from "/assets/png/Avatar group.png";
import AI from "/assets/svg/Frame 10.svg";
import Stars from "/assets/svg/Stars.svg";
import Microphone from "/assets/svg/microphone-01.svg";
import Recorder from "/assets/svg/video-recorder.svg";
import Monitor from "/assets/svg/monitor-01.svg";
import Smile from "/assets/svg/face-smile.svg";
import Message from "/assets/svg/message-text-circle-02.svg";
import Setting from "/assets/svg/settings-01.svg";

import Shopify from "/assets/svg/Shopify.com svg.svg";
import CoinBase from "/assets/svg/Coinbase svg.svg";
import DropBox from "/assets/svg/Dropbox svg.svg";
import InterCom from "/assets/svg/Intercom svg.svg";
import Marvel from "/assets/svg/Marvel svg.svg";
import Automatic from "/assets/svg/Automattic svg.svg";

import HD from "/assets/svg/video-recorder.svg";
import Audio from "/assets/svg/recording-01.svg";
import Calendar from "/assets/svg/calendar.svg";
import Security from "/assets/svg/lock-unlocked-04.svg";
import Collage from "/assets/png/image-group.png";
import Mockup from "/assets/png//screen mockup.png";

const Home = () => {
  const featuresData = [
    {
      image: HD,
      title: "Crystal-clear HD video",
      description:
        "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
    },
    {
      image: Audio,
      title: "Noise-canceling audio",
      description:
        "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
    },
    {
      image: Calendar,
      title: "Scheduling made easy",
      description:
        "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
    },
    {
      image: Security,
      title: "Bank-grade security",
      description:
        "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
    },
  ];

  const faqs = [
    {
      question: "How many participants can join a ClearLink video conference?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      question: "Can I use ClearLink on multiple devices?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question:
        "Is ClearLink compatible with other video conferencing platforms?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question:
        "How does ClearLink ensure the security of my video conferences?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "Do I need to download any software to use ClearLink?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "What kind of customer support does ClearLink provide?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
  ];

  return (
    <section>
      {/* hero */}
      <div className="relative">
        <div className="max-w-screen-xl mx-auto px-4 py-24 gap-12 text-gray-600 overflow-hidden md:px-8 lg:flex justify-between">
          <div className="flex-1 space-y-8 max-w-max">
            <h1 className="text-4xl text-[#1D2939] font-semibold sm:text-7xl">
              Uniting the world, one video call at a time
            </h1>
            <p className="text-[#667085] max-w-lg">
              Experience the future of communication with ClearLink – where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
            <div className="md:flex items-center gap-x-3 sm:text-sm">
              <Link
                href="/"
                className="flex items-center justify-center gap-x-1 py-4 px-7 text-white text-lg font-medium bg-[#175CD3]/90 duration-150 hover:bg-[#175CD3] active:bg-gray-900 rounded-full md:inline-flex"
              >
                Start your free trial
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-lg text-[#175CD3] hover:text-[#175CD3]/90 font-medium duration-150 md:inline-flex"
              >
                <Image src={AI} /> {""} {""}
                Discover AI assistant
              </Link>
            </div>

            <div className="flex gap-4">
              <Image src={AvatarGroup} alt="avatar group" />
              <span>
                <span className="flex gap-2">
                  <Image src={Stars} alt="stars" />
                  <p className="text-[#344054] text-base font-semibold">5.0</p>
                </span>
                <p className="text-base text-[#475467] font-medium">
                  from 3,000+ reviews
                </p>
              </span>
            </div>
          </div>

          {/* images */}
          <div className="flex-none hidden md:block md:mt-10 lg:mt-0">
            <div className="max-w-max bg-[#EFF8FF] rounded-3xl p-8 border border-[#B2DDFF] shadow-2xl ">
              <div className="grid gap-10 grid-cols-3">
                <span className="bg-[#FF9C66] w-max rounded-xl">
                  <Image src={Image1} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#D6BBFB] w-max rounded-xl">
                  <Image src={Image2} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#ACDC79] w-max rounded-xl">
                  <Image src={Image3} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#B3B8DB] w-max rounded-xl">
                  <Image src={Image4} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#FEC84B] w-max rounded-xl">
                  <Image src={Image5} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#FEA3B4] w-max rounded-xl">
                  <Image src={Image6} width={100} height={100} alt="Image" />
                </span>
              </div>
              {/* icons */}
              <div className="flex gap-2 justify-center mt-8">
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Microphone} className="w-5" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Recorder} className="w-5" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Monitor} className="w-5" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Smile} className="w-5" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Message} className="w-5" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Setting} className="w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* logos */}
      <div className="px-4 md:px-8 max-w-screen-xl mx-auto py-24 ">
        <p className="text-center text-xl text-[#475467] font-semibold">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
          <Image src={Shopify} className="max-w-[10rem]" alt="Shopify" />
          <Image src={CoinBase} className="max-w-[10rem]" alt="CoinBase" />
          <Image src={DropBox} className="max-w-[10rem]" alt="Dropbox" />
          <Image src={InterCom} className="max-w-[10rem]" alt="Intercom" />
          <Image src={Marvel} className="max-w-[10rem]" alt="Marvel" />
          <Image src={Automatic} className="max-w-[10rem]" alt="Automattic" />
        </div>
      </div>

      {/* The ClearLink Advantage */}
      <div className=" max-w-screen-xl mx-auto px-4 md:px-8 lg:px-4 py-24 space-y-20">
        <div className="space-y-2">
          <p className="text-[#175CD3] text-lg font-semibold">
            The ClearLink Advantage
          </p>
          <h2 className="text-[#1D2939] text-5xl font-semibold">
            Why choose ClearLink?
          </h2>
          <p className="text-[#667085] max-w-xl">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>

        <div className="lg:flex justify-between gap-16 text-[#475467]">
          {/* grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="p-4 max-w-14 bg-[#F9FAFB] border border-[#EAECF0] rounded-full">
                  <Image src={feature.image} />
                </div>
                <p className="font-semibold text-[#101828] text-2xl">
                  {feature.title}
                </p>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          {/* Collage */}
          <div className="md:flex-none hidden lg:block">
            <Image src={Collage} />
          </div>
        </div>
      </div>

      {/* CTA section */}
      {/* <div className=" max-w-screen-xl mx-auto px-4 md:px-8 lg:px-4 py-24 space-y-20">
        <div className="flex justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-[#101828] text-5xl font-semibold">
              Ready to clear the path to perfect communication?
            </h2>
          </div>
          <div className="flex-none hidden lg:block">
            <Image src={Mockup} className="w-max" />
          </div>
        </div>
      </div> */}

      {/* FAQ */}
      <div className="max-w-screen-xl mx-auto px-4 py-28">
        <div className="lg:flex gap-16 justify-between">
          <div className="flex-">
            <div className="space-y-4">
              <p className="text-[#175CD3] text-lg font-semibold">Support</p>
              <h2 className="text-[#1D2939] text-5xl font-semibold">FAQs</h2>
              <p className="text-[#667085] max-w-sm">
                Everything you need to know about the product and billing. Can’t
                find the answer you’re looking for? Please{" "}
                <Link href="/" className="underline">
                  chat to our friendly team.
                </Link>
              </p>
            </div>
          </div>
          <div className="flex-1 mt-10 divide-y divide-gray-100 rounded-xl border border-[#EAECF0] bg-[#F9FAFB]">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 [&_summary::-webkit-details-marker]:hidden bg-[#F9FAFB]"
                open={index === 0} // Open only the first FAQ by default
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#101828]">
                  <h2 className="text-xl font-medium">{faq.question}</h2>

                  <span className="relative h-5 w-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-[#475467] text-lg">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
