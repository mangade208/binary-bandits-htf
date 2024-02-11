import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   console.log(email);
  //   console.log(password);
  //   console.log(confirmPassword);
  // }, [email, password, confirmPassword]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        "http://localhost:3000/auth/login",
        JSON.stringify({ email, password, name }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(user);
      console.log(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5 text-center">
        <h2 className="font-bold text-blue-700 text-3xl">Login</h2>
        <p className="text-blue-700 text-lg">
          Please enter your email and password
        </p>
      </div>
      <form onSubmit={handleSubmit} className="items-center mt-5">
        <div className="m-auto flex flex-col justify-center items-center">
          <div className="w-1/3">
            <Input
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="w-1/3">
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="mt-5 w-1/3">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
