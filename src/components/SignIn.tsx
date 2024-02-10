import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   console.log(email);
  //   console.log(password);
  //   console.log(confirmPassword);
  // }, [email, password, confirmPassword]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!email || !password || !confirmPassword) {
        return alert("every fields are required!");
      }

      setError(false);

      if (password.toString() !== confirmPassword.toString()) {
        return setError(true);
      }

      const user = await axios.post(
        "http://localhost:3000/auth/signIn",
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
      {error && <p>password and confirm Password not matched</p>}
      <form onSubmit={handleSubmit} className="flex items-center mt-5">
        <div className="flex flex-col m-auto">
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            placeholder="confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
