import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

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
    <>
      <h2 className="font-bold text-blue-700 text-3xl">Sign Up</h2>
      <p className="text-blue-700 text-lg">
        Please enter your email and password
      </p>
      <form onSubmit={handleSubmit} className="flex items-center mt-5">
        <div className="flex flex-col m-auto">
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" className="mt-5">
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
}
