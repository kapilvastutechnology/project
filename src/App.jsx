import { Button, Input } from "@heroui/react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className="p-5 max-w-[300px]">


      <form onSubmit={handleSubmit} className="space-y-4">

        <Input
          onChange={handleSubmit}
          label='email' name="email" />

        <Button type="submit">Submit</Button>
      </form>

    </div>
  )
}