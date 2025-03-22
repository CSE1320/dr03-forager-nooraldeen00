import Message from "../../components/Message";

export default function SandboxPage() {
  return (
    <div className="page flex justify-center items-center h-screen bg-gray-100">
      <Message
        icon="/warning.png"
        header="ATTENTION"
        message="Do not consume wild mushrooms without expert identification!"
        type="error"
      />
    </div>
  );
}
