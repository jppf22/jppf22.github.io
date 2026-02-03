import Image from "next/image";
import Chat from "../components/Chat";

export default function Home() {

    const messages = ["Test1", "Test2", "Test3"];

  return (
    <div>
          <Chat pastMessages={messages}/>
    </div>
  );
}
