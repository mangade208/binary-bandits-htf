import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Card from "./Card";
import janeImg from "../assets/images/testimonial-1.png";
import jacobImg from "../assets/images/testimonial-2.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-5">
        <div className="mt-3 w-[500px]">
          <h2 className="text-5xl font-bold text-stone-100">
            Learn the art of Learning
          </h2>
          <p className="mt-5 text-xl text-stone-100">
            EduChain is a decentralized online learning platform that leverages
            blockchain technology to tokenize course ownership and combat piracy
            in online education. By tokenizing courses as non-fungible tokens
            (NFTs) on the blockchain, EduChain ensures transparent ownership
            records and enables users to resell courses within the platform.
          </p>
          <Link to="login">
            <Button className="bg-orange rounded-3xl p-7 text-lg ite my-3 font-bold">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-around">
        <Card
          courseFeedback={
            "This is a great course. It helped me a lot. Thank you"
          }
          name={"Jane Cooper"}
          profession={"Developer, Sony"}
          profilePhoto={janeImg}
        ></Card>
        <Card
          courseFeedback={"Amazing Work! Well done!"}
          name={"Jacob Jones"}
          profession={"Designer, Facebook"}
          profilePhoto={jacobImg}
        ></Card>
      </div>
    </div>
  );
}
